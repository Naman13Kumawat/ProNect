import React from "react";
import styles from "./Graphic.module.css";

export default function Graphic() {
  return (
    <div className={`${styles.graphic}`}>
      <div className={`${styles.image1} ${styles.imgCard}`}>
        <h1>Get a sponsor</h1>
        <p>This is a longer card with supporting text below as a natural.</p>
      </div>
      <div className={`${styles.image2} ${styles.imgCard}`}>
        <h1>Pitch your Idea</h1>
        <p>This is a longer card with supporting text below as a natural.</p>
      </div>
      <div className={`${styles.image3} ${styles.imgCard}`}>
        <h1>Expand your Opportunities</h1>
        <p>This is a longer card with supporting text below as a natural.</p>
      </div>
    </div>
  );
}
