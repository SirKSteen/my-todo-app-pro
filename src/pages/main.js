import React, { useEffect, useState } from "react";
import "./main.css";
import { AuthBackground } from "../components/authBackground/authBackground";
import { Header } from "../components/headerContainer/headerContainer";
import { NewTaskButton } from "../components/button/button";
import ToDoItem from "../components/ToDoItem/ToDoItem";

import {
  deleteToDo,
  retrieveAllToDos,
} from "../components/API/ToDoDataService";
import { getLoggedInUsername } from "../authentication/Authentication";
import PopUpDiv from "../components/PopUpDiv/PopUpDiv";

const MainPage = (props) => {
  const [enteredTask, setEnteredTask] = useState({
    todoArray: [],
    popUpFlag: false,
    message: "",
  });

  useEffect(() => {
    let username = getLoggedInUsername();

    retrieveAllToDos(username).then((response) => {
      console.log(response.data);
      setEnteredTask({ todoArray: response.data });
    });
    console.log("Username: " + username);
  }, []);

  const newToDoHandler = () => {
    console.log("New Task clicked");
    props.history.push(`/newTask/-1`);
  };

  const updateHandler = (id) => {
    console.log("Main.js");
    console.log(`Id #[${id}]`);
    props.history.push(`/newTask/${id}`);
  };

  const deleteHandler = (id) => {
    let username = getLoggedInUsername();
    console.log("Main.js");
    console.log(`Id #[${id}]`);
    deleteToDo(username, id).then((response) => {
      setEnteredTask({
        ...enteredTask,
        popUpFlag: true,
        message: response.data,
      });
      setTimeout(() => {
        props.history.push("/main");
        refreshTodo();
      }, 3000);
    });
  };

  const refreshTodo = () => {
    let username = getLoggedInUsername();

    retrieveAllToDos(username).then((response) => {
      console.log(response.data);
      setEnteredTask({ todoArray: response.data });
    });
  };

  return (
    <div className={"mainPageContainer"}>
      <AuthBackground />
      <div className={"authPageCardContainer"}>
        {enteredTask.popUpFlag && (
          <PopUpDiv
            name={`${enteredTask.message}`}
            bgColor={"rgba(214, 218, 28, 0.6)"}
          />
        )}
        <div className={"authPageCard"}>
          <Header header={"To Do App Pro"} />

          <div className={"toDoListBodyContainer"}>
            <div className={"toDoListBodyInnerContainer"}>
              {enteredTask.todoArray.map((todo) => (
                <ToDoItem
                  id={todo.id}
                  description={todo.description}
                  onUpdate={updateHandler}
                  onDelete={deleteHandler}
                />
              ))}
            </div>

            <div className={"toDoListBodyWrapper"}>
              <div className={"toDoListBlock1"}>
                <div className={"toDoListBlock1Inner"} onClick={newToDoHandler}>
                  <NewTaskButton name="+ New Task" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
