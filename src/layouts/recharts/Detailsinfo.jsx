import ToggleButton from "../rightnavbar/ToggleButton";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import ToggleComponent from "../rightnavbar/ToggleComponent";

const Detailsinfo = ({ detailhandleToggle, detailstoggleOn, infohandleToggle, infotoggleOn, open }) => {

    return (
        <>
            <div>
                {
                    !open && (
                        <>
                            <div className="flex gap-2 px-6">
                                <ToggleComponent detailhandleToggle={detailhandleToggle} detailstoggleOn={detailstoggleOn} infohandleToggle={infohandleToggle} infotoggleOn={infotoggleOn} />
                            </div>
                        </>
                    )
                }

                <div className={`grid ${(!detailstoggleOn && !infotoggleOn) ? 'hidden' :
                    (detailstoggleOn && infotoggleOn) ? 'grid-cols-2' :
                        (detailstoggleOn || infotoggleOn) ? 'grid-cols-1' :
                            'grid-cols-1'
                    } gap-2 h-[220px]`}>
                    {!infotoggleOn && (
                        <div className="w-full bg-graphbg dark:bg-whit shadow-md rounded-md p-5 px-10">
                            detail logs
                        </div>
                    )}
                    {!detailstoggleOn && (
                        <div className="w-full bg-graphbg dark:bg-whit shadow-md rounded-md p-5 px-10">
                            Info logs
                        </div>
                    )}
                    {detailstoggleOn && infotoggleOn && (

                        <>
                            <div className="w-full bg-graphbg dark:bg-whit shadow-md rounded-md p-5 px-10">
                                Detail logs
                            </div>
                            <div className="w-full bg-graphbg dark:bg-whit shadow-md rounded-md p-5 px-10">
                                Info logs
                            </div>
                        </>
                    )}

                </div>
            </div>
        </>
    );
};

export default Detailsinfo;
