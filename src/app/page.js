import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <>
      <main className="main">
        <div className={styles.container}>
          <h1>Hello there 👋</h1>
          <p className={styles.text}>
            This is a website I use to host all my &quot;study-cases&quot; In
            here you will find UI components such as buttons or loaders I find
            on the internet recreated by me, using SASS.
          </p>
          <p className={styles.text}>
            I plan for this website to be an ever-growing UI library where other
            devs can get an example on how to implement cool UI components.
          </p>
        </div>
      </main>
    </>
  );
}
