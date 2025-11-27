import Link from "next/link";
import { fetchPosts } from "../lib/posts";

export default async function PostsPage() {
  const posts = await fetchPosts();

  const postsJSX = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.id}`}
        style={{
          width: "70%",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            marginTop: "20px",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Posts Page</h1>

      {/* POSTS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>
      {/*=== POSTS ==*/}

      {/* <div>
				<Todo />
			</div> */}
    </div>
  );
}
