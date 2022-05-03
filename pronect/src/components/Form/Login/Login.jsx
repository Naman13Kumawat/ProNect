import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";

export default function Login(props) {
  return (
    <div className={`${styles.login} ${props.bool ? styles.active : null}`}>
      <h1>
        <a href="">Login</a>
      </h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className={`${styles.c_form} mb-3`}
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className={`${styles.c_form} mb-3`} controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button  className={styles.c_form_btn} variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}
