import style from "./HBOLoader.module.css";

export default function HBOLoader() {
  return (
    <div className={style.background}>
      <div className={style.dotContainer}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    </div>
  );
}
