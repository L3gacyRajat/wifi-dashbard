import Links from "./Links";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useEffect,useRef,useState } from "react";
import { FaSquare } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";

import { SlEqualizer } from "react-icons/sl";
import {LiaToggleOnSolid} from "react-icons/lia";
import Selector from "../../layouts/Selector";

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link,NavLink} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';


const Topnavbar2 = () => {

    const [selectedOption, setSelectedOption] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    setIsLightMode(document.documentElement.classList.contains('dark'));
  }, []);
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsLightMode(!isLightMode);
  };
 
  const items = ['Select Text To Execute','Select Text To Execute1', 'Select Text To Execute2', 'Select Text To Execute3']; // Define the items array


  return (
    <div className="hidden lg:block">
    <nav className="text-textcolor dark:text-black text-1xl ml-4 font-semibold py-3 flex justify-between relative top-0 rounded-md mr-5 h-[60px]">
        <div className="flex gap-2 items-center justify-center">
        {/* <button className="py-3 px-2 rounded-md flex items-center justify-center border border-purple  "> */}
          {/* <IoQrCodeOutline className="text-purple text-2xl cursor-pointer mr-5" /> */}
          <button className="hover:border-purple border rounded-md shadow-sm px-4 py-2 inline-flex items-center space-x-2  focus:outline-none ">
            <LiaToggleOnSolid className=" text-lg " />
            <span>Open QR Code</span> 
          </button>
        {/* </button> */}
        {/* <div className="relative flex justify-between w-100px" ref={dropdownRef}> */}
          <div className=" flex items-center justify-between p-4 gap-2 relative">
            
              {items&& <Selector
                data={items}
                onSelect={setSelectedOption}
                dropdownname='Select Text To Execute'
                width="w-48"
                position='absolute'
                enableSearch={true}
              />}
          
        </div>
        </div>
      <div className="flex justify-center items-center gap-5" >
        <p>Test-Status:</p>
        <button className="rounded-md flex items-center py-2 px-3 justify-center border border-purple  text-purple">
            Plotting Data
        </button>
      </div>
      <div className="flex gap-4">
        <button className="w-7 h-7 rounded-md flex items-center justify-center border border-purple  ">
          <TbPlayerPlayFilled className="text-purple" />
        </button>
        <button className="w-7 h-7 rounded-md flex items-center justify-center border border-purple  ">
          <FaSquare className="text-purple" />
        </button>
        <button className="w-7 h-7 rounded-md flex items-center justify-center border border-purple  ">
          <FaTerminal className="text-purple" />
        </button>
        <Link to='/reportpannel'>
        <button className="w-7 h-7 rounded-md flex items-center justify-center border border-purple  ">
          <BiSolidReport className="text-purple" />
        </button>
        </Link>
        <Link to="/instrumentswindow" >
          <button className="w-7 h-7 rounded-md flex items-center justify-center border border-purple  ">
            <SlEqualizer className="text-purple" />
          </button>
        </Link>
        
        <button className="w-7 h-7 rounded-md flex items-center justify-center border border-purple  " onClick={toggleTheme}>
           {isLightMode ?<MdDarkMode className="text-purple" />:<MdLightMode className="text-purple" />}
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Topnavbar2;
