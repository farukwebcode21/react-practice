import React from "react";

const Cosmetics = (props) => {
  const { title, body } = props.user;

  return (
    <div style={{ padding: "20px", border: "3px solid green", margin: "20px" }}>
      <h2 style={{ border: "1px solid red", margin: "10px" }}>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Cosmetics;
