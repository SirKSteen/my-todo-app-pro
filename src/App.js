import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/main";
import "./App.css";
import { NewTask } from "./pages/newTask";
import { Login } from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Header from "./components/Header/Header";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";

function App() {
  return (
    <div className="AppContainer">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <AuthenticatedRoute path="/main" component={MainPage} />
          <AuthenticatedRoute path="/newTask/:id" component={NewTask} />
          <AuthenticatedRoute path="/logout" component={Logout} />
          <Route exact component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

function ErrorPage() {
  return (
    <div className={"errorContainer"}>
      <h1>An error has occurred. Please try again.</h1>
    </div>
  );
}
