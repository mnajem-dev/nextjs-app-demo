import Link from "next/link";

export default function ArticleNotFound() {
	return (
		<div>
			<h2>Article not found</h2>
			<p>The article you are looking for does not exist.</p>
			<p>
				<Link href="/articles">Back to articles</Link>
			</p>
		</div>
	);
}
