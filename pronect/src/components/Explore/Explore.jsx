import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import styles from "./Explore.module.css";

export default function Explore() {
  return (
    <div className={`${styles.explore}`}>
      <Container fluid>
        <h1>Explore ProNect</h1>
        <Row xs="auto" md={4} className={`${styles.c_cardGroup} g-4`}>
          <Col>
            <Card className={`${styles.c_card}`}>
              <Card.Body>
                <Card.Title>What is ProNect</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`${styles.c_card}`}>
              <Card.Body>
                <Card.Title>Why ProNect</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`${styles.c_card}`}>
              <Card.Body>
                <Card.Title>Who Uses ProNect?</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`${styles.c_card}`}>
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
