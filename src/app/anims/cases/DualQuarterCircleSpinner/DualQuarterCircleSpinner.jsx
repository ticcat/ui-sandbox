import style from "./DualQuarterCircleSpinner.module.css";

function DualQuarterCircleSpinner() {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
    </div>
  );
}

export default DualQuarterCircleSpinner;
