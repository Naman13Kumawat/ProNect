import React, { useEffect, useState } from "react";
import styles from "./SponsorCard.module.css";
import Sponsors from "./Sponsors";
import SponsorCustomCard from "./SponsorCustomCard";
import { useFilter } from "../../../hooks/useFilter";

export default function SponsorCard() {
  const [filteredArray, setFA] = useState(Sponsors);
  const { searchInput } = useFilter();

  useEffect(() => {
    setFA(
      Sponsors.filter((event) =>
        event.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  return (
    <>
      {filteredArray.length === 0 ? (
        <p className={`${styles.error}`}>No results</p>
      ) : null}
      <div className={`${styles.sponsorCard}`}>
        {filteredArray.map((displaySponsor) => (
          <SponsorCustomCard
            displaySponsor={displaySponsor}
            key={displaySponsor.id}
          />
        ))}
      </div>
    </>
  );
}
