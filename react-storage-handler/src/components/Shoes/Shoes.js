import React from "react";
import Shoe from "../Shoe/Shoe";

const Shoes = () => {
  const shoes = [
    { id: 1, name: "Adidas", price: 100 },
    { id: 2, name: "China", price: 150 },
    { id: 3, name: "Indian", price: 130 },
    { id: 4, name: "Bd", price: 200 },
    { id: 5, name: "Copy", price: 100 },
    { id: 6, name: "Original", price: 300 },
  ];
  const shoeData = shoes.map((shoe) => <Shoe key={shoe.id} shoe={shoe} />);
  return <div>{shoeData}</div>;
};

export default Shoes;
