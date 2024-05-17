import Links from "./Links";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import "react-toastify/dist/ReactToastify.css";

const Topnavbar2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    setIsLightMode(document.documentElement.classList.contains("dark"));
  }, []);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="h-[50px] py-2 ">
      <button
        className="w-7 h-7 rounded-md flex items-center justify-center border border-purple dark:border-[#00c2ff] absolute  right-0 m-4 "
        onClick={toggleTheme}
      >
        {isLightMode ? (
          <MdDarkMode className="text-purple dark:text-[#00c2ff]" />
        ) : (
          <MdLightMode className="text-purple dark:text-[#00c2ff]" />
        )}
      </button>
    </div>
  );
};

export default Topnavbar2;
