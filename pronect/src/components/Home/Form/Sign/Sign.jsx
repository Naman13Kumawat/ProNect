import React, {useState} from "react";
import { FloatingLabel, Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import styles from "./Sign.module.css";

export default function Sign(props) {
  const handleToggle = () => {
    document.getElementById("signup").classList.toggle(`${styles.active}`);
  };
  
  return (
    <div id="signup" className={`${styles.sign} ${props.bool ? styles.active : null} ${props.bool2 ? styles.active2 : null}`}>
      <h1>Sign Up</h1>
      <button className={`${styles.cross_btn}`} onClick={handleToggle}></button>
      <Form.Label>What do you want to do?</Form.Label>
      <Form.Select aria-label="Default select example"  className={`${styles.c_form}`}>
        <option>Choose..</option>
        <option value="1">Get Sponsors</option>
        <option value="2">Be a Sponsor</option>
      </Form.Select>
      <FloatingLabel
        controlId="floatingInput1"
        label="Email address"
        className={`${styles.c_form} mb-3`}
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        className={`${styles.c_form} mb-3`}
        controlId="floatingPassword1"
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
