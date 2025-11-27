import { notFound } from "next/navigation";
import { getArticleBySlug } from "../../lib/articles";

export function generateMetadata({ params }) {
	const { title: slug } = params;
	const article = getArticleBySlug(slug);

	if (!article) {
		return {
			title: "Article not found | NextJS App Demo",
		};
	}

	return {
		title: `${article.title} | NextJS App Demo`,
		description: article.summary,
	};
}

export default function ShowArticlePage({ params }) {
	const { title: slug } = params;
	const article = getArticleBySlug(slug);

	if (!article) {
		notFound();
	}

	return (
		<div>
			<h2>{article.title}</h2>
			<p style={{ marginTop: "8px", opacity: 0.9 }}>{article.summary}</p>
			<hr style={{ margin: "16px 0" }} />
			<p>{article.content}</p>
		</div>
	);
}

