import Head from "next/head";
import styles from "./styles/page.module.css";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import { metadata } from "../layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
      <TopNavBar></TopNavBar>
      <main className={styles.main}>
        <h1>Buttons</h1>
      </main>
    </>
  );
}
