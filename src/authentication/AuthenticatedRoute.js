import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserLoggedIn } from "../authentication/Authentication";

function AuthenticatedRoute(props) {
  if (isUserLoggedIn()) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
}

export default AuthenticatedRoute;
