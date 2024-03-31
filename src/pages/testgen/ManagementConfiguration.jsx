import Selector from "../../layouts/Selector";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from "react-toastify";

const mdata = ["Server 01", "Server 02", "Server 03"];

const ManagementConfiguration = () => {
  const notify = () => toast.success("Configuration Done");
  const [selectedOption, setSelectedOption] = useState(
    null
  );
  return (
    <>
      <div className="p-2 font-semibold">ManagementConfiguration</div>
      <div className="flex flex-col justify-center items-center p-10">
        <div className="grid grid-cols-2 gap-1">
          <div>server:</div>
          <Selector
            data={mdata}
            onSelect={setSelectedOption}
            dropdownname="Server"
            width="w-72"
          />
          <label for="ip-address">Management IP:</label>
          <input
            type="text"
            id="ip-address"
            name="ip_address"
            placeholder="Enter IP Address(eg:11.25.0.255)"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
          />
          <label for="ip-address">Traffic IP:</label>
          <div className="flex flex-col">
          <input
            type="text"
            id="ip-address"
            name="ip_address"
            placeholder="Enter IP Address(eg:11.25.0.255)"
            className="placeholder:text-textcolor p-2 outline-none bg-background-color"
          />
          <button onClick={notify} className="px-4 py-2 w-32 bg-purple text-white rounded-md mt-5">
            Config
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
      </div>
    </>
  );
};

export default ManagementConfiguration;
