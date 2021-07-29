import React from "react";
import { Link } from "react-router-dom";
import "./Logout.css";
import { withRouter } from "react-router";

function Logout() {
  return (
    <div className={"logoutWrapper"}>
      <div className={"logoutContainer"}>
        <h1>Logout Successful</h1>
        <Link to="/">
          <button>Return to Login</button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Logout);
