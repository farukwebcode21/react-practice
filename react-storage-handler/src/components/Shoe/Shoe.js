import React from "react";
import { addToDb } from "../../utilities/fakedb";

const Shoe = (props) => {
  const { name, price, id } = props.shoe;
  const addToCart = (id) => {
    addToDb(id);
  };
  return (
    <div
      style={{ border: "2px solid orange", margin: "10px", padding: "10px" }}
    >
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h3>price only ${price}</h3>
      <button onClick={() => addToCart(id)}>Add TO cart</button>
    </div>
  );
};

export default Shoe;
