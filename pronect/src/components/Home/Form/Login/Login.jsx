import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import sign_styles from "../Sign/Sign.module.css";
import { useAuth } from "../../../../hooks/useAuth";

export default function Login() {
  const { loginEmail, setLoginEmail, loginPassword, setLoginPassword, login } =
    useAuth();

  const handleToggle = () => {
    document.getElementById("login").classList.toggle(`${styles.active}`);
  };
  const handleToggle2 = () => {
    document.getElementById("login").classList.toggle(`${styles.active}`);
    document.getElementById("signup").classList.toggle(`${sign_styles.active}`);
  };

  const handleToggle3 = (e) => {
    login();
    e.preventDefault();
    setLoginEmail("");
    setLoginPassword("");
    document.getElementById("login").classList.toggle(`${styles.active}`);
  };

  return (
    <div id="login" className={`${styles.login}`}>
      <h1>Login</h1>
      <button className={`${styles.cross_btn}`} onClick={handleToggle}></button>
      <FloatingLabel
        controlId="floatingInput2"
        label="Email address"
        className={`${styles.c_form} mb-3`}
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
          value={loginEmail}
        />
      </FloatingLabel>
      <FloatingLabel
        className={`${styles.c_form} mb-3`}
        controlId="floatingPassword2"
        label="Password"
      >
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          value={loginPassword}
        />
      </FloatingLabel>
      <Button
        className={styles.c_form_btn}
        variant="primary"
        type="submit"
        onClick={handleToggle3}
      >
        Submit
      </Button>
      <p>New User?</p>
      <a href="#" onClick={handleToggle2}>
        Sign Up
      </a>
    </div>
  );
}
