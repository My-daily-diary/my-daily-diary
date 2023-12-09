import "@/styles/reset.css";
import Card from "@/components/card/Card";
import items from "../mock.json";
import Modal from "./components/modal/modal";
import SearchInput from "./components/searchInput/SearchInput";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <SearchInput value={inputValue} onChange={onChangeInput} />
      {items
        .filter((item) => item.title.includes(inputValue))
        .map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
    </>
  );
}

export default App;
