import React from "react";
import ProductList from "./Card";
import styles from "./Card.module.css";
const App = () => {
  const productObjects = [
    {
      id: 2,
      name: "Nissan LEAF",
      brand: "Nissan",
      imageUrl: [""],
      description:
        "The Nissan LEAF is a compact electric car produced by Nissan. It was first introduced in 2010 and has since become one of the most popular electric vehicles worldwide. The latest model, released in 2021, offers an impressive range of up to 226 miles on a single charge. The LEAF features a comfortable interior, advanced safety features, and a smooth, quiet ride. With its affordable price point and eco-friendly nature, the Nissan LEAF is an excellent choice for those looking to switch to electric driving. Whether you're commuting to work or embarking on a road trip, the LEAF provides a reliable and efficient driving experience, making it a standout option in the electric car market.",
      price: 31400,
      vehicle_type: "Car",
      release_year: 2021,
      rating: 4.2,
      maximum_power: 147,
    },
    {
      id: 3,
      name: "Chevrolet Bolt EV",
      brand: "Chevrolet",
      imageUrl: [
        "https://images.thequint.com/thequint%2F2016-02%2F15ee3c7d-b1d0-4354-a635-30d0f51d828f%2FCruze-hero.jpg?auto=format%2Ccompress&fmt=webp&width=120&w=1200",
        "https://www.example.com/images/chevrolet-bolt-ev-2.jpg",
      ],
      description:
        "The Chevrolet Bolt EV is a compact electric car designed and manufactured by General Motors under the Chevrolet brand. Launched in 2016, the Bolt EV is known for its impressive electric range, offering up to 259 miles on a single charge. It combines a spacious interior with modern technology and features, making it a practical choice for everyday driving. The Bolt EV's smooth and quiet electric motor delivers responsive acceleration, providing a fun driving experience. With its affordable price and extensive range, the Chevrolet Bolt EV has gained popularity as a reliable electric vehicle in the market.",
      price: 36620,
      vehicle_type: "Car",
      release_year: 2020,
      rating: 4.0,
      maximum_power: 200,
    },
    {
      id: 4,
      name: "Audi e-tron",
      brand: "Audi",
      imageUrl: [
        "https://imgd.aeplcdn.com/0x0/n/cw/ec/39048/e-tron-exterior-right-front-three-quarter-2.jpeg?isig=0",
        "https://www.example.com/images/audi-etron-2.jpg",
      ],
      description:
        "The Audi e-tron is a premium all-electric SUV manufactured by Audi. It was introduced in 2018 as Audi's first fully electric vehicle. The e-tron offers a luxurious interior, cutting-edge technology, and impressive performance. With its dual electric motors and quattro all-wheel drive, the e-tron delivers excellent acceleration and handling. It has a range of up to 222 miles on a single charge and supports fast charging, allowing for quick and convenient recharging. The Audi e-tron represents Audi's commitment to electric mobility while maintaining the brand's reputation for quality and craftsmanship.",
      price: 66900,
      vehicle_type: "Car",
      release_year: 2020,
      rating: 4.3,
      maximum_power: 355,
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {productObjects.map((product, index) => (
        <ProductList
          key={index}
          id={product.id}
          title={product.name}
          image={product.imageUrl}
          description={product.description.slice(0, 50) + "..."}
        />
      ))}
    </div>
  );
};

export default App;
