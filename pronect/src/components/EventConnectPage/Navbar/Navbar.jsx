import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./Navbar.module.css";
import Login from "../../Home/Form/Login/Login";
import login_styles from "../../Home/Form/Login/Login.module.css";
import Sign from "../../Home/Form/Sign/Sign";
import sign_styles from "../../Home/Form/Sign/Sign.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export default function EventNav() {
  const { logout, user } = useAuth();

  const handleToggle1 = () => {
    document.getElementById("login").classList.toggle(`${login_styles.active}`);
  };
  const handleToggle2 = () => {
    document.getElementById("signup").classList.toggle(`${sign_styles.active}`);
  };

  // Profile Tab
  const handleToggle3 = () => {
    // document.getElementById("signup").classList.toggle(`${sign_styles.active}`);
    logout();
  };

  return (
    <div className={styles.eventNavbar} id="#home">
      <Login />
      <Sign />
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
              {Object.keys(user).length !== 0 ? (
                <Link to="">
                  <Navbar.Text onClick={handleToggle3} value="login_btn">
                    Logout
                  </Navbar.Text>
                </Link>
              ) : (
                <>
                  <Link to="">
                    <Navbar.Text onClick={handleToggle1} value="login_btn">
                      Login
                    </Navbar.Text>
                  </Link>
                  <Link to="">
                    <Navbar.Text onClick={handleToggle2} value="signin_btn">
                      Sign Up
                    </Navbar.Text>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
