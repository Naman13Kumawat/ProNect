import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EventCP.module.css";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";
import EventCard from "./EventCard/EventCard";
import Footer from "../Home/Footer/Footer";
import { FilterProvider } from "../../context/FilterContext";

export default function EventCP() {
  return (
    <>
      <Navbar />
      <div className={`${styles.eventHeading}`}>
        <h1>Events</h1>
      </div>
      <FilterProvider>
        <Filter />
        <EventCard />
      </FilterProvider>
      <Footer />
    </>
  );
}
