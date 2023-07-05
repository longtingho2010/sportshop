import React, { useState } from "react";
import "./SignUpPage.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPw) {
      return setError("Password do not match");
    }

    if (password.length < 6) {
      return setError("Password has to more than 6 words");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userdetails) => {
        console.log(userdetails);
        setError("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPw("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signuppage-container">
      <div className="signuppage-contant">
        <h1>CREATE AN ACCOUNT</h1>
        {error && (
          <Alert style={{ margin: "20px" }} severity="error">
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Confirm Password"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
