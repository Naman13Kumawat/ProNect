import React from "react";
import styles from "./EventCard.module.css";
import Events from "./Events";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import { useFilter } from "../../../hooks/useFilter";

export default function EventCard() {
  const { filterId, filterValue } = useFilter();

  if (filterId && filterValue) {
    return (
      <div className={`${styles.eventCard}`}>
        {Events.filter((event) => event[`${filterId}`] === filterValue).map(
          (displayEvent) => (
            <Card className={`${styles.c_card}`} key={displayEvent.id}>
              <Card.Img variant="top" src={displayEvent.imgSrc} />
              <Card.Body>
                <Card.Title>{displayEvent.title}</Card.Title>
                <Card.Text>{displayEvent.text}</Card.Text>
                <div className={`${styles.card_btn}`}>
                  <ButtonGroup>
                    <Button variant="primary">Resources</Button>
                    <Button variant="primary">Sponsor</Button>
                  </ButtonGroup>
                </div>
              </Card.Body>
            </Card>
          )
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.eventCard}`}>
      {Events.map((displayEvent) => (
        <Card className={`${styles.c_card}`} key={displayEvent.id}>
          <Card.Img variant="top" src={displayEvent.imgSrc} />
          <Card.Body>
            <Card.Title>{displayEvent.title}</Card.Title>
            <Card.Text>{displayEvent.text}</Card.Text>
            <div className={`${styles.card_btn}`}>
              <ButtonGroup>
                <Button variant="primary">Resources</Button>
                <Button variant="primary">Sponsor</Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
