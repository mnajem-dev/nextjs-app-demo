import { Suspense } from "react";
import PostDetails from "@/app/components/postDetails";
import { fetchPostById } from "@/app/lib/posts";

export async function generateMetadata({ params }) {
	const post = await fetchPostById(params.postId);

	if (!post) {
		return {
			title: "Post not found | NextJS App Demo",
		};
	}

	return {
		title: `${post.title} | NextJS App Demo`,
		description: post.body,
	};
}

export default async function PostDetailsPage({ params }) {
	const postId = params.postId;

	const loaingJsx = (
		<div>
			<h1>wait...</h1>
		</div>
	);
	return (
		<div style={{ padding: "20px" }}>
			<h1>Post Details</h1>

			<Suspense fallback={loaingJsx}>
				<PostDetails postId={postId} />
			</Suspense>
		</div>
	);
}

