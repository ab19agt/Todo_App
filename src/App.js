/** @format */

import "./App.css";
import Textfield from "./components/textField";
import TodoList from "./components/todoList";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.config";
import { Card } from "@mui/material";

function App() {
  /* useEffect(() => {
    onSnapshot(collection(db, "todo"), (dos) => {
      setTodo(
        dos.docs.map((values) => ({
          id: values.id,
          todos: values.data().Todo,
          inProgress: values.data().inprogress,
        }))
      );
    });
  }, []); */

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Todo App</h2>
      <Card variant="Basic" style={{ padding: "20px" }}>
        <Textfield />
        {/* <ul>
          {todo.map((dt) => {
            return (
              <TodoList
                id={dt.id}
                todo={dt.todos}
                timestamp={dt.timestamp}
                inProgress={dt.inProgress}
                key={dt.id + 1}
              />
            );
          })}
        </ul> */}
      </Card>
    </div>
  );
}

export default App;
