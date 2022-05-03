import React from "react";
import { Carousel, Row, Card, Col } from "react-bootstrap";
import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <div className={`${styles.testimonial}`}>
      <h1>Testimonials</h1>
      {/* First Carousel */}
      <h2>Our Clients</h2>
      <Carousel>
        <Carousel.Item>
          <Row xs="auto" xxl={4} className={`${styles.c_cardGroup} g-4`}>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/IITD.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/IIITS.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/IITB.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/NITD.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs="auto" xxl={4} className={`${styles.c_cardGroup} g-4`}>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/DCRUST.jpg"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/NITT.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/IIITA.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Ashoka.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      {/* Second Carousel */}
      <h2>Our Valuable Sponsors</h2>
      <Carousel>
        <Carousel.Item>
          <Row xs="auto" xxl={4} className={`${styles.c_cardGroup} g-4`}>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Zomato.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Boat.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Google.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Wildcraft.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs="auto" xxl={4} className={`${styles.c_cardGroup} g-4`}>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Decathlon.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/CocaCola.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Bosch.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Internshala.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs="auto" xxl={4} className={`${styles.c_cardGroup} g-4`}>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/mslogo.jpg"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/Leetcode.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/CodingNinja.jpg"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`${styles.c_card}`}>
                <Card.Body className={`${styles.logoBox}`}>
                  <Card.Img
                    className={`${styles.logoImg}`}
                    src="./images/HackerRank.png"
                  ></Card.Img>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
