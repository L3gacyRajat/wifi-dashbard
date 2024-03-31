import React from 'react';
import { FaWifi } from "react-icons/fa6";
import connectdata from './connectdata'; 

const Connect = () => {
  return (
    <div className='py-5'>
      {connectdata.map((value) => (
        <div className='text-textcolor dark:text-black text-1xl px-3 grid grid-cols-2 py-1' key={value.id}> 
          <FaWifi />
          <h>{value.connectionName}</h>
        </div>
      ))}
    </div>
  );
};

export default Connect;
