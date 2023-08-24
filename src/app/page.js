import Head from "next/head";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Sandbox</title>
      </Head>
      <main className={styles.main}>
        <h1>Main Page</h1>
      </main>
    </>
  );
}
