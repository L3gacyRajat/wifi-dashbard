import { useEffect, useState } from "react";
import { useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query"; // Import useMediaQuery
import { useLocation } from "react-router-dom";
import Sideebar from "./Sideebar";
import "./SideBarItem.scss";

const Wifi = () => {
  const depthLevel = 0;
  const [value, setValue] = useState("");
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  // const dropdown = [
  //   {
  //     id: 1,
  //     title: "Band",
  //     items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']

  //   },
  //   {
  //     id: 2,
  //     title: "Interface",
  //     items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   },
  //   {
  //     id: 3,
  //     title: "Channel",
  //     items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   }
  //   ,
  //   {
  //     id: 4,
  //     title: "Bandwidth",
  //     items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   }
  //   ,
  //   {
  //     id: 5,
  //     title: "MCS",items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   }
  //   ,
  //   {
  //     id: 6,
  //     title: "VMM priority",items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   }
  //   ,
  //   {
  //     id: 7,
  //     title: "Packet Gap",items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   }
  //   ,
  //   {
  //     id: 8,
  //     title: "Payload Size",items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   }
  //   ,
  //   {
  //     id: 9,
  //     title: "Attenuation",items: ['DUT_1', 'DUT_2', 'DUT_3', 'DUT_4', 'DUT_5'],
  //     DUT_1 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_2 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_3 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_4 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05'],
  //     DUT_5 :  ['DUT_01', 'DUT_02', 'DUT_03', 'DUT_04', 'DUT_05']
  //   }
  // ];

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <>
      <div className="bg-graphbg w-full h-[90vh] bg-graphbg dark:bg-white shadow-md rounded-md p-3  gap-2 mr-4  ">
        <div className=" text-base font-medium m-4 px-8 text-purple">Wifi</div>
        <div className="flex items-center flex-col relative top-[17%] check3 ">
          <Sideebar />
          <div className="flex gap-4 check2">
            <button className="px-4 py-2 w-32 bg-purple text-white rounded-md mt-5">
              Start/update
            </button>
            <button className="px-4 py-2 w-32 bg-purple text-white rounded-md mt-5">
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wifi;
