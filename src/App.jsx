import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]); // [1
  useEffect(() => {
    axios
      .get(
        "https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3"
      )
      .then((res) => {
        setData(res.data.data.saltSuggestions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const cards = data.map((salt) => {
    return <Card key={salt.id} salt={salt} />;
  });
  return (
    <main className="p-10 flex flex-col gap-8 max-w-6xl m-auto">
      {cards}
    </main>
  );
}

export default App;
