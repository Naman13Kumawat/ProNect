import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import styles from "./Filter.module.css";
import { useFilter } from "../../../hooks/useFilter";

export default function Filter() {
  const { setTV, setFV, setFFV, setSI } = useFilter();
  const reset = () => { 
    setSI("");
    document.querySelector("#search").value = null;
  };

  function handleChange(e) {
    switch (e.target.id) {
      case "search":
        setSI(e.target.value);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <Container>
        <h4>Search</h4>
        <div className={`${styles.filter}`}>
          <input
            autoComplete = "off"
            id="search"
            className={`${styles.search}`}
            type="text"
            placeholder="Search"
            onChange={handleChange}
          ></input>
          <Button variant="outline-light" onClick={reset}>
            Clear Search
          </Button>
        </div>
      </Container>
    </>
  );
}
