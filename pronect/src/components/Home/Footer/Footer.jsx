import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <footer>
        <div className={styles.container}>
          <div className={`${styles.grid} ${styles.c_row}`}>
            <div className={styles.c_col}>
              <h1>ProNect</h1>{" "}
            </div>
            <div className={styles.c_col}>
              <ul>
                <h4>Useful Links</h4>
                <a href="#">
                  <li>Contact Us</li>
                </a>
                <br />
                <a href="#">
                  <li>FAQ's</li>
                </a>
                <br />
                <Link to="event_cp">
                <a href="#">
                  <li>Connect</li>
                </a>
                </Link>
                <br />
                <a href="#">
                  <li>Login / Sign Up</li>
                </a>
              </ul>
            </div>

            <div className={styles.c_col}>
              <h4>Follow Us</h4>
              <div className={styles.socials}>
                <a href="#">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.c_row}>
            <p>Copyright &copy; 2022 ProNect</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
