import { useState,useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import { motion } from 'framer-motion';


const Protocols = ({onClose}) => {
    const notify = () => toast("Saved Successfully!");
    const items = ['TCP', 'TCP1', 'TCP2', 'TCP3']; // Define the items array

    const [selectedItem, setSelectedItem] = useState(items[0]); // State for dropdown selection
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsOpen(false); // Close dropdown after selecting an item
    };
    
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

    const variants = {
        open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
        closed: { opacity: 0, height: 0, marginTop: 0 },
      };

    const values = ['Time Duration','Omit Duration', 'Parallel Streams', 'Bitrate', 'Window Size', 'Length', 'DHCP'];

    return (
        <div className='fixed inset-0 flex justify-center items-center z-50'>
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Popup content */}
        <div className='p-3 text-center rounded-md w-auto bg-[#0B1739] border left-1/2 right-auto z-60 transform -translate-x-1/2 border-[#343B4F] absolute'>
          <div>
            <div className="flex items-center m-3">
                <h3 className="mr-2">Protocols :</h3>
                <div className="relative" ref={dropdownRef}>
                    <button className="border border-purple-400 rounded px-2 py-1 gap-10 ml-3 flex items-center" onClick={() => setIsOpen(!isOpen)}>
                        {selectedItem} <IoIosArrowDown className={` ${isOpen && "rotate-180"} duration-200 ml-1`}/>
                    </button>
                    {isOpen && ( // Render the dropdown menu only if isOpen is true
                        <motion.ul
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ duration: 0.2 }}
                         className="bg-white border absolute border-gray-200 rounded mt-2 py-1 w-full z-10 shadow-md text-black">
                            {items.map((item, index) => (
                                <li key={index} onClick={() => handleItemClick(item)} className="cursor-pointer hover:bg-gray-200 px-2 py-1">
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </div>
                <div className='ml-auto'>
                    <button onClick={onClose} className=" text-white text-lg font-bold py-2 px-4 rounded"><RxCross2/></button>
                </div>
            </div>
            <ul className="items-center">
    {values.map((value, index) => (
        index % 2 === 0 && (
            <li className="flex justify-between items-center mx-5" key={index}>
                <div className="px-2 py-1 text-start" title={values[index].title}>{values[index]}
                    <div className='placeholder border flex text-center justify-end border-purple mr-3 my-2 rounded text-black'>
                        <input type="text" className='text-center text-black p-[2px]' placeholder={values[index]} />
                    </div>
                </div>
                {values[index + 1] && (
                    <div className="px-2 py-1 text-start" title={values[index + 1].title}>{values[index + 1]}
                        <div className='placeholder border flex text-center justify-end border-purple mr-3 my-2 rounded text-black'>
                            <input type="text" className='text-center text-black p-[2px]' placeholder={values[index + 1]} />
                        </div>
                    </div>
                )}
            </li>
        )
    ))}
            </ul>
            <div className='flex justify-end pr-2 mb-2 pt-0 mt-0'>
                    <button className=" text-white font-semibold py-2 px-4 rounded">Cancle</button>
                    <button onClick={notify} className=" bg-purple hover:bg-transparent border border-purple text-white font-semibold py-2 px-4 rounded">Save</button>
                    <ToastContainer theme='dark' transition={Bounce} autoClose={2500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
                </div>

        </div>
        </div>
        </div>
    );
}

export default Protocols;
