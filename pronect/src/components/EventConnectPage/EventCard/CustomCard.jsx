import styles from "./EventCard.module.css"
import { ButtonGroup, Button, Card } from "react-bootstrap"


export default function CustomCard({displayEvent}) {
  return (
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
}



