import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import styles from "./Sign.module.css";
import { useAuth } from "../../../../hooks/useAuth";

export default function Sign() {
  const {
    registerEmail,
    registerPassword,
    setRegisterEmail,
    setRegisterPassword,
    register,
  } = useAuth();

  const handleToggle = () => {
    document.getElementById("signup").classList.toggle(`${styles.active}`);
  };

  const handletoggle2 = (e) => {
    register();
    e.preventDefault();
    setRegisterEmail('')
    setRegisterPassword('')
    document.getElementById("signup").classList.toggle(`${styles.active}`);
  };

  return (
    <div id="signup" className={`${styles.sign}`}>
      <h1>Sign Up</h1>
      <button className={`${styles.cross_btn}`} onClick={handleToggle}></button>
      <Form>
        <Form.Label>What do you want to do?</Form.Label>
        <Form.Select
          aria-label="Default select example"
          className={`${styles.c_form}`}
        >
          <option>Choose..</option>
          <option value="1">Get Sponsors</option>
          <option value="2">Be a Sponsor</option>
        </Form.Select>
        <FloatingLabel
          controlId="floatingInput1"
          label="Email address"
          className={`${styles.c_form} mb-3`}
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
            value={registerEmail}
          />
        </FloatingLabel>
        <FloatingLabel
          className={`${styles.c_form} mb-3`}
          controlId="floatingPassword1"
          label="Password"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
            value={registerPassword}
          />
        </FloatingLabel>
        <Button
          className={styles.c_form_btn}
          variant="primary"
          type=""
          onClick={handletoggle2}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
