import Portal from "../portal/portal";
import styles from "./Modal.module.css";
const Modal = ({ handleClose, isOpen, title, date, description }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <button onClick={handleClose}>X</button>
        <div className={styles.date}>{date}</div>
        <p className={styles.preview}>{description}</p>
      </div>
    </Portal>
  );
};

export default Modal;
