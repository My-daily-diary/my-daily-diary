import Portal from "../portal/portal";
import styles from "./Modal.module.css";
import { useRef } from "react";
const Modal = ({ handleClose, isOpen, title, date, description }) => {
  if (!isOpen) return null;
  const outside = useRef();

  const handleBackDropClick = (e) => {
    if (back.current === e.target) {
      handleClose();
    }
  };
  return (
    <Portal>
      <div
        ref={outside}
        onClick={handleBackDropClick}
        className={styles.modal_wrapper}
      >
        <div className={styles.modal}>
          <div className={styles.title}>{title}</div>
          <button onClick={handleClose}>X</button>
          <div className={styles.date}>{date}</div>
          <p className={styles.preview}>{description}</p>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
