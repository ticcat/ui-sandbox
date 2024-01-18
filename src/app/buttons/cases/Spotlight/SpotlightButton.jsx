import { animateStateValue } from "@/util/StateUtil";
import { useEffect, useRef, useState } from "react";
import styles from "./SpotlightButton.module.css";

export default function SpotlightButton() {
  const container = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [huePos, setHuePos] = useState({ xH: 0, yH: 0 });
  const [glowBorderMult, setGlowBorderMult] = useState(0.75);
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    if (isActive) {
      animateStateValue(setGlowBorderMult, glowBorderMult, 0.75, 0.025);
    } else {
      animateStateValue(setGlowBorderMult, glowBorderMult, 3.5, 0.1);
    }
    setIsActive(!isActive);
  };

  function updateMousePos({ x = 0, y = 0 }) {
    if (!isActive) {
      setMousePos({ x: x.toFixed(2), y: y.toFixed(2) });
      setHuePos({
        xH: (x / container.current.clientWidth).toFixed(2),
        yH: (y / container.current.clientHeight).toFixed(2),
      });
    }
  }

  useEffect(() => {
    document.body.addEventListener("pointermove", updateMousePos);
    return () =>
      document.body.removeEventListener("pointermove", updateMousePos);
  });

  return (
    <div
      style={{
        "--x": mousePos.x,
        "--y": mousePos.y,
        "--xH": huePos.xH,
        "--yH": huePos.yH,
        "--glow-border-mult-base": glowBorderMult,
      }}
      ref={container}
      className={styles.background}
    >
      <div
        className={`${styles.container} ${isActive && styles.isActive}`}
        data-glow
        onClick={() => clickHandler()}
      >
        <div data-glow></div>
        Click me!
      </div>
    </div>
  );
}
