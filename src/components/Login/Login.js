import React, { useState } from "react";
import "./Login.css";
import PopUpDiv from "../PopUpDiv/PopUpDiv";
import {
  executeJWTAuthenticationService,
  RegisterSuccessfulLoginJWT,
} from "../../authentication/Authentication";

export const Login = (props) => {
  const [enteredInput, setEnteredInput] = useState({
    username: "",
    password: "",
    hasLoginFailed: false,
    showSuccessMessage: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit button clicked");
    // if (enteredInput.username === "Kareem" && enteredInput.password === "123") {
    //   props.history.push(`/main/${enteredInput.username}`);
    // } else {
    //   console.log("Failed");
    //   setEnteredInput({ hasLoginFailed: true });
    // }

    executeJWTAuthenticationService(
      enteredInput.username,
      enteredInput.password
    )
      .then((response) => {
        console.log("JWT Token: " + response.data.token);
        setEnteredInput({
          ...enteredInput,
          hasLoginFailed: false,
          showSuccessMessage: true,
        });
        RegisterSuccessfulLoginJWT(enteredInput.username, response.data.token);
        props.history.push("/main");
      })
      .catch(() => {
        console.log("Access Denied");
        setEnteredInput({
          ...enteredInput,
          hasLoginFailed: true,
          showSuccessMessage: false,
        });
      });
  };

  const changeHandler = (event) => {
    const value = event.target.value;
    setEnteredInput({
      ...enteredInput,
      [event.target.name]: value,
    });
    console.log("Name: " + event.target.name);
    console.log("Value: " + event.target.value);
  };

  return (
    <React.Fragment>
      {enteredInput.hasLoginFailed && (
        <PopUpDiv name={"Access Denied"} bgColor={"rgba(189, 18, 6, 0.6)"} />
      )}
      <div className={"loginWrapper"}>
        <h1> Login</h1>
        <div className={"loginContainer"}>
          <div className={"loginContainer-form"}>
            <form onSubmit={submitHandler}>
              <div className={"loginContainer-form-username"}>
                <h3> Username</h3>
                <input
                  type="text"
                  name="username"
                  onChange={changeHandler}
                  value={enteredInput.username}
                />
              </div>
              <div className={"loginContainer-form-password"}>
                <h3> Password</h3>
                <input
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  value={enteredInput.password}
                />
              </div>
              <div className={"loginContainer-form-button"}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
