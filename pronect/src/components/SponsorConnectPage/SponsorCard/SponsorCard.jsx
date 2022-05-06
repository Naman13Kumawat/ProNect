import React from "react";
import styles from "./SponsorCard.module.css"
import Sponsors from "./Sponsors"
import { ButtonGroup, Button, Card } from "react-bootstrap";

export default function SponsorCard() {
  return (
    <div className={`${styles.sponsorCard}`}>
      {Sponsors.map((displaySponsor) => 
        <Card className={ `${styles.c_card}`} key={displaySponsor.id}>
        <div className={`${styles.c_cardImgBox}`}>
        <Card.Img variant="top" src={displaySponsor.imgSrc} />
        </div>
        <Card.Body>
          <Card.Title>{displaySponsor.title}</Card.Title>
          <Card.Text>
            {displaySponsor.text}
          </Card.Text>
          <div className={`${styles.card_btn}`}>
            <ButtonGroup>
              <Button variant="primary">Details</Button>
              <Button variant="primary">Connect</Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
      )}
    </div>
  );
}
