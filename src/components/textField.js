/** @format */

import { collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase.config";
import { addDoc } from "firebase/firestore";
import { TextField, Button } from "@mui/material";

function Textfield() {
  const colref = collection(db, "todo");
  const [todos, setTodos] = useState("");

  function addtodo(e) {
    e.preventDefault();

    console.log(todos);
    addDoc(colref, {
      Todo: todos,
      inprogress: true,
      timestamp: serverTimestamp(),
    });
    setTodos("");
  }

  return (
    <div>
      <div>
        <form>
          <TextField
            style={{ width: "90vw", maxWidth: "500px" }}
            id="standard-basic"
            label=""
            value={todos}
            variant="standard"
            className="m-2"
            onChange={(e) => {
              setTodos(e.target.value);
            }}
          />
          <Button variant="text" onClick={addtodo}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Textfield;
