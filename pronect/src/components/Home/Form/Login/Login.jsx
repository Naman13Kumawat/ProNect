import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import sign_styles from "../Sign/Sign.module.css";

export default function Login(props) {
  const handleToggle = () => {
    document.getElementById("login").classList.toggle(`${styles.active}`);
  };
  const handleToggle2 = () => {
    document.getElementById("login").classList.toggle(`${styles.active}`);
    document.getElementById("signup").classList.toggle(`${sign_styles.active}`);
  };

  return (
    <div
      id="login"
      className={`${styles.login} ${props.bool ? styles.active : null}`}
    >
      <h1>Login</h1>
      <button className={`${styles.cross_btn}`} onClick={handleToggle}></button>
      <FloatingLabel
        controlId="floatingInput2"
        label="Email address"
        className={`${styles.c_form} mb-3`}
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        className={`${styles.c_form} mb-3`}
        controlId="floatingPassword2"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button className={styles.c_form_btn} variant="primary" type="submit">
        Submit
      </Button>
      <p>New User?</p>
      <a href="#" onClick={handleToggle2}>
        Sign Up
      </a>
    </div>
  );
}
