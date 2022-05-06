import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./SponsorCP.module.css"
import Navbar from "../EventConnectPage/Navbar/Navbar"
import Filter from "../EventConnectPage/Filter/Filter"
import SponsorCard from "./SponsorCard/SponsorCard" 
import Footer from "../Home/Footer/Footer"

export default function SponsorCP() {
  return (
    <>
      <Navbar />
      <div className={`${styles.sponsorHeading}`}>
        <h1>Sponsors</h1>
      </div>
      <Filter />
      <SponsorCard />
      <Footer />
    </>
  );
}
