import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Todos.css";

function Todos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [response, setResponse] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (title !== "" && description !== "") {
      axios
        .post(
          `https://8080-1e316105-1adc-490c-b678-5d7376cc7965.cs-europe-west4-bhnf.cloudshell.dev/?authuser=0`,
          {
            title: title,
            description: description,
            isDone: "false",
          }
        )
        .then((res) => {
          const todos = res.data;

          var allTodos = Object.entries(Object.entries(todos)[0][1]);
          setResponse(allTodos);
        });
    } else {
      alert(" Title and description fields cannot be left blank.");
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://8080-1e316105-1adc-490c-b678-5d7376cc7965.cs-europe-west4-bhnf.cloudshell.dev/?authuser=0`
      )
      .then((res) => {
        debugger;
        const todos = res.data;
        if (todos[0] != null) {
          var allTodos = Object.entries(Object.entries(todos)[0][1]);
          setResponse(allTodos);
        }
      });
  }, []);

  useEffect(() => {
    console.log(response);

    var todoArr = [];
    response.map((item) => {
      const myArr = JSON.parse(item[1]);
      todoArr.push(myArr);
      return console.log(myArr);
    });
    setTodos(todoArr);
  }, [response]);

  return (
    <div data-testid="todo-element" className="todosContainer">
      <h2 data-testid="todo-title">Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="titleContainer">Title:</div>
          <input
            className="inputContainer"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br></br>
        <div className="container">
          <div className="titleContainer">Description:</div>
          <input
            className="inputContainer"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br></br>
        <input className="submitButton" type="submit" value="Add" />
      </form>
      <h2>My Todos</h2>
      <div className="container">
        <ul>
          {todos.map((todo) => {
            return (
              <li>
                <div className="title">{todo.title} </div>
                <span className="description">{todo.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
