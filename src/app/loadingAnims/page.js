import Head from "next/head";
import styles from "./styles/page.module.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Sandbox</title>
      </Head>
      <main className={styles.main}>
        <h1>Loading animations</h1>
      </main>
    </>
  );
}
