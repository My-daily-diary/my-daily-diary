import "@/styles/reset.css";
import Card from "@/components/card/Card";
import items from "../mock.json";
import SearchInput from "./components/searchInput/SearchInput";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [q, setQ] = useSearchParams();
  const keyword = q.get("title") ?? "";

  const inputDom = useRef();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 0) {
          console.log(3);
          console.log(entry);
        }
      });
    },
    { threshold: 0 }
  );
  if (inputDom.current) {
    observer.observe(inputDom.current);
  }

  return (
    <>
      <SearchInput ref={inputDom} />
      {items
        .filter((item) => item.title.includes(keyword))
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
