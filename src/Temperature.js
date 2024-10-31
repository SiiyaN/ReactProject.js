import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2>The temperature is {props.value}℃</h2>
    </div>
  );
}
