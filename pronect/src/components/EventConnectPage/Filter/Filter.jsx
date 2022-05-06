import React from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <>
      <Container>
        <h4>Filters</h4>
        <div className={`${styles.filter}`}>
          <Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Theme</option>
              <option value="1">Gaming</option>
              <option value="2">Technology</option>
              <option value="3">Cultural</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Estimated Funding</option>
              <option value="1">5-10K</option>
              <option value="2">11-20K</option>
              <option value="3">25K+</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Footfall</option>
              <option value="1">~50K</option>
              <option value="2">~100K</option>
              <option value="3">More than 100K</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Container>
    </>
  );
}
