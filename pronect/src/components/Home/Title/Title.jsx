import React, { useState } from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import styles from "./Title.module.css"
import Login from "../Form/Login/Login" 
import Sign from "../Form/Sign/Sign" 

export default function Title() {
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const handleToggle1 = () => {
    setActive1(!isActive1);
    if(isActive2 === true) {
      setActive2(!isActive2);
    }
  };
  const handleToggle2 = (e) => {
    setActive2(!isActive2);
    setButtonValue(e.target.value);
    if(isActive1 === true) {
      setActive1(!isActive1);
    }
  };

  return (
    <div className={styles.title} id="#home">
    <Login bool={isActive1} />
    <Sign bool={isActive2} btnValue={buttonValue} />
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
              <Nav.Link onClick={handleToggle1}>Login</Nav.Link>
              <Nav.Link onClick={handleToggle2}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 className={`${styles.title_heading}`}>Find Sponsorship Opportunities</h1>
      <p>Connecting creators with the companies looking to sponsor them</p>
      <Button className={styles.c_btn} variant="outline-light" size="sm" value="BS" onClick={handleToggle2}>
        Be a Sponsor
      </Button>{" "}
      <Button className={styles.c_btn} variant="outline-light" size="sm" value="GS" onClick={handleToggle2}>
        Get Sponsors
      </Button>
      <Button className={styles.c_btn_connect} variant="info" size="lg">
        Connect
      </Button>
    </div>
  );
}

