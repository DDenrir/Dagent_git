import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Build <span className={styles.gradientText}>Faster</span>
            </h1>
            <p className={styles.subtitle}>
              Your new Next.js project is ready. Start building something amazing.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                Read Docs
              </a>
              <a
                href="https://github.com/vercel/next.js"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <div className={styles.featuresGrid}>
          <div className={styles.card}>
            <h3>App Router</h3>
            <p>Leverage the power of the new App Router for easy routing and layouts.</p>
          </div>
          <div className={styles.card}>
            <h3>TypeScript</h3>
            <p>Built with TypeScript for type safety and better developer experience.</p>
          </div>
          <div className={styles.card}>
            <h3>Vanilla CSS</h3>
            <p>Styled with pure CSS variables and modern layout techniques.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </p>
      </footer>
    </div>
  );
}
