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
import Search from "../searchcomponent/Search";
import ToggleButton from "../../layouts/rightnavbar/ToggleButton";





const data = [
    "Attenuator Settings",
    "TurnTable settings ",
    "Generic Instuments Settings",
    "Sniffer Settings",
];

const options = [
    { value: 'OpenSystem', label: 'OpenSystem' },
    { value: 'OpenSystem', label: 'OpenSystem' },
    { value: 'OpenSystem', label: 'OpenSystem' }
];

const InstrumentsSettings = ({ onClose }) => {
    const { dID } = useParams();
    const [selectedOption, setSelectedOption] = useState(null);
    const [value, setValue] = useState("");



    const variants = {
        open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
        closed: { opacity: 0, height: 0, marginTop: 0 },
    };


    return (
        <>
            <div className='  flex justify-center items-center z-50 '>
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 h-[100vh] bg-black opacity-50"></div>

                {/* Popup content */}
                <div className='absolute top-10 w-[40%] h-[90%] p-3 text-center  bg-[#0B1739] border rounded-md z-60 transform -translate-x-0 border-[#343B4F] overflow-y-scroll scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-700 '>
                    <div>
                        <div className="flex items-center m-3">
                            <h3 className="mr-2 text-center font-semibold text-purple">Network Settings</h3>
                            <div className='ml-auto'>
                                <button onClick={onClose} className=" text-white text-lg font-bold py-2 px-4 rounded"><RxCross2 /></button>
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-col  p-10">
                        <div className="grid grid-cols-2 gap-1 flex items-center">
                            <label htmlFor="Management-ip">Management IP:</label>
                            <input
                                type="text"
                                id="Management-ip"
                                name="ManagementIP"
                                placeholder="Enter Management-ip"
                                className="p-2 outline-none bg-background-color"
                            />
                        </div>
                        {/* radio buttons */}
                        <div className="flex justify-center items-center space-x-4 p-3">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio text-blue-500" name="radio" value="option1" />
                                <span className="ml-2">Acess Point</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio text-blue-500" name="radio" value="option2" />
                                <span className="ml-2">State</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio text-blue-500" name="radio" value="option3" />
                                <span className="ml-2">Sniffer</span>
                            </label>
                        </div>
                        {/* enable checkbox */}
                        <div className="flex items-center">
                            <input type="checkbox" id="checkbox" className="form-checkbox h-5 w-4 text-blue-600" />
                            <label htmlFor="checkbox" className="ml-2">Enable</label>
                        </div>
                        {/* radio buttons */}
                        <div className="flex justify-center items-center space-x-4 p-3">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio text-blue-500" name="radio" value="option1" />
                                <span className="ml-2">2.4GHZ</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio text-blue-500" name="radio" value="option2" />
                                <span className="ml-2">4GHZ</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio text-blue-500" name="radio" value="option3" />
                                <span className="ml-2">5GHZ</span>
                            </label>
                        </div>

                        {/* main */}
                        <div className="">
                            <div className="flex items-center">
                                Main
                            </div>
                            <div className="grid grid-cols-2 gap-1 flex items-center">
                                <label htmlFor="Traffic-ip">Traffic IP:</label>
                                <input
                                    type="text"
                                    id="Traffic-ip"
                                    name="TrafficIP"
                                    placeholder="Enter Traffic-ip"
                                    className="p-2 outline-none bg-background-color"
                                />
                                <label htmlFor="Net-Mask">Net Mask:</label>
                                <input
                                    type="text"
                                    id="Net-Mask"
                                    name="Net-Mask"
                                    placeholder="Enter net-mask"
                                    className="p-2 outline-none bg-background-color"
                                />
                                <label htmlFor="security">Security:</label>
                                <Select options={options} placeholder={"Security type"} className='text-black' />
                                <label htmlFor="SSID">SSID:</label>
                                <input
                                    type="text"
                                    id="SSID"
                                    name="SSID"
                                    placeholder="Enter SSID"
                                    className="p-2 outline-none bg-background-color"
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="pass"
                                    name="pass"
                                    placeholder="Enter password"
                                    className="p-2 outline-none bg-background-color"
                                />
                            </div>
                        </div>

                        {/* radio */}
                        <div className="">
                            <div className="flex items-center">
                                Radio
                            </div>
                            <div className="grid grid-cols-2 gap-1 flex items-center">
                                <label htmlFor="Traffic-ip">Interface:</label>
                                <Select options={options} placeholder={"Enter interface"} className='text-black' />
                                <label htmlFor="Net-Mask">NSS:</label>
                                <Select options={options} placeholder={"Enter nss"} className='text-black' />
                                <label htmlFor="security">Bandwidth:</label>
                                <Select options={options} placeholder={"Enter bandwith"} className='text-black' />

                                <label htmlFor="password">Primary Channel:</label>
                                <Select options={options} placeholder={"Enter primarychannel"} className='text-black' />
                                <label htmlFor="password">Mcs:</label>
                                <Select options={options} placeholder={"Enter mcs"} className='text-black' />
                                <label htmlFor="password">Guard interval:</label>
                                <Select options={options} placeholder={"Enter guardinterval"} className='text-black' />
                            </div>
                        </div>
                        {/* advance */}
                        <div className="">
                            <div className="flex items-center">
                                Advance
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton />802.11k
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton />802.11v
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton />802.11r
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton />Wps
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton />Target Wake Time
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton />Mu Mimo
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton />OFDMA
                            </div>

                        </div>

                        <div className="flex ">
                            <button
                                className="absolute right-[20px] bottom-[-300px] flex px-7 py-2 rounded-md bg-purple text-white"
                            >
                                Save
                            </button></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstrumentsSettings;
