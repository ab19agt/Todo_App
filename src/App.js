/** @format */

import "./App.css";
import TextField from "./components/textField";
import TodoList from "./components/todoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Test Todo App</h1>
      <TextField />
      <TodoList name="text" />
    </div>
  );
}

export default App;
