import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiExpandLeftRightFill } from "react-icons/ri";


import Selector from "../../layouts/Selector";

const devicedata = ["Device 01", "Device 02", "Device 03"];
const instrumentsdata = ["Instrument 01", "Instrument 02", "Instrument 03"];
const trafficpair1 = ["Instrument 01", "Instrument 02", "Instrument 03"];
const trafficpair2 = ["Instrument 01", "Instrument 02", "Instrument 03"];

const TrafficPair = ({ onClose }) => {
  const notify = () => toast("Saved Successfully!");

  const [selectedOption, setSelectedOption] = useState(
    null
  );
  

  const variants = {
    open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
    closed: { opacity: 0, height: 0, marginTop: 0 },
  };

  return (
    <>
      <div className='fixed inset-0 flex justify-center items-center z-50'>
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Popup content */}
        <div className='p-3 text-center w-auto bg-[#0B1739] border rounded-md left-1/2 right-auto z-60 transform -translate-x-1/2 border-[#343B4F] absolute'>
          <div>
            <div className="flex items-center m-3">
              <h3 className="mr-2 text-center font-semibold text-purple">Traffic Pairs</h3>
              <div className='ml-auto'>
                <button onClick={onClose} className=" text-white text-lg font-bold py-2 px-4 rounded"><RxCross2 /></button>
              </div>
            </div>
            {/* <ul className=" items-center">
              <li className="px-2 py-1 flex justify-start items-center">Number of Traffic pair
                <div className='placeholder border flex text-center justify-end border-purple mr-3 ml-10 my-2 rounded text-black'>
                  <input type="number" className='text-center text-black p-[2px]' placeholder={1} />
                </div>
              </li>
              <li className=" px-2 py-1 flex justify-start items-center">Device Under Test :
                <button className='border border-purple-400 rounded px-2 py-1 gap-10 ml-3 my-2 flex items-center' onClick={() => setIsOpenDevice(!isOpenDevice)}>
                  {selectedDeviceItem} <IoIosArrowDown className={` ${isOpenDevice && "rotate-180"} duration-200 ml-1`}/>
                </button>
                {isOpenDevice && ( // Render the dropdown menu only if isOpen is true
                        <motion.ul
                        initial="closed"
                        animate={isOpenDevice ? "open" : "closed"}
                        variants={variants}
                        transition={{ duration: 0.2 }}
                         className="bg-white border absolute border-gray-200 rounded mt-2 py-1 w-32 z-10 shadow-md text-black">
                            {deviceitems.map((item, index) => (
                                <li key={index} onClick={() => handleDevice(item)} className="cursor-pointer hover:bg-gray-200 px-2 py-1">
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                <AiOutlineMenuFold color='purple' className='text-3xl ml-4'/>
              </li>
              <li className="px-2 py-1 flex justify-start items-center">Choose Instruments
              <button className='border border-purple-400 rounded px-2 py-1 gap-10 ml-3 my-2 flex items-center' onClick={() => setIsInstruments(!isOpenInstruments)}>
                  {selectedInstrumentsItem} <IoIosArrowDown className={` ${isOpenInstruments && "rotate-180"} duration-200 ml-1`}/>
                </button>
                {isOpenInstruments && ( // Render the dropdown menu only if isOpen is true
                        <motion.ul
                        initial="closed"
                        animate={isOpenInstruments ? "open" : "closed"}
                        variants={variants}
                        transition={{ duration: 0.2 }}
                         className="bg-white border absolute border-gray-200 rounded mt-2 py-1 w-32 z-10 shadow-md text-black">
                            {instrumentsitems.map((item, index) => (
                                <li key={index} onClick={() => handleInstruments(item)} className="cursor-pointer hover:bg-gray-200 px-2 py-1">
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    )}
            
                w
              </li>
            </ul> */}

<div className="flex  justify-center items-center p-5">
        <div className="grid grid-cols-2 gap-2 text-center">

          <label>Number of Traffic Pair:</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="1"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
          />
          <label >Device Under Test: </label>
          <div className='flex justify-between'>
            <Selector
              data={devicedata}
              onSelect={setSelectedOption}
              dropdownname="Server"
              width='w-36'
              position='absolute'

            />
            <AiOutlineMenuFold color='purple' className='text-3xl cursor-pointer ml-4'/>
          </div>
            <label >Choose Instruments: </label>
          <div className='flex justify-between'>
            <Selector
              data={devicedata}
              onSelect={setSelectedOption}
              dropdownname="Server"
              width='w-36'
              position='absolute'
            />
            <button className='border bg-[#0B1739] border-[#343B4F] ml-5 my-2 rounded px-3 py-1'>Get</button>
          </div>
        </div>
      </div>

            <div className="px-2 py-1 flex justify-start items-center">
              <p className='mx-3'>Traffic Pair</p>
                <Selector
                  data={trafficpair1}
                  onSelect={setSelectedOption}
                  dropdownname="Select..."
                  width='w-28'
                  position='absolute'

                />
                <RiExpandLeftRightFill className='text-lg font-bold'/>
                <Selector
                  data={trafficpair2}
                  onSelect={setSelectedOption}
                  dropdownname="Select..."
                  width='w-28'
                  position='absolute'

                />
            
                <button className='border bg-[#0B1739]  border-[#343B4F] mx-2 my-2 rounded px-3 py-1'>Config</button>
                <button className='border bg-[#0B1739]  border-[#343B4F] mx-2 my-2 rounded px-3 py-1'>Associate</button>
              </div>

            <div className='flex justify-end pr-2 mb-2 pt-0 mt-2'>
              <button className=" text-white font-bold py-2 px-4 rounded">Cancel</button>
              <button onClick={notify} className=" bg-purple hover:bg-transparent border border-purple text-white font-bold py-2 px-4 rounded">Save</button>
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
    </>
  );
};

export default TrafficPair;
