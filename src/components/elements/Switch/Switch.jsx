import React, { useState } from "react";
import "../../../assets/css/switch.css";

const Switch = ({ checked, onChange }) => {
  const toggleSwitch = () => {
    onChange(!checked);
  };

  return (
    <div className={`switch ${checked ? "on" : "off"}`} onClick={toggleSwitch}>
      <div className="toggle"></div>
    </div>
  );
};

export default Switch;
