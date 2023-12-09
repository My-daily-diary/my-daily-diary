import styles from "./SearchInput.module.css";

function SearchInput({ value, onChange }) {
  return (
    <>
      <input className={styles.input} value={value} onChange={onChange} />
    </>
  );
}

export default SearchInput;
