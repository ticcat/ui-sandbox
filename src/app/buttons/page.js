import Head from "next/head";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
      <main className={styles.main}>
        <h1>Buttons</h1>
      </main>
    </>
  );
}
