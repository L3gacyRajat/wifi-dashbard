import Selector from "../../layouts/Selector";
import { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";

const ManagementConfiguration = () => {
  const notifySuccess = () => toast.success("Configuration updated successfully!");
  const notifyError = () => toast.error("Failed to update configuration.");

  const [selectedOption, setSelectedOption] = useState("Server 01"); // Default server
  const [managementIP, setManagementIP] = useState("");
  const [trafficIP, setTrafficIP] = useState("");
  const [serverData, setServerData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/serverData')
      .then(response => response.json())
      .then(data => setServerData(data))
      .catch(error => {
        console.error('Failed to fetch server data:', error);
        notifyError();
      });
  }, []);

  useEffect(() => {
    if (serverData[selectedOption]) {
      const data = serverData[selectedOption];
      setManagementIP(data.managementIP);
      setTrafficIP(data.trafficIP);
    }
  }, [selectedOption, serverData]);

  const handleTrafficIPChange = (event) => {
    setTrafficIP(event.target.value);
  };

  const handleConfigClick = () => {
    const updatedData = { ...serverData, [selectedOption]: { ...serverData[selectedOption], trafficIP: trafficIP }};
    fetch('http://localhost:5000/updateServerData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      notifySuccess();
    })
    .catch(error => {
      console.error('Error:', error);
      notifyError();
    });
  };

  return (
    <>
      <div className="p-2 font-semibold">Management Configuration</div>
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
            Update Configuration
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
