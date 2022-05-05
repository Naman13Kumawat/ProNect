import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EventCP.module.css"
import Navbar from "./Navbar/Navbar"
import Filter from './Filter/Filter';
import Footer from "../Home/Footer/Footer"

export default function EventCP(){  
    return (
    <>
        <Navbar />
        <h1>Events</h1>
        <h4>Filters</h4>
        <Filter />
        <p> </p>
        <Footer />
    </>
  )
}

