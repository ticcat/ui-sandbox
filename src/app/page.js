import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./styles/page.module.css";
import NavBarButton from "@/components/NavBarButton/NavBarButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>UI Sandbox</title>
      </Head>
      <NavBar>
        <NavBarButton href="/buttons">Test</NavBarButton>
        <NavBarButton>Test</NavBarButton>
        <NavBarButton>Test</NavBarButton>
        <NavBarButton>Test</NavBarButton>
      </NavBar>
      <main className={styles.main}>
        <h1>Main Page</h1>
      </main>
    </>
  );
}
