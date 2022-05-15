import React from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import styles from "./SponsorCard.module.css"

export default function SponsorCustomCard({displaySponsor}) {
  return (
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
  )
}
