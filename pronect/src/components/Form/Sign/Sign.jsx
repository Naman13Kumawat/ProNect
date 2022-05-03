import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "./Sign.module.css";

export default function Sign(props) {
  return (
    <div className={`${styles.sign} ${props.bool ? styles.active : null}`}>
      <h1>
        <a href="">Sign Up</a>
      </h1>
      <Form.Label>What do you want to do?</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Get Sponsors</option>
        <option>Sponsor an Event</option>
      </Form.Select>
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
    </div>
  );
}
