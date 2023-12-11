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

  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.input} value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}

export default SearchInput;
