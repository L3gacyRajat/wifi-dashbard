import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Connect from './connection/Connect'
import { MdSettingsInputAntenna } from "react-icons/md";

import ToggleButton from "./ToggleButton";
import AttenuationComponent from "./AttenuationComponent";


const Rightnavbar = ({ detailhandleToggle, detailstoggleOn, infohandleToggle, infotoggleOn, isTabletMid, open, Nav_animation, sidebarRef, setOpen }) => {

    const [showRealWifi, setShowRealWifi] = useState(false);

  useEffect(() => {
    // Set showRealWifi to true after a delay to simulate animation
    const timer = setTimeout(() => {
      setShowRealWifi(true);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

    // let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    // const [open, setOpen] = useState(isTabletMid ? false : true);
    // const sidebarRef = useRef();
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     if (isTabletMid) {
    //         setOpen(false);
    //     } else {
    //         setOpen(true);
    //     }
    // }, [isTabletMid]);

    // useEffect(() => {
    //     isTabletMid && setOpen(false);
    // }, [pathname]);

    // const Nav_animation = isTabletMid
    //     ? {
    //         open: {
    //             x: 0,
    //             width: "16rem",
    //             transition: {
    //                 damping: 40,
    //             },
    //         },
    //         closed: {
    //             x: -250,
    //             width: 0,
    //             transition: {
    //                 damping: 40,
    //                 delay: 0.15,
    //             },
    //         },
    //     }
    //     : {
    //         open: {
    //             width: "16rem",
    //             transition: {
    //                 damping: 40,
    //             },
    //         },
    //         closed: {
    //             width: "4rem",
    //             transition: {
    //                 damping: 40,
    //             },
    //         },
    //     };

    return (
        <div>
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
                    } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className=" bg-navbarbg text-textcolor shadow-xl z-[999] max-w-[15rem]  w-[15rem] 
            overflow-hidden md:relative fixed
         h-full dark:bg-lightbackground dark:text-black "
            >
                <div className="relative h-full max-w-[14rem] m-[auto]">
                    <div>
                        <div className="flex items-center gap-1 pt-3 pb-2 overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 " >
                            {
                                open ? "" : <img src={'white wifi.png'} className='w-7 ml-5 rounded-lg' alt="default wifi"/>
                            }

                            <div className="text-base whitespace-pre text-xxl font-semibold px-7 ">Instruments</div>
                        </div>
                        <div className="flex flex-col  h-full px-5">
                            {open ? <Connect /> : ""}
                            <hr></hr>
                        </div>
                        <div className="flex flex-col h-full px-5 items-center py-6 overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 " >
                            {open ? <AttenuationComponent/> : ''}
                        </div>
                    </div>

                    {open && (
                        <div className=" px-5 bottom-20">
                            <div className="flex gap-2 items-center">
                                <ToggleButton onToggle={detailhandleToggle} isOn={detailstoggleOn} />
                                <h>Detailed logs</h>
                            </div>
                            <div className="flex gap-2 items-center">
                                <ToggleButton onToggle={infohandleToggle} isOn={infotoggleOn} />
                                <h>Info logs</h>
                            </div>
                        </div>
                    )}

                </div>


                <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                x: -200,
                                y: 0,
                                rotate: 180,
                            }
                            : {
                                x: 0,
                                y: 0,
                                rotate: 0,
                            }
                    }
                    transition={{ duration: 0 }}
                    className="absolute w-fit h-fit md:block z-50 hidden right-0 ml-2 bottom-3 cursor-pointer bg-purple p-2 rounded-full"
                >
                    <IoIosArrowBack size={14} className="text-white" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Rightnavbar;
