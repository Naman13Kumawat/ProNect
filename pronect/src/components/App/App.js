import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"
import Title from "../Title/Title"
import Featured from "../Featured/Featured"
import Explore from "../Explore/Explore"
import Graphic from "../Graphic/Graphic"
import Testimonial from "../Testimonial/Testimonial"


function App() {
  return (
    <div>
    <Title />
    <Featured />
    <Explore />
    <Graphic />
    <Testimonial />
    </div>
  );
}

export default App;
