/** @format */

import { collection, serverTimestamp } from "firebase/firestore";
import React, { Component, useState } from "react";
import { db } from "../firebase.config";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/todoapplist";

function Textfield() {
  const colref = collection(db, "todo");
  const dispatch = useDispatch();
  let input = "";
  function dispatchtodo() {
    dispatch(addtodo({ text: input }));
  }
  return (
    <div>
      <div>
        <form>
          <TextField
            style={{ width: "90vw", maxWidth: "500px" }}
            id="standard-basic"
            label=""
            variant="standard"
            className="m-2"
            onChange={(e) => {
              e.preventDefault();

              input = e.target.value;
            }}
          />
          <Button variant="text" onClick={dispatchtodo}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Textfield;
