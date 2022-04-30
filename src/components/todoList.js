/** @format */

import React, { Component } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
function TodoList(props) {
  useEffect(() => {
    getTodos();
  }, []);
  const [todo, setTodo] = useState([]);
  const colref = collection(db, "todo");
  function getTodos() {
    getDocs(colref).then((doc) => {
      setTodo(
        doc.docs.map((values) => ({
          id: values.id,
          todos: values.data().Todo,
          inProgress: values.data().inprogress,
        }))
      );
    });
  }
  function todolists() {
    let v = [];

    for (let i = 0; i < todo.length; i++) {
      v.push(<li>{todo[i].todos}</li>);
    }
    console.log(v);
    return v;
  }

  return (
    <div>
      <ul>{todolists()}</ul>
    </div>
  );
}
export default TodoList;
