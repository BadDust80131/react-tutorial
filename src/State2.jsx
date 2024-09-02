import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function State2() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [times, setTimes] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setTimes(times + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
      <p>{times}</p>
    </div>
  );
}

export default State2;
