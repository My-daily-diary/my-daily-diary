import { useRef, useState } from "react";
import styles from "./Card.module.css";

export default function Card({ title, date, description }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
      <p className={styles.preview}>{description}</p>
      <div></div>
    </div>
  );
}
