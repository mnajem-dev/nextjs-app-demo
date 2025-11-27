import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1>Welcome to the NextJS App Demo</h1>
        <p>
          Explore posts fetched from a real API and curated articles managed
          inside this project.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} href="/posts">
            Browse Posts
          </Link>
          <Link className={styles.secondaryButton} href="/articles">
            View Articles
          </Link>
        </div>
      </section>
      <section className={styles.gridSection}>
        <div className={styles.card}>
          <h2>Posts</h2>
          <p>Dynamic list and detail pages powered by an external JSON API.</p>
        </div>
        <div className={styles.card}>
          <h2>Articles</h2>
          <p>Custom content with dynamic routing based on the article title.</p>
        </div>
      </section>
    </div>
  );
}
