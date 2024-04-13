import React, { useState } from "react";
import Selector from "../../layouts/Selector";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import TrafficPair from "../../layouts/QuickRunExecution/TrafficPair";
import { motion } from 'framer-motion';
import Instruments from "./Instruments";

const mdata = ["RVR", "RVR", "RVR"];
const ndata = ["DL", "DL", "DL"];

const Testcase = ({ testcaseno, onDelete, onMoveUp, onMoveDown }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isInstrumentOpen, setIsInstrumentOpen] = useState(false);

  const handleInstrumentClick = () => {
    setIsInstrumentOpen(!isInstrumentOpen);
  };
  console.log(isInstrumentOpen)

  return (
    <>
      {/*test case*/}
      <div className="flex items-center justify-between p-4 mt-7 rounded-sm bg-background-color">
        <div>{testcaseno}</div>
        <div className="flex items-center gap-2">
          Type:
          <Selector
            data={mdata}
            onSelect={setSelectedOption}
            dropdownname="RVR"
            width="w-20"
          />
        </div>
        <div className="flex items-center gap-2">
          Flow:
          <Selector
            data={ndata}
            onSelect={setSelectedOption}
            dropdownname="DL"
            width="w-20"
          />
        </div>
        <button
          className="px-2 py-2 rounded-md bg-purple text-white"
          onClick={handleInstrumentClick}
        >
          instrument
        </button>
        <Link to="/adv" className="px-2 py-2 rounded-md bg-purple text-white">
          ADV
        </Link>
        <div className="flex gap-1 ">
        <FaArrowUp className="text-[16px]" onClick={onMoveUp} />
          <FaArrowDown className="text-[16px]" onClick={onMoveDown} />
        </div>
        <MdDelete
          className="text-[20px]"
          onClick={() => onDelete(testcaseno)}
        />
      </div>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {isInstrumentOpen && <Instruments onClose={handleInstrumentClick} />}
        </motion.div>
     

      
    </>
  );
};

export default Testcase;
