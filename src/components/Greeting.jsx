import React, { Fragment } from "react";
function Greeting(props) {
  return (
    <div style={{ backgroundColor: "black", padding: "10px 0px 10px 0px", color: "white" }}>
      <h1>
        Hello, {props.name} {props.surname}!
      </h1>
      <h2>this text was not there </h2>
    </div>
  );
}

export default Greeting;