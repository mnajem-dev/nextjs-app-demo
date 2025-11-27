import Link from "next/link";
import { getFeaturedArticles } from "../../lib/articles";

const FeaturedArticlesPage = () => {
	const featured = getFeaturedArticles();

	return (
		<div>
			<h2>Featured Articles</h2>
			<ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
				{featured.map((article) => (
					<li key={article.id} style={{ marginBottom: "12px" }}>
						<Link href={`/articles/${article.slug}`}>
							<div
								style={{
									background: "white",
									color: "black",
									padding: "12px 16px",
									borderRadius: "8px",
								}}
							>
								<h3>{article.title}</h3>
								<p style={{ marginTop: "4px", opacity: 0.9 }}>
									{article.summary}
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FeaturedArticlesPage;

