import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { NewTaskButton } from "../button/button";
import { ClearButton } from "../button/clearButton";
import { DateAndTime } from "../Date&Time/DatenTime";
import "./NewTaskForm.css";

const NewTaskForm = (props) => {
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    console.log("Clear");
  };

  console.log("ToDo Props ID: " + props.toDo.id);
  console.log("ToDo Props description: " + props.toDo.description);

  const [enteredTitle, setEnteredTitle] = useState(props.toDo.description);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // let tester = "Good afternoon";

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredTitle("");
  };

  return (
    <div>
      <div className={"toDoListBodyContainer"}>
        <div className={"toDoListBodyInnerContainer2"}>
          <Formik></Formik>
          <div className={"toDoListBodyTextAreaContainer"}>
            <input
              type="textarea"
              placeholder="Enter details here..."
              className={"toDoListBodyInput"}
              value={`${enteredTitle}`}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={"toDoListBodyClearArea"}>
            <div className={"toDoListClearButtonDiv"} onClick={handleReset}>
              <ClearButton />
            </div>
          </div>
          <DateAndTime />
        </div>

        <div className={"toDoListBodyWrapper"}>
          <div className={"toDoListBlock1"}>
            <div className={"toDoListBlock1Inner"}>
              <a
                href="/"
                className={"toDoListBlockLink"}
                onClick={submitHandler}
              >
                <NewTaskButton name="Create" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaskForm;
