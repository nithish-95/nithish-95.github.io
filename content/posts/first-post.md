---
id: 1
title: "Building and Deploying a Real-Time Multiplayer Game on AWS"
published_at: "2025-11-16T12:00:00Z"
summary: "A journey through building a WebSocket-powered Tic-Tac-Toe game with Go and deploying it to AWS Fargate with Docker, covering real-time communication, containerization, and cloud infrastructure"
---

Ever wondered how to build and deploy a real-time multiplayer game to the cloud? In this post, I'll walk you through my journey of creating a WebSocket-powered Tic-Tac-Toe game with Go and deploying it to AWS Fargate.

## What We're Building

A fully functional multiplayer Tic-Tac-Toe game where players can:

- Create private game rooms with unique codes
- Join games using a 6-character game ID
- Play in real-time with WebSocket communication
- See instant updates as opponents make moves

**Tech Stack:**

- **Backend:** Go with Chi router and Melody (WebSocket library)
- **Frontend:** Vanilla JavaScript with Tailwind CSS
- **Infrastructure:** Docker + AWS Fargate (serverless containers)
- **Deployment:** Application Load Balancer + Route 53

## Part 1: Building the Application

### The Game Logic

The heart of the application is surprisingly simple. We maintain game state in memory using Go maps:

```go
type Game struct {
    Board       [9]string
    Turn        string
    Winner      string
    IsDraw      bool
    Player1Name string
    Player2Name string
}

var games = make(map[string]*Game)
var players = make(map[string]map[*melody.Session]string)
```

Each game is identified by a randomly generated 6-character hex ID, and WebSocket sessions are mapped to player symbols (X or O).

### Real-Time Communication

WebSockets make the magic happen. When a player makes a move, the server:

1. Validates the move (correct turn, empty cell, game not over)
2. Updates the game state
3. Checks for win/draw conditions
4. Broadcasts the new state to both players

```go
socket.send(JSON.stringify({ 
    type: "move", 
    player: player, 
    cell: cellIndex 
}));
```

### Handling Player Disconnections

One interesting challenge was handling disconnections gracefully:

- If Player 1 (host) leaves → game ends for everyone
- If Player 2 leaves → game resets for Player 1, who can wait for a new opponent
- If both players disconnect → game is cleaned up from memory

## Part 2: Containerization

The Dockerfile uses a multi-stage build to keep the final image lean:

**Stage 1 - Builder:**

- Uses `golang:alpine` to compile the Go application
- Downloads dependencies and builds the binary

**Stage 2 - Runtime:**

- Uses minimal `alpine:latest` base image
- Copies only the compiled binary and static assets
- Runs as non-root user for security
- Final image is just ~20MB!

```dockerfile
FROM golang:alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o /app/bin/tictac .

FROM alpine:latest
# ... copy binary and assets
ENTRYPOINT ["/app/bin/tictac"]
EXPOSE 3000
```

## Part 3: AWS Infrastructure

### Architecture Overview

Here's what we're building:

```
Internet → Route 53 → Application Load Balancer → Fargate Tasks
                              ↓
                        Target Group
                              ↓
                        ECS Service (Fargate)
                              ↓
                        Docker Container (Port 3000)
```

### Step-by-Step Deployment

**1. Create ECR Repository**

```bash
aws ecr create-repository --repository-name tic-tac-toe
```

**2. Build and Push Docker Image**

```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | \
    docker login --username AWS --password-stdin \
    YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com

# Build and push
docker build -t tic-tac-toe .
docker tag tic-tac-toe:latest YOUR_ECR_URI:latest
docker push YOUR_ECR_URI:latest
```

**3. Set Up ECS Infrastructure**

Create an ECS cluster, task definition with proper IAM roles, and register it:

```bash
aws ecs create-cluster --cluster-name tic-tac-toe
aws ecs register-task-definition --cli-input-json file://task-definition.json
```

The task definition specifies:

- Fargate compatibility
- 256 CPU units, 512 MB memory (minimal and cost-effective!)
- Port 3000 mapping
- ECR image location

**4. Configure Networking**

Set up security groups for defense in depth:

- **ALB Security Group:** Allow HTTP (port 80) from anywhere
- **Service Security Group:** Allow port 3000 only from ALB

This ensures your containers aren't directly accessible from the internet.

**5. Create Application Load Balancer**

The ALB acts as the public entry point:

```bash
aws elbv2 create-load-balancer \
    --name tic-tac-toe-lb \
    --subnets subnet-xxx subnet-yyy \
    --security-groups sg-xxxxx
```

Create a target group pointing to port 3000 with health checks on `/`, then add an HTTP listener to route traffic.

**6. Launch the ECS Service**

Finally, create the service that ties everything together:

```bash
aws ecs create-service \
    --cluster tic-tac-toe \
    --service-name tic-tac-toe-service \
    --task-definition tic-tac-toe \
    --desired-count 1 \
    --launch-type FARGATE \
    --load-balancers targetGroupArn=XXX,containerName=tic-tac-toe,containerPort=3000
```

**7. Custom Domain (Optional)**

Point your domain to the ALB using Route 53:

```bash
aws route53 change-resource-record-sets \
    --hosted-zone-id YOUR_ZONE_ID \
    --change-batch file://route53-record.json
```

After DNS propagation (5-30 minutes), your game is live!

## Lessons Learned

### What Went Well

- **WebSockets on Fargate:** No special configuration needed, just works!
- **Docker Multi-Stage Builds:** Kept deployment fast with tiny images
- **Serverless Containers:** No server management, automatic scaling
- **Cost Efficiency:** Running 24/7 costs only ~$40/month

### Challenges

- **DNS Propagation:** Had to wait patiently for Route 53 changes
- **Security Group Confusion:** Initially couldn't connect; forgot to link ALB SG to service SG
- **WebSocket Protocol:** Had to use `wss://` for HTTPS, `ws://` for HTTP
- **State Management:** In-memory storage means games reset on deployments (could add Redis for persistence)

### Cost Management

To keep costs low:

```bash
# Stop the service (scale to 0 tasks)
aws ecs update-service --cluster tic-tac-toe \
    --service tic-tac-toe-service --desired-count 0

# Start it back up when needed
aws ecs update-service --cluster tic-tac-toe \
    --service tic-tac-toe-service --desired-count 1
```

The ALB costs ~$20/month even when idle, so consider deleting it if you won't use the app for a while.

## Next Steps

Some ideas for taking this further:

- **Add HTTPS:** Use AWS Certificate Manager for free SSL certificates
- **Persistent Storage:** Use Redis/DynamoDB to survive deployments
- **CI/CD Pipeline:** Auto-deploy on git push using CodePipeline
- **Monitoring:** CloudWatch dashboards and alarms
- **Auto-scaling:** Scale based on active games/players
- **Game History:** Store past games and player stats

## Try It Yourself

The complete code is available on [GitHub](https://github.com/nithish-95/tic-tac-toe). You can:

1. Clone the repo
2. Test locally with `make all`
3. Follow the README for AWS deployment
4. Play at your own custom domain!

## Conclusion

Building and deploying a real-time multiplayer game turned out to be more straightforward than I expected. AWS Fargate removes the complexity of server management, while Go and WebSockets provide a solid foundation for real-time features.

The combination of serverless containers, managed load balancing, and a lightweight tech stack resulted in a scalable, maintainable application that costs less than a few coffees per month.

Whether you're building a simple game or a complex real-time application, this stack provides a great starting point. The principles here apply to chat apps, collaborative tools, live dashboards, and more.

**What will you build with real-time WebSockets and serverless containers?**

---

*Have questions or built something similar? Drop a comment below or reach out on GitHub!*
