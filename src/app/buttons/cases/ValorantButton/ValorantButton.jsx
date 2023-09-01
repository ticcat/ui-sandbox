import style from "./ValorantButton.module.css";

function ValorantButton({ children }) {
  return (
    <div className={style.buttonContainer}>
      <p className={style.title}>{children ? children : "PLAY"}</p>
    </div>
  );
}

export default ValorantButton;
