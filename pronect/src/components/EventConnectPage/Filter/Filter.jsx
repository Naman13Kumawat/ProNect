import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import styles from "./Filter.module.css";
import { useFilter } from "../../../hooks/useFilter";

export default function Filter() {
  const {setFI, setFV} = useFilter();
  
  function handleChange(e) {
    setFV(e.target.value);
    setFI(e.target.id);
  }
  return (
    <>
      <Container>
        <h4>Filters</h4>
        <div className={`${styles.filter}`}>
          <Form.Group>
            <Form.Select
              id="theme"
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option>Theme</option>
              <option value="gaming">Gaming</option>
              <option value="tech">Technology</option>
              <option value="cultural">Cultural</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Select
              id="funding"
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option>Estimated Funding</option>
              <option value="bronze">5-10K</option>
              <option value="silver">11-20K</option>
              <option value="gold">25K+</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Select
              id="footfall"
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option>Footfall</option>
              <option value="medium">~50K</option>
              <option value="large">~100K</option>
              <option value="huge">More than 100K</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Container>
    </>
  );
}
