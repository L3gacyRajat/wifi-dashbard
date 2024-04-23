import { useState, useEffect } from "react";
import Selector from "../../layouts/Selector";
import { Bounce, ToastContainer, toast } from "react-toastify";
import axios from "axios"; // Import axios for making HTTP requests

const apidOptions = ["AP_01", "AP_02", "AP_03"];
const bandOptions = ["3G", "4G", "5G"];
const ssidOptions = ["SSID_3G", "SSID_4G", "SSID_5G"];

const DUTConfiguration = () => {
  const notify = () => toast.success("Configuration Done");
  const [selectedOption, setSelectedOption] = useState(null);
  const [numberOfDUTs, setNumberOfDUTs] = useState(0);
  const [dutNames, setDutNames] = useState([]);
  const [isCreated, setIsCreated] = useState(false);
  const [ap, setAP] = useState("");
  const [apid, setAPID] = useState("");
  const [band, setBand] = useState("");
  const [ssid, setSSID] = useState("");
  const [pass, setPass] = useState("");
  const [security, setSecurity] = useState("");

  useEffect(() => {
    // Fetch DUT names from the server when the component mounts
    axios.get("http://localhost:5000/configurations")
      .then(response => {
        setDutNames(Object.keys(response.data));
      })
      .catch(error => {
        console.error("Error fetching DUT names:", error);
      });
  }, []);

  // Function to save configuration data to the server
  const saveConfigurationData = () => {
    const dutData = {
      dutName: selectedOption,
      configuration: {
        ap,
        apid,
        band,
        ssid,
        pass,
        security
      }
    };
    axios.post("http://localhost:5000/configurations", dutData)
      .then(() => {
        notify();
      })
      .catch(error => {
        console.error("Error saving configuration:", error);
        notify.Error("Failed to save configuration. Please try again later.");
      });
  };
  

  // Function to load configuration data from the server
  const loadConfigurationData = (dutName) => {
    axios.get(`http://localhost:5000/configurations/${dutName}`)
      .then(response => {
        const configuration = response.data;
        setAP(configuration.ap || "");
        setAPID(configuration.apid || "");
        setBand(configuration.band || "");
        setSSID(configuration.ssid || "");
        setPass(configuration.pass || "");
        setSecurity(configuration.security || "");
      })
      .catch(error => {
        console.error(`Error loading configuration for ${dutName}:`, error);
        notify.Error("Failed to load configuration. Please try again later.");
        // Optionally, you can handle error cases here, such as displaying an error message to the user
      });
  };
  

  const handleCreateDUTs = () => {
    if (numberOfDUTs > 0) {
      const newDutNames = Array.from(
        { length: numberOfDUTs },
        (_, index) => `DUT_${index + 1}`
      );
      setDutNames(newDutNames);
      setIsCreated(true);
    }
  };

  const handleSelectDUT = (dutName) => {
    setSelectedOption(dutName);
    loadConfigurationData(dutName); // Load configuration data when DUT is selected
  };

  useEffect(() => {
    // Load configuration data for the initially selected DUT
    if (selectedOption) {
      loadConfigurationData(selectedOption);
    }
  }, [selectedOption]);

  return (
    <>
      <div className="p-3 font-semibold">DUT Configuration</div>
      <div className="ml-64 flex gap-3">
        <Selector
          data={dutNames}
          onSelect={handleSelectDUT}
          dropdownname="DUT"
          width="w-72"
          
        />
        <div>
          <input
            type="number"
            id="dut"
            name="dut"
            placeholder="Enter no. of DUTs"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
            value={numberOfDUTs}
            onChange={(e) => setNumberOfDUTs(parseInt(e.target.value))}
          />
        </div>
        <div>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-purple text-white"
            onClick={handleCreateDUTs}
          >
            Create
          </button>
        </div>
      </div>
      {(isCreated) && <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-2 gap-1">
          <label htmlFor="ap">AP:</label>
          <input
            type="number"
            id="ap"
            name="ap"
            min="18"
            max="100"
            placeholder="Enter AP"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
            value={ap}
            onChange={(e) => setAP(e.target.value)}
          />
          <label htmlFor="apid">AP ID:</label>
          <Selector
            data={apidOptions}
            onSelect={setAPID}
            dropdownname="AP ID"
            width="w-72"
            value={apid}
          />
          <label htmlFor="band">Band:</label>
          <Selector
            data={bandOptions}
            onSelect={setBand}
            dropdownname="Band"
            width="w-72"
            value={band}
          />
          <label htmlFor="ssid">SSID:</label>
          <Selector
            data={ssidOptions}
            onSelect={setSSID}
            dropdownname="SSID"
            width="w-72"
            value={ssid}
          />
          <label htmlFor="ap">Password</label>
          <input
            type="text"
            id="pass"
            name="pass"
            placeholder="Enter Pass"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <label htmlFor="ap">Security</label>
          <input
            type="text"
            id="Security"
            name="Security"
            placeholder="Enter Security"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
            value={security}
            onChange={(e) => setSecurity(e.target.value)}
          />
          <div className="flex gap-4 py-8">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-purple text-white"
              onClick={saveConfigurationData} // Save configuration data on button click
            >
              Save Configuration
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
      </div>}
    </>
  );
};

export default DUTConfiguration;
