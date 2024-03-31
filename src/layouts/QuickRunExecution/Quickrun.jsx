import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Main from './Main';
import { IoAdd, IoSave } from "react-icons/io5";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const Quickrun = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [executions, setExecutions] = useState([<Main key={1} />]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const addNewExecution = () => {
    setExecutions(prevExecutions => [...prevExecutions, <Main key={prevExecutions.length} onDelete={() => deleteTestcase(prevExecutions.length)} />]);
  }

  const deleteTestcase = (index) => {
    console.log(index);
    setExecutions(prevExecutions => prevExecutions.filter((_, i) => i !== index));
  }

  const notify = () => toast("💾 Saved Successfully!");

  return (
    <>
      <div className='py-5'>
          <div className=' text-base font-medium m-3 text-purple'>Quick Run Execution</div>
              <div className='flex justify-end items-center my-4 mr-2 px-2 text-purple-500'>
                <div className='flex space-x-4 justify-end'>
                  <button onClick={addNewExecution} className='flex items-center text-white px-3 py-2 font-semibold border border-purple rounded-md'>
                    <IoAdd className='mr-2 text-lg'/> 
                    Add New
                  </button>
                  <button onClick={notify} className='flex items-center bg-purple text-white px-4 font-semibold py-2 border border-purple rounded-md'>
                    <IoSave className='mr-2 text-lg'/>
                    Save
                  </button>
                  <ToastContainer theme='dark' transition={Bounce} autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
                </div>
              </div>
              {executions.map((execution, index) => (
                <React.Fragment key={index}>
                  {execution}
                </React.Fragment>
              ))}
            </div>
    </>
  );
}

export default Quickrun;
