import { Link, Navigate } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import '../styles/login.css'; 

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, loginUser } = useContext(AuthContext);

  const userData = {
    email,
    password
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://reqres.in/api/login", userData)
      .then((res) => {
        alert("Login Successfully...");
        loginUser(res.data.token);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Home />
      {isAuth.token ? <Navigate to={"/dashboard"} /> : (
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit} data-testid="login-form">
            <div className="mb-3">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                data-testid="email-input"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                data-testid="password-input"
                type="password"
                placeholder="password"
              />
            </div>
            <div>
              <input className="submit-btn mb-3" data-testid="form-submit" type="submit" value="SUBMIT" />
            </div>
            <div>
              <Link className="back-btn" to="/dashboard">Go Back</Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
