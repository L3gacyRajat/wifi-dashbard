import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Protocols from './Protocols';
import TrafficPair from './TrafficPair';
import { LiaToggleOnSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";


const Dropdown = ({ title, items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const variants = {
    open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
    closed: { opacity: 0, height: 0, marginTop: 0 },
  };

  return (
    <div className="flex items-center">
      <h3 className="mr-6">{title}:</h3>
      <div className="relative" ref={dropdownRef}>
        <button
          className="border border-purple-400 rounded px-2 py-1 flex gap-10 justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedItem} <IoIosArrowDown className={` ${isOpen && "rotate-180"} duration-200 ml-1`} />
        </button>
        {isOpen && (
          <motion.ul
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.2 }}
            className="absolute bg-white border border-gray-200 rounded mt-2 py-1 w-full z-10 shadow-md text-black"
          >
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className="cursor-pointer hover:bg-gray-200 px-2 py-1"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

const Main = ({ onDelete }) => {
  const dropdown = [
    {
      id: 1,
      title: "DUT Type",
      items: ['AP', 'STA', 'P2P', 'IBSS', 'Mesh']
    },
    {
      id: 2,
      title: "Module",
      items: ['Ipref3', 'Ipref4', 'Ipref5', 'Ipref6', 'Ipref7']
    }
  ];
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  // Function to toggle the visibility of the Protocols component
  const toggleSetting = () => {
    setIsOpenSetting(!isOpenSetting);
  };


  const [isOpenTrafficPair, setIsOpenTrafficPair] = useState(false);

  // Function to toggle the visibility of the Protocols component
  const toggleTrafficPair = () => {
    setIsOpenTrafficPair(!isOpenTrafficPair);
  };

  return (
    <div className="p-2">
      <div className='flex justify-between items-center text-purple-500 bg-[#0B1739] border-[#343B4F] border rounded-md m-2 p-2'>
        <div className="flex gap-10">
          {dropdown.map((item) => (
            <Dropdown key={item.id} title={item.title} items={item.items} />
          ))}
          {/* Button to toggle the Protocols component */}
          <button onClick={toggleSetting} className="items-center px-2 py-1 hover:text-purple">
            <IoSettingsOutline className={` ${isOpenSetting && "rotate-180"} duration-200 ml-1 text-lg`} />
          </button>
        </div>

        {/* Protocols component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isOpenSetting && <Protocols onClose={toggleSetting} />}
        </motion.div>
        <div className="flex gap-7 ">
          <button className="hover:border-purple border rounded-md shadow-sm px-4 py-2 inline-flex items-center space-x-2 text-white focus:outline-none ">
            <LiaToggleOnSolid className="text-white text-lg" />
            <span>Toggle</span>
          </button>
          <button onClick={toggleTrafficPair} className="hover:border-purple border rounded-md shadow-sm px-4 py-2 inline-flex items-center space-x-2 text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple">
            <IoSettingsOutline className={` ${isOpenTrafficPair && "rotate-180"} duration-200 text-white text-lg`} />
            <span>Traffic Pair</span>
          </button>
        </div>
        <MdDelete className="text-[20px]" onClick={() => onDelete && onDelete()} />
        {/* <button onClick={toggleTrafficPair} className="hover:border-purple border rounded-md shadow-sm px-4 py-2 inline-flex items-center space-x-2 text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-purple">
            <IoSettingsOutline className={` ${isOpenTrafficPair && "rotate-180"} duration-200 text-white text-lg`}/>
          </button> */}
        {/* Traffic Pair component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isOpenTrafficPair && <TrafficPair onClose={toggleTrafficPair} />}
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
