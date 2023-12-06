import { useRef, useState } from "react";
import styles from "./Card.module.css";

export default function Card() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  const likeButton = useRef();

  const handleClick = () => {
    setCount((prev) => prev + 1);

    setColor((prev) => (prev === "red" ? "" : "red"));
  };

  
  return (
    <div className={styles.wrapper}>
      <h1>title</h1>
      {/* <timeStamp/> */}
      <p>description</p>
      <div>
        <button
          className={styles[color]}
          ref={likeButton}
          onClick={handleClick}
        >
          좋아요
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
}
