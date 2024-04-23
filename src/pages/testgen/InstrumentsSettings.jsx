import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Selector from "../../layouts/Selector";
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import Select from 'react-select'
import Search from "../searchcomponent/Search";
import ToggleButton from "../../layouts/rightnavbar/ToggleButton";
import { readRemoteFile } from 'react-papaparse';


const options = [
    { value: 'OpenSystem', label: 'OpenSystem' },
    { value: 'OpenSystem', label: 'OpenSystem' },
    { value: 'OpenSystem', label: 'OpenSystem' }
];

const InstrumentsSettings = ({ onClose }) => {

    const [interfaceOptions, setInterfaceOptions] = useState([]);
    const [channelOptions, setChannelOptions] = useState([]);
    const [selectedInterface, setSelectedInterface] = useState('');
    const [selectedChannel, setSelectedChannel] = useState('');
    const [selectedChannelData, setSelectedChannelData] = useState({});
    const [selectedRadioValue, setSelectedRadioValue] = useState('');

    useEffect(() => {
        // Load interface options
        readRemoteFile('/src/assets/Freq_MCS_BW/Interfaces.csv', {
            complete: (results) => {
                const interfaces = results.data.map((row) => ({ value: row[0], label: row[0] }));
    
                // Filter interfaces based on the selected radio button value
                const filteredInterfaces = interfaces.filter(option => {
                    if (selectedRadioValue === "option1") {
                        return option.label.endsWith("_2.4");
                    } else if (selectedRadioValue === "option2") {
                        return option.label.endsWith("_5");
                    } else if (selectedRadioValue === "option3") {
                        return option.label.endsWith("_6");
                    } else {
                        return true; // If no radio button is selected, show all interfaces
                    }
                }).map(option => ({
                    ...option,
                    label: option.label.replace(/_(2\.4|5|6|2)$/, '') // Remove "_2.4" or "_5" suffix from label
                }));
                // now remove radio button value from the dependency array
                setInterfaceOptions(filteredInterfaces);
                console.log(filteredInterfaces);
            },
        });
    }, [selectedRadioValue]); // Add selectedRadioValue as a dependency
    

    const handleRadioChange = (event) => {
        setSelectedRadioValue(event.target.value); // Update the selected radio button value
        setSelectedInterface(''); // Clear the selected interface
        setSelectedChannel(''); // Clear the selected channel
        setSelectedChannelData({}); // Clear the selected channel data
    };
    

  const handleInterfaceChange = (selectedOption) => {
    setSelectedInterface(selectedOption);
    // Load channel options based on selected interface
    readRemoteFile(`/src/assets/Freq_MCS_BW/${selectedOption.value}.csv`, {
      complete: (results) => {
        const channels = results.data.slice(1).map((row, index) => {
            // Check if row has the expected number of columns
            if (row.length >= 4) {
              return {
                value: row[0],
                label: row[0],
                bandwidth: row[1].split('/'),
                mcs: row[2].split('/'),
                guardInterval: row[3].split('/'),
              };
            } else {
              // Handle rows with incorrect format
              console.error(`Row ${index + 1} has incorrect format`);
              return null; // Or handle the error in another appropriate way
            }
          }).filter(Boolean); // Remove any null values from the array          

        setChannelOptions(channels);
            },
        });
    };
    


  const handleChannelChange = (selectedOption) => {
    setSelectedChannel(selectedOption);
    const channelData = selectedOption;
    setSelectedChannelData(channelData);
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
                <input type="radio" className="form-radio text-blue-500" name="radio" value="option1" onChange={handleRadioChange} />
                <span className="ml-2">2.4GHz</span>
            </label>
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-500" name="radio" value="option2" onChange={handleRadioChange} />
                <span className="ml-2">5GHz</span>
            </label>
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-500" name="radio" value="option3" onChange={handleRadioChange} />
                <span className="ml-2">6GHz</span>
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
                                {/* <Select options={filteredInterfaces} value={selectedInterface} onChange={handleInterfaceChange} placeholder="Select interface" className='text-black' /> */}
                                <Select options={interfaceOptions} value={selectedInterface} onChange={handleInterfaceChange} placeholder="Select interface" className='text-black' />
                                <label htmlFor="Net-Mask">NSS:</label>
                                <Select options={options} placeholder={"Enter nss"} className='text-black' />
                                <label htmlFor="password">Bandwidth:</label>
                                <Select
  options={selectedChannelData && selectedChannelData.bandwidth ? selectedChannelData.bandwidth.map(bw => ({ value: bw, label: bw })) : []}
  placeholder="Select bandwidth"
  className='text-black'
  isDisabled={!selectedChannelData || !selectedChannelData.bandwidth}
/>

                                <label htmlFor="password">Primary Channel:</label>
                                <Select
          options={channelOptions}
          value={selectedChannel}
          onChange={handleChannelChange}
          placeholder="Select channel"
          className='text-black'
          isDisabled={!selectedInterface}
        />
                                <label htmlFor="password">MCS:</label>
                                <Select
  options={selectedChannelData && selectedChannelData.mcs ? selectedChannelData.mcs.map(mcs => ({ value: mcs, label: mcs })) : []}
  placeholder="Select MCS"
  className='text-black'
  isDisabled={!selectedChannelData || !selectedChannelData.mcs}
/>
                                <label htmlFor="password">Guard interval:</label>
                                <Select
  options={selectedChannelData && selectedChannelData.guardInterval ? selectedChannelData.guardInterval.map(gi => ({ value: gi, label: gi })) : []}
  placeholder="Select guard interval"
  className='text-black'
  isDisabled={!selectedChannelData || !selectedChannelData.guardInterval}
/>
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
