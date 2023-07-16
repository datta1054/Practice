import React from "react";
import styles from "./Card.module.css";

const ProductList = (props) => {
  const handleImageMissing = (event) => {
    event.target.src =
      "https://images.thequint.com/thequint%2F2016-02%2F15ee3c7d-b1d0-4354-a635-30d0f51d828f%2FCruze-hero.jpg?auto=format%2Ccompress&fmt=webp&width=120&w=1200,https://www.example.com/images/chevrolet-bolt-ev-2.jpg";
  };

  return (
    <div className={styles.card}>
      <img
        src={props.image}
        onError={handleImageMissing}
        alt={props.title}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{props.title}</h3>

        <p className={styles.description}>{props.description}</p>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default ProductList;
