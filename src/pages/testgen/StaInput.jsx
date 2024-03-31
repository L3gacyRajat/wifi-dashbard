import React, { useState } from 'react';
import Selector from '../../layouts/Selector';
import { MdDelete } from 'react-icons/md';
const mdata = ['Server 01', 'Server 02', 'Server 03'];

const StaInput = ({sta, onDelete}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="p-4 mt-7 rounded-md bg-background-color">
      <div className="flex items-center justify-between gap-12">
        <div>{sta}</div>
        <div className="flex flex-col flex-grow gap-3">
          <div className="flex gap-3 my-2 justify-between items-center">
            <div>Traffic:</div>
            <input
              type="text"
              id="traffic"
              name="traffic"
              placeholder="192.168.1.20"
              className="placeholder:text-textcolor focus:text-white p-2 rounded-md outline-none bg-[#0B1739] w-24"
            />
            <div>Management:</div>
            <input
              type="text"
              id="start"
              name="start"
              placeholder="10.10.15.20"
              className="placeholder:text-textcolor p-2 rounded-md outline-none bg-[#0B1739] w-24"
            />
            <div>Test Duration:</div>
            <input
              type="text"
              id="test-duration"
              name="test-duration"
              placeholder="120"
              className="placeholder:text-textcolor p-2 outline-none rounded-md bg-[#0B1739] w-28"
            />
            
          </div>
          <div className="flex gap-3 my-2 justify-between items-center">
            <div>Bandwidth:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="Channel" width="w-24" position='absolute' />
            <div>Standard:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="Standard"     width="w-24" position='absolute' />
            <div>Channel:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="Channel"     width="w-24" position='absolute' />
            <div>NSS:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="NSS"     width="w-24" position='absolute' />
          </div>
          <div className="flex gap-3 my-2 justify-between items-center">
            <div>TestType:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="TestType"     width="w-24" position='absolute' />
            
            <div>Band:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="Band"    width="w-24" position='absolute' />
            <div>Guard Interval:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="Guard Interval" width="w-24" position='absolute' />
            <div>Attenuator:</div>
            <Selector data={mdata} onSelect={setSelectedOption} dropdownname="Attenuator" width="w-28" position='absolute' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
        <button className="border border-purple rounded-md px-3 py-2 ml-2">Channel</button>
        <MdDelete className="text-[40px] px-2 py-1 " onClick={() => { console.log("Delete button clicked"); onDelete(sta); }} /></div>
      </div>
    </div>
  );
};

export default StaInput;
