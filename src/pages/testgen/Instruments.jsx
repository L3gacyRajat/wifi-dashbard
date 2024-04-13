import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Selector from "../../layouts/Selector";
import Attenuatorsettings from "./Attenuatorsettings"
import SnifferSettings from "./SnifferSettings"
import GenericInstrumentSettings from "./GenericInstrumentSettings"
import TurnTableSettings from "./TurnTableSettings"
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import Select from 'react-select'


const data = [
  "Attenuator Settings",
  "TurnTable settings ",
  "Generic Instuments Settings",
  "Sniffer Settings",
];

const Instruments = ({ onClose }) => {
  const { dID } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);



  const variants = {
    open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
    closed: { opacity: 0, height: 0, marginTop: 0 },
  };


  return (
    <>
      <div className=' flex justify-center items-center z-50 '>
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 h-full bg-black opacity-50"></div>

        {/* Popup content */}
        <div className='w-full h-[580px] p-3 text-center  bg-[#0B1739] border rounded-md z-60 transform -translate-x-0 border-[#343B4F] overflow-y-scroll scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-700 '>
          <div>
            <div className="flex items-center m-3">
              <h3 className="mr-2 text-center font-semibold text-purple">Instruments</h3>
              <div className='ml-auto'>
                <button onClick={onClose} className=" text-white text-lg font-bold py-2 px-4 rounded"><RxCross2 /></button>
              </div>
            </div>

            <div className="bg-graphbg shadow-md rounded-sm m-4 p-4">
              <Selector data={data} onSelect={setSelectedOption} dropdownname="Instrument Settings" width="w-72" />
              {selectedOption === "Attenuator Settings" && <Attenuatorsettings />}
              {selectedOption === "Sniffer Settings" && <SnifferSettings />}
              {selectedOption === "Generic Instuments Settings" && <GenericInstrumentSettings />}
              {selectedOption === "TurnTable settings " && <TurnTableSettings />}
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruments;
