import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthServices";
import Message from "../Components/Message";
import { AuthContext } from "../Context/AuthContext";
import Styles from "./login.module.scss";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ///Use the auth service
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        ///takes user to dashboard if auth works
        props.history.push("/todos");
      } else {
        setMessage(message);
      }
    });
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className={Styles.box}>
          <input
            type="text"
            required
            name="username"
            onChange={onChange}
            className={Styles.input}
          />
          <label htmlFor="username" className={Styles.label}>
            Username:
          </label>
        </div>
        <div className={Styles.box}>
          <input
            type="password"
            required
            name="password"
            onChange={onChange}
            className={Styles.input}
          />
          <label htmlFor="password" className={Styles.label}>
            Password:
          </label>
        </div>

        <button className={Styles.btn} type="submit">
          Login
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Login;
