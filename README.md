This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment (optional)

Posts are fetched from an external API. By default this is
`https://jsonplaceholder.typicode.com`, but you can override it with an env var.

1. Copy the example env file:

	```bash
	cp .env.local.example .env.local
	```

2. Edit `.env.local` and adjust `API_BASE_URL` if you have your own backend.

### 3. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## App Structure

- `app/layout.js` – root layout, global navigation and metadata.
- `app/page.js` – home page with links to posts and articles.
- `app/posts` – list and detail pages for posts fetched from the external API.
- `app/articles` – in-project articles with list, detail, and featured views.
- `app/lib/posts.js` – helpers for fetching posts.
- `app/lib/articles.js` – in-memory articles data and helpers.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

When deploying, remember to set `API_BASE_URL` in your Vercel project if you
use a custom backend.

Live demo: https://nextjs-app-demo-lyart.vercel.app/

