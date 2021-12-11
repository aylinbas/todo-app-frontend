import "./App.css";
import { useEffect } from "react";
import Todos from "./component/Todos";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .post(`http://localhost:8080/`, {
        title: "do the shopping",
        description: "buy milk and egg",
        isDone: "false",
      })
      .then((res) => {
        const persons = res.data;
        console.log(persons);
        debugger;
      });
  }, []);
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
