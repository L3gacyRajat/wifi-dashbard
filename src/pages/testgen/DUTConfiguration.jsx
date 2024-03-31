import React from "react";
import Selector from "../../layouts/Selector";
import { useState } from "react";

const mdata = ["DUT", "DUT", "DUT"];
const apid = ["AP_01", "AP_01", "AP_01"];
const band = ["3G", "4G", "5G"];
const ssid = ["SSID_4G", "SSID_4G", "SSID_4G"];

const DUTConfiguration = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <div className="p-3 font-semibold">DUTConfiguration</div>
      <div className="ml-64">
        <Selector
          data={mdata}
          onSelect={setSelectedOption}
          dropdownname="DUT"
          width="w-72"
        />
      </div>
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-2 gap-1">
          <label htmlFor="ap">AP:</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              id="ap"
              name="ap"
              min="18"
              max="100"
              placeholder="Enter AP"
              className="placeholder:text-textcolor p-2 outline-none bg-background-color"
            />
            <button
              type="button"
              className="px-2 py-2 rounded-md bg-purple text-white"
            >
              Fetch
            </button>
          </div>

          <div>AP ID:</div>
          <Selector
            data={apid}
            onSelect={setSelectedOption}
            dropdownname="AP ID"
            width="w-72"
          />
          <div>Band:</div>
          <Selector
            data={band}
            onSelect={setSelectedOption}
            dropdownname="Band"
            width="w-72"
          />
          <div>SSID:</div>
          <Selector
            data={ssid}
            onSelect={setSelectedOption}
            dropdownname="SSid"
            width="w-72"
          />
          <label htmlFor="ap">Pass</label>
          <input
            type="text"
            id="pass"
            name="pass"
            placeholder="Enter Pass"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
          />
          <div className="flex gap-4 py-8">
            <button
              type="button"
              className="px-2 py-2 rounded-md bg-purple text-white"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-2 py-2 rounded-md bg-purple text-white"
            >
              Configure
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DUTConfiguration;
