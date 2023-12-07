import "@/styles/reset.css";
import Card from "@/components/card/Card";
import items from "../mock.json";
import Modal from "./components/modal/modal";

function App() {
  console.log(items);
  return (
    <>
      {items.map((item) => (
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
