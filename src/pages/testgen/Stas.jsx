import React from 'react';
import StaInput from './StaInput';
import Select from 'react-select'
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from './Dropdown'




  //sta data
  const stas = [

    {
      id: 4,
      title: "Band",
      items: ['5', '6', '5', '5', '5']
    }
    ,
    {
      id: 5,
      title: "Bandwidth",
      items: ['80', '80', '80', '80', '80']
    }
    ,
    {
      id: 6,
      title: "Standard",
      items: ['11ax', '11ax', '11ax', '11ax', '11ax']
    }
    ,
    {
      id: 7,
      title: "Channel",
      items: ['11', '11', '11', '11', '11']
    }
    ,
    {
      id: 7,
      title: "Nss",
      items: ['2', '2', '2', '2', '2']
    }
    ,
    {
      id: 8,
      title: "Test",
      items: ['120', '120', '120', '120', '120']
    },
    {
      id: 9,
      title: "Test type",
      items: ['Tcp', 'Tcp', 'Tcp', 'Tcp', 'Tcp']
    },
    {
      id: 10,
      title: "Guard",
      items: ['800', '800', '800', '800', '800']
    },
    {
      id: 11,
      title: "Attenuator",
      items: ['Atten_01', 'Atten_01', 'Atten_01', 'Atten_01', 'Atten_01']
    }
  ];


const Stas =(props)=>{
    return(
        <>
       <div className="p-2">
          <div className='flex justify-between items-center text-purple-500 bg-[#0B1739] border-[#343B4F] border rounded-md m-2 p-2'>
            <div className="flex gap-3">
              <div className='text-1xl flex flex-col gap-4 '>
                <h3>STA</h3>
                <h3>{props.name}</h3>
              </div>
              <div className='text-1xl flex flex-col gap-2 '>
                <h3>Management</h3>
                <input
                  type="text"
                  id="ip-address"
                  name="ip_address"
                  placeholder="Enter ip"
                  className="placeholder:text-textcolor p-2 outline-none bg-background-color w-[80px] "
                />
              </div>
              <div className='text-1xl flex flex-col  gap-2 '>
                <h3>Traffic</h3>
                <input
                  type="text"
                  id="ip-address"
                  name="ip_address"
                  placeholder="Enter ip"
                  className="placeholder:text-textcolor p-2 outline-none bg-background-color w-[80px] "
                />
              </div>

              {stas.map((item) => (
                <Dropdown key={item.id} title={item.title} items={item.items} />
              ))}
            </div>
          </div>
        </div>
        </>
    )
}
export default Stas