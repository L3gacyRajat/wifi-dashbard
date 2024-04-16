import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Selector from "../../layouts/Selector";
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import Select from 'react-select'


const data = [
    "Attenuator Settings",
    "TurnTable settings ",
    "Generic Instuments Settings",
    "Sniffer Settings",
];

const options = [
    { value: 'TCP', label: 'TCP' },
    { value: 'TCP', label: 'TCP' },
    { value: 'TCP', label: 'TCP' }
];


const TrafficSettings = ({ onClose }) => {

    return (
        <>
            <div className='  flex justify-center items-center z-50 '>
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 h-[100vh] bg-black opacity-50"></div>

                {/* Popup content */}
                <div className='absolute top-10 w-[40%] h-[90%] p-3 text-center  bg-[#0B1739] border rounded-md z-60 transform -translate-x-0 border-[#343B4F] overflow-y-scroll scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-700 '>
                    <div>
                        <div className="flex items-center m-3">
                            <h3 className="mr-2 text-center font-semibold text-purple">Traffic Settings</h3>
                            <div className='ml-auto'>
                                <button onClick={onClose} className=" text-white text-lg font-bold py-2 px-4 rounded"><RxCross2 /></button>
                            </div>
                        </div>
                    </div>

                    {/* iperf3 settings */}
                    <div className="">
                        <div className="flex items-center p-4">
                            iperf3 settings
                        </div>
                        <div className="grid grid-cols-2 gap-1 flex items-center">
                            <label htmlFor="Traffic-ip">Test Duration</label>
                            <input
                                type="text"
                                id="testduration"
                                name="testduration"
                                placeholder="Enter Testduration"
                                className="p-2 outline-none bg-background-color"
                            />
                            <label htmlFor="Net-Mask">Omit Duration</label>
                            <input
                                type="text"
                                id="Omitduration"
                                name="Omitduration"
                                placeholder="Enter Omitduration"
                                className="p-2 outline-none bg-background-color"
                            />
                            <label htmlFor="security">VMM priority:</label>
                            <input
                                type="text"
                                id="vmmpriority"
                                name="vmmpriority"
                                placeholder="Enter vmmpriority"
                                className="p-2 outline-none bg-background-color"
                            />
                            <label htmlFor="SSID">Packet Size</label>
                            <input
                                type="text"
                                id="packetsize"
                                name="packetsize"
                                placeholder="Enter packetsize"
                                className="p-2 outline-none bg-background-color"
                            />
                            <label htmlFor="password">Test Type</label>
                            <Select options={options} placeholder={"Test type"} className='text-black' />
                            <label htmlFor="password">Parallel Streams</label>
                            <input
                                type="text"
                                id="parallelstreams"
                                name="parallelstreams"
                                placeholder="Enter parallelstreams"
                                className="p-2 outline-none bg-background-color"
                            />
                        </div>

                    </div>
                    <div className="flex ">
                        <button
                            className="absolute right-[20px] m-4 flex px-7 py-2 rounded-md bg-purple text-white"
                        >
                            Configure
                        </button></div>

                </div>
            </div>
        </>
    );
};

export default TrafficSettings;
