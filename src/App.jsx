import "@/styles/reset.css";
import Card from "@/components/card/Card";
import items from "../mock.json";
import SearchInput from "./components/searchInput/SearchInput";
import { useState } from "react";
import {
  BrowserRouter,
  Router,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";

function App() {
  const [q, setQ] = useSearchParams();
  const keyword = q.get("title") ?? "";
  console.log(keyword);

  return (
    <>
      <SearchInput />
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
