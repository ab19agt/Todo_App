/** @format */

import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { Button, ListItemButton, ListItemText } from "@mui/material";
function TodoList(id) {
  function deleteTodo() {
    deleteDoc(doc(db, "todo", id.id));
  }
  function toggleInProgress() {
    id.inProgress
      ? updateDoc(colref, { inprogress: false })
      : updateDoc(colref, { inprogress: true });
  }
  const colref = doc(db, "todo", id.id);

  return (
    <div
      style={{
        display: "flex",
        width: "90vw",
        maxWidth: "500px",
        marginTop: "24px",
      }}
    >
      <ListItemButton component="a" href="#simple-list">
        <ListItemText
          primary={id.todo}
          secondary={id.inProgress ? "Not done" : "is done"}
          key={id.id}
        />
      </ListItemButton>
      <Button onClick={toggleInProgress}>
        {id.inProgress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}
export default TodoList;
