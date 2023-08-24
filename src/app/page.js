import Head from "next/head";
import styles from "./styles/page.module.css";
import TopNavBar from "../components/TopNavBar/TopNavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Sandbox</title>
      </Head>
      <TopNavBar></TopNavBar>
      <main className={styles.main}>
        <h1>Main Page</h1>
      </main>
    </>
  );
}
