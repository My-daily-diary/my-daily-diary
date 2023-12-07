import "@/styles/reset.css";
import Card from "@/components/card/Card";
import items from "../mock.json";

function App() {
  return (
    <>
      {items.map((item) => {
        return (
          <Card
            id={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        );
      })}
    </>
  );
}

export default App;
