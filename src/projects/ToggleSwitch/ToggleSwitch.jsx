import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBgColor = { backgroundColor: isOn ? "green" : "" };

  return (
    <div
      className="toggle-switch"
      onClick={handleToggleSwitch}
      style={toggleBgColor}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
      </div>
    </div>
  );
};
