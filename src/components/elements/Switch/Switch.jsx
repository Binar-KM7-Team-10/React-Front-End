import React, { useState } from "react";
import "../../../assets/css/switch.css";

const Switch = ({ checked, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange(newState); 
  };

  return (
    <div className={`switch ${isOn ? "on" : "off"}`} onClick={toggleSwitch}>
      <div className="toggle"></div>
    </div>
  );
};

export default Switch;
