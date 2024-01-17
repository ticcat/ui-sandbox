import { useEffect, useRef, useState } from "react";
import styles from "./SpotlightButton.module.css";

export default function SpotlightButton() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [huePos, setHuePos] = useState({ xH: 0, yH: 0 });
  const container = useRef(null);

  function updateMousePos({ x, y }) {
    setMousePos({ x: x.toFixed(2), y: y.toFixed(2) });
    setHuePos({
      xH: (x / container.current.clientWidth).toFixed(2),
      yH: (y / container.current.clientHeight).toFixed(2),
    });
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
      }}
      ref={container}
      className={styles.background}
    >
      <div className={styles.container} data-glow>
        <div data-glow></div>
      </div>
    </div>
  );
}
