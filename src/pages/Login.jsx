import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import lgog from "./images/low-quality-picture-sports-shop-with-cycles-and-sports-items-for-one-ghzkhu.png";
import log from "./images/logo.png";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate("");
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...value,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.error) {
          const { email, password } = data.error;
          if (email) toast.error("Email error");
          else if (password) toast.error(password);
        } else {
          navigate("/home");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main">
      <div className="grid">
        <img src={lgog} />
      </div>
      <div className="background">
        <img src={log} />
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={(e) => handelSubmit(e)}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setValue({ ...value, [e.target.name]: e.target.value })
              }
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
          <span>
            Don't have an account? <Link to="/">click</Link>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
