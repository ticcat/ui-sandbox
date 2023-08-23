import NavBar from "@/components/NavBar/NavBar";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className={styles.main}>
        <h1>Main Page</h1>
      </main>
    </>
  );
}
