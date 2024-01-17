import styles from "./ChangeOnHover.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ChangeOnHoverButton() {
  const text = "Click me!";

  console.log(styles.letter);

  useGSAP(() => {
    gsap.fromTo(
      "#letter",
      {
        scale: 1,
      },
      {
        scale: 2,
        stagger: 0.2,
        repeat: 1,
        yoyo: true,
        duration: 0.1,
      }
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {text.split("").map((letter, index) =>
          letter === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <span id="letter" key={index}>
              {letter}
            </span>
          )
        )}
      </div>
    </div>
  );
}
