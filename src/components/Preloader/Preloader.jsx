import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <section className={styles.preloader}>
      <p className={styles.text}>ЗАГРУЗКА...</p>
    </section>
  );
};

export default Preloader;
