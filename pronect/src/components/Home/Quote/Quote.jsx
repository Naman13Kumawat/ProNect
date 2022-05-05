import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <div className={`${styles.Quote}`}>
      <Container>
        <h1>IF YOU LIKE TO SPONSOR CURRENT EVENTS, CALL US!</h1>
      </Container>
    </div>
  );
}
