/** @format */

import { collection, serverTimestamp } from "firebase/firestore";
import React, { Component, useState } from "react";
import { db } from "../firebase.config";
import { addDoc } from "firebase/firestore";

function TextField() {
  const colref = collection(db, "todo");
  const [todos, setTodos] = useState("");

  function addtodo(e) {
    e.preventDefault();

    console.log(todos);
    addDoc(colref, {
      Todo: todos,
      inprogress: true,
      timestamp: serverTimestamp(),
    }).then((snapshot) => {
      console.log(snapshot.docs);
    });
  }

  return (
    <div>
      <div>
        <form>
          <input
            id="todoinput"
            className="m-2"
            type={"text"}
            label={"Todo"}
            onChange={(e) => {
              setTodos(e.target.value);
            }}
          />
          <button className="m-2" type={"submit"} onClick={addtodo}>
            click me!
          </button>
        </form>
      </div>
    </div>
  );
}
export default TextField;
