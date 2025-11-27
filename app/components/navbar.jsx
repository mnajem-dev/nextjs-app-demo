"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.brand}>NextJS App Demo</div>
			<div className={styles.links}>
				<Link className={styles.link} href="/">
					Home
				</Link>
				<Link className={styles.link} href="/posts">
					Posts
				</Link>
				<Link className={styles.link} href="/articles">
					Articles
				</Link>
			</div>
		</nav>
	);
}
