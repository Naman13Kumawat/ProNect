import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import styles from "./Navbar.module.css";
import Login from "../../Home/Form/Login/Login";
import Sign from "../../Home/Form/Sign/Sign";
import { Link } from "react-router-dom";

export default function EventNav() {
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const handleToggle1 = () => {
    setActive1(!isActive1);
    if (isActive2 === true) {
      setActive2(!isActive2);
    }
  };
  const handleToggle2 = () => {
    setActive2(!isActive2);
    if (isActive1 === true) {
      setActive1(!isActive1);
    }
  };

  return (
    <div className={styles.eventNavbar} id="#home">
      <Login bool={isActive1} />
      <Sign bool={isActive2} />
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Link to="/">
            <h1 className={styles.brand} href="#home">
              ProNect
            </h1>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${styles.navLink_box} ms-auto`}>
              <Link to="/">
                <Navbar.Text>Home</Navbar.Text>
              </Link>
              <Link to="/">
                <Navbar.Text>About Us</Navbar.Text>
              </Link>
              <Link to="">
                <Navbar.Text onClick={handleToggle1}>Login</Navbar.Text>
              </Link>
              <Link to="">
                <Navbar.Text onClick={handleToggle2}>Sign Up</Navbar.Text>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
