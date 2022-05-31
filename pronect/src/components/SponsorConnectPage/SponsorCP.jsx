import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./SponsorCP.module.css"
import Navbar from "../EventConnectPage/Navbar/Navbar"
import Filter from "./Filter/Filter"
import SponsorCard from "./SponsorCard/SponsorCard" 
import Footer from "../Home/Footer/Footer"
import { FilterProvider } from "../../context/FilterContext"
import { AuthProvider } from "../../Auth/auth";


export default function SponsorCP() {
  return (
    <>
    <AuthProvider>    
      <Navbar />
    </AuthProvider>
      <div className={`${styles.sponsorHeading}`}>
        <h1>Sponsors</h1>
      </div>
      <FilterProvider>
        <Filter />
        <SponsorCard />
      </FilterProvider>
      <Footer />
    </>
  );
}
