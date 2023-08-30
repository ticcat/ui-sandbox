import styles from "./styles/page.module.css";
import ContentPanel from "@/components/ContentPanel/ContentPanel";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ContentPanel>Main page</ContentPanel>
      </main>
    </>
  );
}
