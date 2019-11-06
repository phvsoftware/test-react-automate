import React from "react";
import "./Switch.css";

const Switch = props => {
  const { onOff, color, handleClick } = props;
  return (
    <div>
      {!onOff && (
        <div className="switch-off" style={{ backgroundColor: "#ccc" }} onClick={handleClick}>
          <span className="slider-off" style={{ backgroundColor: "#ccc" }}></span>
        </div>
      )}
      {onOff && (
        <div className="switch-on" style={{ backgroundColor: color }} onClick={handleClick}>
          <span className="slider-on" style={{ backgroundColor: color }}></span>
        </div>
      )}
    </div>
  );
};

export default Switch;
