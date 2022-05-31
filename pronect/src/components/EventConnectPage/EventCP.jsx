import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EventCP.module.css";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";
import EventCard from "./EventCard/EventCard";
import Footer from "../Home/Footer/Footer";
import { FilterProvider } from "../../context/FilterContext";
import { AuthProvider } from "../../Auth/auth";


export default function EventCP() {
  return (
    <>
    <AuthProvider>
      <Navbar />
    </AuthProvider>
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
