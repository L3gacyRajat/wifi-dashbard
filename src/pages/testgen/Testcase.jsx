import React from "react";
import Selector from "../../layouts/Selector";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const mdata = ["RVR", "RVR", "RVR"];
const ndata = ["DL", "DL", "DL"];

const Testcase = ({testcaseno, onDelete}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      {/*test case*/}
      <div className="flex  items-center justify-between p-4 mt-7 rounded-sm bg-background-color">
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
            data={mdata}
            onSelect={setSelectedOption}
            dropdownname="DL"
            width="w-20"
          />
        </div>
        <Link
          to="/instruments"
          className="px-2 py-2 rounded-md bg-purple text-white"
        >
          instrument
        </Link>
        <Link
          to="/adv"
          className="px-2 py-2 rounded-md bg-purple text-white"
        >
          ADV
        </Link>
        <div className="flex gap-1 ">
          <FaArrowUp className="text-[16px]" />
          <FaArrowDown className="text-[16px]" />
        </div>
        <MdDelete className="text-[20px]" onClick={() => onDelete(testcaseno)}  />
      </div>
    </>
  );
};

export default Testcase;
