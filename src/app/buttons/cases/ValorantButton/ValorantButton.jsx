import style from "./ValorantButton.module.css";

function ValorantButton({ children }) {
  return (
    <div className={style.background}>
      <div className={style.buttonContainer}>
        <div className={style.border}></div>
        <p className={style.title}>{children ? children : "PLAY"}</p>
      </div>
    </div>
  );
}

export default ValorantButton;
