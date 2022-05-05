import React from "react";
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";
import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={`${styles.Filter} container`}>
    
      <Container>
      <Form.Group className="mb-3">
    
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>
      </Container>
    </div>
  );
}
