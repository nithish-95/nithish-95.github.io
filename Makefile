.PHONY: update

# Default commit message if none is provided
MSG ?= "Update files"

update:
	git add -u
	git commit -m "$(MSG)"
	git push
	
all: clean build run

build:
	CGO_ENABLED=1 go build -o bin/chatapp .
run: 
	bin/chatapp
clean:
	go mod tidy
	rm bin/* || true