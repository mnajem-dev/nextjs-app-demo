import Link from "next/link";

export default function PostNotFound() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Post not found</h1>
      <p>The post you are looking for does not exist.</p>
      <p>
        <Link href="/posts">Back to posts</Link>
      </p>
    </div>
  );
}
