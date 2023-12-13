import "@/styles/reset.css";
import Card from "@/components/card/Card";
import items from "../mock.json";
import SearchInput from "./components/searchInput/SearchInput";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [q, setQ] = useSearchParams();
  const keyword = q.get("title") ?? "";

  const [classList, setClassList] = useState();
  const inputDom = useRef();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 0) {
          setClassList("switch_position");
        } else {
          setClassList();
        }
      });
    },
    { threshold: 0 }
  );

  useEffect(() => {
    observer.observe(inputDom.current);
  }, []);

  return (
    <>
      <SearchInput classList={classList} ref={inputDom} />
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
