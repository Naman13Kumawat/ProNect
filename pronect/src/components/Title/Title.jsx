import React  from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <div className={styles.title} id="#home">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className={styles.brand} href="#home">
            ProNect
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#explore">About Us</Nav.Link>
              <Nav.Link href="#deets">Login / Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Find Sponsorship Opportunities</h1>
      <p>Connecting creators with the companies looking to sponsor them</p>
      <Button className={styles.c_btn} variant="outline-light" size="lg">Be a Sponsor</Button>{" "}
      <Button className={styles.c_btn} variant="outline-light" size="lg">Get a Sponsor</Button>
      <Button className={styles.c_btn_connect} variant="info" size="lg">Connect</Button>
    </div>
  );
}
