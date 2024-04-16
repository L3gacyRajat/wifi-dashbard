import React from 'react';
import StaInput from './StaInput';
import Select from 'react-select'
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from './Dropdown'
import Selector from '../../layouts/Selector';
import InstrumentsSettings from './InstrumentsSettings';
import TrafficSettings from './TrafficSettings';



const mdata = ['Attentuator 01', 'Attentuator 02', 'Attentuator 03'];
//sta data
const stas = [

  {
    id: 4,
    title: "Band",
    items: ['5', '6', '5', '5', '5']
  }
  ,
  {
    id: 5,
    title: "Bandwidth",
    items: ['80', '80', '80', '80', '80']
  }
  ,
  {
    id: 6,
    title: "Standard",
    items: ['11ax', '11ax', '11ax', '11ax', '11ax']
  }
  ,
  {
    id: 7,
    title: "Channel",
    items: ['11', '11', '11', '11', '11']
  }
  ,
  {
    id: 7,
    title: "Nss",
    items: ['2', '2', '2', '2', '2']
  }
  ,
  {
    id: 8,
    title: "Test",
    items: ['120', '120', '120', '120', '120']
  },
  {
    id: 9,
    title: "Test type",
    items: ['Tcp', 'Tcp', 'Tcp', 'Tcp', 'Tcp']
  },
  {
    id: 10,
    title: "Guard",
    items: ['800', '800', '800', '800', '800']
  },
  {
    id: 11,
    title: "Attenuator",
    items: ['Atten_01', 'Atten_01', 'Atten_01', 'Atten_01', 'Atten_01']
  }
];


const Stas = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isInstrumentOpen, setIsInstrumentOpen] = useState(false);
  const [isTrafficOpen, setIsTrafficOpen] = useState(false);
  const handleInstrumentSettingClick = () => {
    setIsInstrumentOpen(!isInstrumentOpen);
  };
  const handleTrafficSettingClick = () => {
    setIsTrafficOpen(!isTrafficOpen);
  };
  return (
    <>
      <div className="p-2">
        <div className='flex justify-between items-center text-purple-500 bg-[#0B1739] border-[#343B4F] border rounded-md m-2 p-2'>
          <div className="flex gap-4">
            <div className='text-1xl flex flex-col gap-4 '>
              <h3>STA</h3>
              <h3>{props.name}</h3>
            </div>
            <div className='text-1xl flex flex-col gap-2 '>
              <h3>Instrument Settings</h3>
              <button
                className="px-2 py-2 rounded-md bg-purple text-white"
                onClick={handleInstrumentSettingClick}
              >
                configure
              </button>
            </div>
            <div className='text-1xl flex flex-col  gap-2 '>
              <h3>Traffic Settings</h3>
              <button
                className="px-2 py-2 rounded-md bg-purple text-white"
                onClick={handleTrafficSettingClick}
              >
                configure
              </button>
            </div>
            <div className='text-1xl flex flex-col  gap-2 '>
              <h3>Attentuater Settings</h3>
              <Selector data={mdata} onSelect={setSelectedOption} dropdownname="Attentuator" width="w-25" position='absolute' />
            </div>
            <div className='text-1xl flex flex-col  gap-2 '>
              <h3>Turntable Settings</h3>
            </div>
          
          </div>
        </div>
      </div>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isInstrumentOpen && <InstrumentsSettings onClose={handleInstrumentSettingClick} />}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
         {isTrafficOpen && <TrafficSettings onClose={handleTrafficSettingClick} />}
        </motion.div>
    </>
  )
}
export default Stas