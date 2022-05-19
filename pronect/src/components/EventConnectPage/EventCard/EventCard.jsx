import React, { useEffect, useState } from "react";
import styles from "./EventCard.module.css";
import Events from "./Events";
import CustomCard from "./CustomCard";
import { useFilter } from "../../../hooks/useFilter";

export default function EventCard() {
  const [filteredArray, setFA] = useState(Events);
  const { themeValue, fundValue, footfallValue } = useFilter();

  useEffect(() => {
    setFA(
      Events.filter((event) => {
        return themeValue !== "Theme" ? event.theme === themeValue : event;
      })
        .filter((event) => {
          return fundValue !== "Estimated Funding"
            ? event.funding === fundValue
            : event;
        })
        .filter((event) => {
          return footfallValue !== "Footfall"
            ? event.footfall === footfallValue
            : event;
        })
    );
  }, [themeValue, fundValue, footfallValue]);

  return (
    <>
      {filteredArray.length === 0 ? (
        <p className={`${styles.error}`}>No results</p>
      ) : null}
      <div className={`${styles.eventCard}`}>
        {filteredArray.map((displayEvent) => (
          <CustomCard displayEvent={displayEvent} key={displayEvent.id} />
        ))}
      </div>
    </>
  );
}
