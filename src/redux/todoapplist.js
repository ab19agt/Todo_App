/** @format */

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { Component, useState } from "react";
import { db } from "../firebase.config";
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { todolists: [] },
  reducers: {
    addtodo(state, action) {
      let colref = collection(db, "todo");
      addDoc(colref, {
        Todo: action.payload.text,
        inprogress: true,
        timestamp: serverTimestamp(),
      });
    },
    toggletodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addtodo, togggletodo } = todosSlice.actions;
export default todosSlice.reducer;
