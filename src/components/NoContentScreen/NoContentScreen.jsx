import style from "./NoContentScreen.module.css";

export default function NoContentScreen({ title }) {
  return (
    <div className={style.noCaseContainer}>
      <p className={style.title}>{title}</p>
      <p className={style.sadFace}>😔</p>
    </div>
  );
}
