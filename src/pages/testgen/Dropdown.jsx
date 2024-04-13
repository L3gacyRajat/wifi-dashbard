import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";



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
      <div className="flex flex-col gap-2 items-center">
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

  export default Dropdown