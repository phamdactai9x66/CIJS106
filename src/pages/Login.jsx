import React from "react";
import { Link } from "react-router";

const Login = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.handleLogin()}>
        {props.isLogin ? "Welcome back: Tai Pham" : "Login"}
      </button>
      |<Link to="/list_task">List Task</Link>|
      <Link to="/list_task/1">Task Detail</Link>
      {/* <button>Login</button> */}
    </div>
  );
};

export default Login;
