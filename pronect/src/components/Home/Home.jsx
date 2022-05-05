import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css"
import Title from "./Title/Title"
import Featured from "./Featured/Featured"
import Explore from "./Explore/Explore"
import Graphic from "./Graphic/Graphic"
import Testimonial from "./Testimonial/Testimonial"
import Quote from "./Quote/Quote";
import Footer from "./Footer/Footer"


export default function Home() {
  return (
    <>
    <Title />
    <Featured />
    <Explore />
    <Graphic />
    <Testimonial />
    <Quote />
    <Footer />
    </>
  );
}

