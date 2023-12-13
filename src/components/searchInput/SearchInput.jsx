import { useSearchParams } from "react-router-dom";
import styles from "./SearchInput.module.css";
import { forwardRef, useState } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default forwardRef(function SearchInput(props, ref) {
  const [value, setValue] = useState("");
  const [_, setQ] = useSearchParams();

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

  console.log(styles.classList);

  return (
    <form ref={ref} className={styles.form} onSubmit={handleSubmit}>
      <input
        className={cx("input", {
          [`${props.classList}`]: props.classList ? true : false,
        })}
        value={value}
        onChange={handleChange}
      />

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
});
