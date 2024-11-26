import React, { useState } from "react";
import "../../assets/css/switch.css";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`switch ${isOn ? "on" : "off"}`} onClick={toggleSwitch}>
      <div className="toggle"></div>
    </div>
  );
};

export default Switch;
