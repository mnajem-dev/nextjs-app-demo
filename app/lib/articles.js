const ARTICLES = [
	{
		id: 1,
		slug: "getting-started-with-nextjs",
		title: "Getting Started with Next.js",
		summary: "Understand the basics of the Next.js App Router and file-based routing.",
		content:
			"Next.js provides a powerful App Router, server components, and built-in data fetching capabilities. This article walks through the fundamentals so you can start shipping quickly.",
		isFeatured: true,
	},
	{
		id: 2,
		slug: "data-fetching-strategies",
		title: "Data Fetching Strategies",
		summary: "Compare SSR, SSG, ISR, and client-side fetching in real apps.",
		content:
			"Choosing the right data fetching strategy depends on your data freshness requirements and performance goals. We compare SSR, SSG, ISR, and client-side rendering with examples.",
		isFeatured: true,
	},
	{
		id: 3,
		slug: "styling-nextjs-apps",
		title: "Styling Next.js Apps",
		summary: "Explore CSS Modules, global CSS, and utility-first approaches.",
		content:
			"Next.js supports multiple styling options out of the box. Learn how to use CSS Modules, global styles, and utility-first frameworks in a maintainable way.",
		isFeatured: false,
	},
];

export function getArticles() {
	return ARTICLES;
}

export function getArticleBySlug(slug) {
	return ARTICLES.find((article) => article.slug === slug) || null;
}

export function getFeaturedArticles() {
	return ARTICLES.filter((article) => article.isFeatured);
}
