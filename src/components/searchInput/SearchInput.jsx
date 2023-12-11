import { useSearchParams } from "react-router-dom";
import styles from "./SearchInput.module.css";
import { useState } from "react";

function SearchInput() {
  const [value, setValue] = useState("");
  const [q, setQ] = useSearchParams();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQ({ title: value });
  };

  const handleRemoveInput = () => {
    setValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} value={value} onChange={handleChange} />

      {value && (
        <img
          onClick={handleRemoveInput}
          className={styles.close_button}
          src="src/assets/close.svg"
        />
      )}
      <button>검색</button>
    </form>
  );
}

export default SearchInput;
