// AttenuatorInput.jsx
import React from "react";
import { MdDelete } from "react-icons/md";

const AttenuatorInput = ({ atten,onDelete }) => {
  return (
    <div className="flex items-center justify-between gap-12 p-4 mt-7 w-full rounded-sm bg-background-color">
      <div>{atten}</div>
      <div className="flex items-center justify-between flex-grow">
        <div className="flex flex-grow gap-3"> {/* Wrapper div */}
          <input
            type="text"
            id="ip-address"
            name="ip_address"
            placeholder="Enter IP Address(eg:11.25.0.255)"
            className="placeholder:text-textcolor p-2 rounded-md outline-none bg-[#0B1739] w-1/2"
          />
          <input
            type="text"
            id="start"
            name="start"
            placeholder="Start"
            className="placeholder:text-textcolor p-2 rounded-md outline-none bg-[#0B1739]"
            style={{ width: "50px" }} // Adjusted width
          />
          <input
            type="text"
            id="step"
            name="step"
            placeholder="Step"
            className="placeholder:text-textcolor p-2 outline-none rounded-md bg-[#0B1739]"
            style={{ width: "50px" }} // Adjusted width
          />
          <input
            type="text"
            id="stop"
            name="stop"
            placeholder="Stop"
            className="placeholder:text-textcolor p-2 outline-none rounded-md bg-[#0B1739]"
            style={{ width: "50px" }} // Adjusted width
          />
          <input
            type="text"
            id="step-duration"
            name="step-duration"
            placeholder="Step Duration"
            className="placeholder:text-textcolor p-2 outline-none rounded-md bg-[#0B1739] w-1/4"
            // Adjusted width
          />
        </div>
        <button className="border border-purple rounded-md px-3 py-2 ml-2">Channel</button>
        <MdDelete className="text-[40px] px-2 py-1 " onClick={() => { console.log("Delete button clicked"); onDelete(atten); }} />

      </div>
    </div>
  );
};

export default AttenuatorInput;
