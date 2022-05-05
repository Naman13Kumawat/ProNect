import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import Sign from "../Sign/Sign";

export default function Login(props) {

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={`${styles.login} ${props.bool? styles.active : null}`}>
      <Sign bool2={isActive} />
      <h1>Login</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className={`${styles.c_form} mb-3`}
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        className={`${styles.c_form} mb-3`}
        controlId="floatingPassword"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button className={styles.c_form_btn} variant="primary" type="submit">
        Submit
      </Button>
      <p>New User?</p>
      <a href="#" onClick={handleToggle}>
        Sign Up
      </a>
    </div>
  );
}
