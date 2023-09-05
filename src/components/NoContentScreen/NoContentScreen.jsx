import style from "./NoContentScreen.module.css";

export default function NoContentScreen() {
  return (
    <div className={style.noCaseContainer}>
      <p className={style.title}>No study cases yet</p>
      <p className={style.sadFace}>😔</p>
    </div>
  );
}
