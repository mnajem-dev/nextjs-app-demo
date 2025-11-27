import { notFound } from "next/navigation";
import { fetchPostById } from "../lib/posts";

export default async function PostDetails({ postId }) {
	const post = await fetchPostById(postId);

	if (!post) {
		notFound();
	}

	return (
		<div>
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

				<hr />

				<p>{post.body}</p>
			</div>
		</div>
	);
}
