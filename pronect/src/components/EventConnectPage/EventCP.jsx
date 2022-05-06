import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./EventCP.module.css"
import Navbar from "./Navbar/Navbar"
import Filter from "./Filter/Filter"
import EventCard from "./EventCard/EventCard" 
import Footer from "../Home/Footer/Footer"

export default function EventCP() {
  return (
    <>
      <Navbar />
      <div className={`${styles.eventHeading}`}>
        <h1>Events</h1>
      </div>
      <Filter />
      <EventCard />
      <Footer />
    </>
  );
}
