/** @format */

import React, { Component } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
function TodoList(props) {
  useEffect(() => {
    getTodos();
  }, []);
  const [todo, setTodo] = useState([]);
  const colref = collection(db, "todo");
  function getTodos() {
    getDocs(colref).then((dos) => {
      setTodo(
        dos.docs.map((values) => ({
          id: values.id,
          todos: values.data().Todo,
          inProgress: values.data().inprogress,
        }))
      );
    });
  }
  function todolists() {
    let v = [];

    /* for (let i = 0; i < todo.length; i++) {
      console.log(todo[i].id);
      v.push(
        <div>
          <li>{todo[i].todos}</li>
          <button id={todo[i].id} onClick={deleteTodo(todo[i].id)}>
            delete
          </button>
        </div>
      );
    } */

    console.log(v);
    return v;
  }
  function deleteTodo(id) {
    deleteDoc(doc(db, "todo", id));
  }

  return (
    <div>
      <ul>
        {todo.map((dt) => {
          return (
            <div>
              <li>{dt.todos}</li>
              <button onClick={deleteTodo(dt.id)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default TodoList;
