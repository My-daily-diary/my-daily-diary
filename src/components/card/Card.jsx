import { useRef, useState } from "react";
import styles from "./Card.module.css";
import Modal from "../modal/modal";

export default function Card({ title, date, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleModalOpen} className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
        <p className={styles.preview}>{description}</p>
      </div>
      <Modal
        handleClose={handleModalClose}
        isOpen={isOpen}
        title={title}
        date={date}
        description={description}
      />
    </>
  );
}
