import React, { useState, useEffect } from "react";
import "./newTask.css";
import { Header } from "../components/headerContainer/headerContainer";
import NewTaskForm from "../components/NewTaskForm/NewTaskForm";
import { retrieveToDo } from "../components/API/ToDoDataService";
import { getLoggedInUsername } from "../authentication/Authentication";

export let NewTask = (props) => {
  const [taskProps, setTaskProps] = useState({
    id: -1,
    description: "",
  });

  useEffect(() => {
    let username = getLoggedInUsername();

    retrieveToDo(username, props.match.params.id).then((response) => {
      setTaskProps(response.data);
    });
  }, []);

  return (
    <div className={"newTaskBackgroundContainer"}>
      <div className={"authPageCardContainer"}>
        <div className={"authPageCard"}>
          <Header header={"New Task"} />
          <NewTaskForm toDo={taskProps} />
        </div>
      </div>
    </div>
  );
};
