import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"
import Title from "../Title/Title"
import Featured from "../Featured/Featured"
import Explore from "../Explore/Explore"
import Graphic from "../Graphic/Graphic"

import Footer from "../Footer/Footer"


function App() {
  return (
    <div>
    <Title />
    <Featured />
    <Explore />
    <Graphic />
    
    <Footer />
    </div>
  );
}

export default App;
