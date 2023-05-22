import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>easting</h5>
            
          </div>
          <div className="col-2">
           
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;