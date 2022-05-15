import React from "react";
import styles from "./SponsorCard.module.css"
import Sponsors from "./Sponsors"
import SponsorCustomCard from "./SponsorCustomCard";

export default function SponsorCard() {
  return (
    <div className={`${styles.sponsorCard}`}>
      {Sponsors.map((displaySponsor) => 
        <SponsorCustomCard displaySponsor = {displaySponsor} key={displaySponsor.id}/>
      )}
    </div>
  );
}
