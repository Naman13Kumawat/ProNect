import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import styles from "./Title.module.css";
import Login from "../Form/Login/Login";
import login_styles from "../Form/Login/Login.module.css";
import Sign from "../Form/Sign/Sign";
import sign_styles from "../Form/Sign/Sign.module.css";
import ESModal from "../ESModal/ESModal";
import { Link } from "react-router-dom";

export default function Title() {
  const [modalShow, setModalShow] = React.useState(false);
  const handleToggle1 = () => {
    document.getElementById("login").classList.toggle(`${login_styles.active}`);
  };
  const handleToggle2 = () => {
    document.getElementById("signup").classList.toggle(`${sign_styles.active}`);
  };

  return (
    <div className={styles.title} id="#home">
      <Login />
      <Sign />
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className={styles.brand} href="#home">
            ProNect
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#explore">About Us</Nav.Link>
              <Nav.Link onClick={handleToggle1} value="login_btn">
                Login
              </Nav.Link>
              <Nav.Link onClick={handleToggle2} value="sign_btn">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 className={`${styles.title_heading}`}>
        Find Sponsorship Opportunities
      </h1>
      <p>Connecting creators with the companies looking to sponsor them</p>
      <Button
        className={styles.c_btn}
        variant="outline-light"
        size="sm"
        value="BS"
        onClick={handleToggle2}
      >
        Be a Sponsor
      </Button>{" "}
      <Button
        className={styles.c_btn}
        variant="outline-light"
        size="sm"
        value="GS"
        onClick={handleToggle2}
      >
        Get Sponsors
      </Button>
      <Button
        className={styles.c_btn_connect}
        variant=""
        size="lg"
        onClick={() => setModalShow(true)}
      >
        Connect
      </Button>
      <ESModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
