import style from "./NoContentScreen.module.css";

export default function NoContentScreen({ children }) {
  return (
    <div className={style.noCaseContainer}>
      <p className={style.title}>{children}</p>
      <p className={style.sadFace}>😔</p>
    </div>
  );
}
