import { useParams} from "react-router-dom";
import React, { useState } from "react";
import Selector from '../layouts/Selector';
import ManagementConfiguration from "./testgen/ManagementConfiguration";
import TestCaseConfiguration from "./testgen/TestCaseConfiguration";
import DUTConfiguration from "./testgen/DUTConfiguration";

import Quickrun from "../layouts/QuickRunExecution/Quickrun";

const data = [
  "Management Configuration",
  "DUT Configuration",
  "Test Case Configuration",
];

const Testgen = () => {
  const { dID } = useParams();
  const [selectedOption, setSelectedOption] = useState("Management Configuration");

  return (
    <>
      <div className="text-textcolor dark:text-black text-1xl px-3">Testgen/ {dID}</div>
      {dID === "Quick Run Execution" ? <Quickrun /> : 
      <div className="bg-graphbg shadow-md rounded-sm m-4 p-4">
      <Selector data={data} onSelect={setSelectedOption} dropdownname="Configure" width="w-72"/>
      {selectedOption === "Management Configuration" && <ManagementConfiguration />}
      {selectedOption === "DUT Configuration" && <DUTConfiguration />}
      {selectedOption === "Test Case Configuration" && <TestCaseConfiguration/>}
      </div>
      }
    </>
  )
};

export default Testgen;
