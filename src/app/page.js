import NavBar from "@/components/NavBar/NavBar";
import styles from "./styles/page.module.css";
import NavBarButton from "@/components/NavBarButton/NavBarButton";

export default function Home() {
  return (
    <>
      <NavBar>
        <NavBarButton>Test</NavBarButton>
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
