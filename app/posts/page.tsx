import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/content";
import Link from "next/link";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Blog Posts
      </h1>
      <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        My thoughts on software development and more.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`/posts/${post.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Read Post
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
