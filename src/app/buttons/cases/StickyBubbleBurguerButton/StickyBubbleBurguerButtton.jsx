"use client";

import { useState } from "react";
import style from "./StickyBubbleBurguerButtton.module.css";

export default function StickyBubbleBurguerButton() {
  const [btnFillY, setBtnFillY] = useState(-75);
  const [btnClicked, setBtnClicked] = useState(false);

  let btnStyle = {
    transform: `translateY(${btnFillY}%)`,
    transition:
      btnFillY === 75 ? "none" : "transform 0.6s cubic-bezier(0.7, 0, 0.3, 1)",
  };

  function buttonFill(from, to) {
    new Promise((resolve) => {
      setBtnFillY(from);
      setTimeout(() => {
        resolve();
      }, 10);
    }).then(() => {
      setBtnFillY(to);
    });
  }

  return (
    <div
      className={style.button}
      onMouseEnter={() => !btnClicked && buttonFill(75, 0)}
      onMouseLeave={() => !btnClicked && buttonFill(0, -75)}
      onClick={() => setBtnClicked(!btnClicked)}
    >
      <div style={btnStyle} className={style.fill}></div>
      <div className={style.text}>
        <div
          className={btnClicked ? style.burguerLinesActive : style.burguerLines}
        ></div>
      </div>
    </div>
  );
}
