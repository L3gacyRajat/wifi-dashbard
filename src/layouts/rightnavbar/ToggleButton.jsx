import React, { useState } from 'react';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";


function ToggleButton({onToggle}) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle(newState);
  };

  return (
    <label className="flex items-center text-[30px]">
        {isOn ? <FaToggleOn className="text-purple cursor-pointer  " onClick={handleToggle} /> : <FaToggleOff className="text-textcolor cursor-pointer " onClick={handleToggle} />}
    </label>
  );
}

export default ToggleButton;
