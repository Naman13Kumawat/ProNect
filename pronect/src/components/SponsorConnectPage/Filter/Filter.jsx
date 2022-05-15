import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import styles from "./Filter.module.css";
import { useFilter } from "../../../hooks/useFilter";

export default function Filter() {
  const {setTV, setFV, setFFV} = useFilter();
  const reset = () => {
    setTV("Theme");
    setFV("Estimated Funding");
    setFFV("Footfall");
    document.querySelector("#theme").value = "Theme";
    document.querySelector("#funding").value = "Estimated Funding";
    document.querySelector("#footfall").value = "Footfall";
  }
  
  function handleChange(e) {
    switch (e.target.id){
      case "theme": setTV(e.target.value) 
      break
      case "funding": setFV(e.target.value) 
      break
      case "footfall": setFFV(e.target.value)
      break
      default: 
      break
    }
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
              <option value="Theme">Theme</option>
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
        <Button variant="outline-light" onClick={reset}>Clear Filter</Button>
        </div>
      </Container>
    </>
  );
}
