import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [data, setData] = useState({
    userName: "john doe",
    password: "r3@ct",
  });
  const [inputData, setInputData] = useState({
    userName: "",
    password: "",
    submit: false,
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      inputData.userName === data.userName &&
      inputData.password === data.password
    ) {
      navigate("/home");
    } else {
      setInputData({ ...inputData, submit: true });
    }
  };
  const handleUser = (e) =>
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  return (
    <>
      <h1>Login</h1>
      {inputData.submit && <p>The user name or password is incorrect!</p>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleUser}
          type="text"
          name="userName"
          placeholder="Username"
        />
        <input
          onChange={handleUser}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
