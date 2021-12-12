import "./App.css";
import Todos from "./component/Todos/Todos.js";
function App() {
  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:8080/`, {
  //       title: "do the shopping",
  //       description: "buy milk and egg",
  //       isDone: "false",
  //     })
  //     .then((res) => {
  //       const todos = res.data;
  //       console.log(todos);
  //       debugger;
  //     });
  // }, []);
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
