import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Page</h1>
      <a href="/firstRouter">Go to first router</a>
    </main>
  );
}
