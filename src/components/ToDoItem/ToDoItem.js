import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const updateHandler = () => {
    console.log("ToDoItem.js");
    console.log(`Update [${props.id}] clicked`);
    props.onUpdate(props.id);
  };

  const deleteHandler = () => {
    console.log("ToDoItem.js");
    console.log(`Delete [${props.id}] clicked`);
    props.onDelete(props.id);
  };

  return (
    <div className={"toDoItemContainer"}>
      <div className={"taskDetails"}>
        <h2>{props.description}</h2>
      </div>
      <div className={"icons"}>
        <button onClick={updateHandler} className={"toDoItem__update"}>
          Update
        </button>
        <button onClick={deleteHandler} className={"toDoItem__delete"}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
