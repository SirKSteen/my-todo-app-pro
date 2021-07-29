import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  getLoggedInUsername,
  isUserLoggedIn,
  LogoutUser,
} from "../../authentication/Authentication";

function Header() {
  let username = getLoggedInUsername();

  const logoutHandler = () => {
    LogoutUser();
  };

  return (
    <React.Fragment>
      <div className={"headerBox"}>
        <div className={"headerBox-App"}>
          <h4>To Do App Pro</h4>
        </div>
        <div>{isUserLoggedIn() && <h4>Hi {`${username}`}!</h4>}</div>
        <div className={"headerBox-List"}>
          {isUserLoggedIn() && (
            <Link to="/main">
              <h4>Main Page</h4>
            </Link>
          )}
        </div>
        <div className={"headerBox-Logout"}>
          {isUserLoggedIn() && (
            <Link to="/logout" onClick={logoutHandler}>
              <h4>Logout</h4>
            </Link>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
export default withRouter(Header);
