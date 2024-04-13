import Selector from "../../layouts/Selector";
import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";
import serverData from "./serverData.json";

const ManagementConfiguration = () => {
  const notify = () => toast.success("Configuration Done");

  const [selectedOption, setSelectedOption] = useState("Server 01"); // Initialize with default server
  const [managementIP, setManagementIP] = useState("");
  const [trafficIP, setTrafficIP] = useState("");

  useEffect(() => {
    // Load data from JSON when selected server changes
    const data = serverData[selectedOption];
    setManagementIP(data.managementIP);
    setTrafficIP(data.trafficIP);
  }, [selectedOption]);

  const handleTrafficIPChange = (event) => {
    setTrafficIP(event.target.value);
  };

  const handleConfigClick = () => {
    // Update JSON data with new traffic IP
    const updatedData = { ...serverData };
    updatedData[selectedOption].trafficIP = trafficIP;
    // Send updated data to backend
    fetch('/updateServerData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        notify();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <>
      <div className="p-2 font-semibold">ManagementConfiguration</div>
      <div className="flex flex-col justify-center items-center p-10">
        <div className="grid grid-cols-2 gap-1">
          <div>Server:</div>
          <Selector
            data={Object.keys(serverData)}
            onSelect={setSelectedOption}
            dropdownname="Server"
            width="w-72"
            selected={selectedOption}
          />
          <label htmlFor="management-ip">Management IP:</label>
          <p className="px-2">{managementIP}</p>
          <label htmlFor="traffic-ip">Traffic IP:</label>
          <input
            type="text"
            id="traffic-ip"
            name="trafficIP"
            value={trafficIP} // Make sure trafficIP is treated as a string
            onChange={handleTrafficIPChange}
            placeholder="Enter IP Address (eg: 11.25.0.255)"
            className="p-2 outline-none bg-background-color"
          />
          <button onClick={handleConfigClick} className="px-4 py-2 w-32 bg-purple text-white rounded-md mt-5">
            Configuration
          </button>
          <ToastContainer theme='dark' transition={Bounce} autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
        </div>
      </div>
    </>
  );
};

export default ManagementConfiguration;
