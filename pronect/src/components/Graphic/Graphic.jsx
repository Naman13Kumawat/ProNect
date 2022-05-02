import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./Graphic.module.css";

export default function Graphic() {
  return (
    <div className={`${styles.graphic}`}>
      <Container>
        <Row xs="auto" md={3} className={`${styles.c_cardGroupImg} g-4`}>
          <Col>
            <Card className={`${styles.c_card} text-white`}>
              <Card.ImgOverlay className={`${styles.image1}`}>
                <Card.Title>Get a Sponsor</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className={`${styles.c_card} text-white`}>
              <Card.ImgOverlay className={`${styles.image2}`}>
                <Card.Title>Pitch your Idea</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className={`${styles.c_card} text-white`}>
              <Card.ImgOverlay className={`${styles.image3}`}>
                <Card.Title>Expand your Opportunities</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
