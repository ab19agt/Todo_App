/** @format */

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todoapplist";

export default configureStore({
  reducer: { todo: todosSlice },
});
