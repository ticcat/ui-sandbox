import styles from "./ContentPanel.module.css";

function ContentCard({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles.preview}></div>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
}

function ContentPanel() {
  const testProjects = [
    <ContentCard key={1}>Button 1</ContentCard>,
    <ContentCard key={2}>Button 2</ContentCard>,
    <ContentCard key={3}>Button 3</ContentCard>,
    <ContentCard key={4}>Button 4</ContentCard>,
    <ContentCard key={5}>Button 5</ContentCard>,
    <ContentCard key={1}>Button 1</ContentCard>,
    <ContentCard key={2}>Button 2</ContentCard>,
    <ContentCard key={3}>Button 3</ContentCard>,
    <ContentCard key={4}>Button 4</ContentCard>,
  ];

  return <div className={styles.container}>{testProjects}</div>;
}

export default ContentPanel;
