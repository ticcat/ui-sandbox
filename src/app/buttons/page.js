import Head from "next/head";
import styles from "./styles/page.module.css";
import NavBar from "@/components/NavBar/NavBar";
import NavBarButton from "@/components/NavBarButton/NavBarButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Sandbox</title>
      </Head>
      <NavBar>
        <NavBarButton>Test</NavBarButton>
        <NavBarButton>Test</NavBarButton>
        <NavBarButton>Test</NavBarButton>
        <NavBarButton>Test</NavBarButton>
      </NavBar>
      <main className={styles.main}>
        <h1>Buttons</h1>
      </main>
    </>
  );
}
