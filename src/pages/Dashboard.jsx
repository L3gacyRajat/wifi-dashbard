import BarChartComponent from "../layouts/recharts/BarChartComponent";
import LineChartComponent from "../layouts/recharts/LineChartComponent";
import Search from "./searchcomponent/Search";
import { useEffect, useState } from "react";
import { useRef } from "react";
import ToggleButton from "../layouts/rightnavbar/ToggleButton";
import Detailsinfo from "../layouts/recharts/Detailsinfo";
import Rightnavbar from "../layouts/rightnavbar/Rightnavbar";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";


const Dashboard = () => {

  const [value, setValue] = useState("");
  // is rightnavbar open or not
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

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


  // details logs and info logs
  const [detailstoggleOn, setDetailsToggleOn] = useState(false);
  const [infotoggleOn, setInfoToggleOn] = useState(false);


  //initially the deailstoggleon and the infotogggleon should be false when side rightnav open or !open
  useEffect(() => {
    if (!open || open) {
      setDetailsToggleOn(false);
      setInfoToggleOn(false);
    }
  }, [open]);

  const detailhandleToggle = () => {
    setDetailsToggleOn(!detailstoggleOn);
  };

  const infohandleToggle = () => {
    setInfoToggleOn(!infotoggleOn);
  };

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
    {/* <div className="flex w-[80%] justify-between ">
      <div className="">Dashboard</div>
      // <button className="px-2 py-1 rounded-md  text-center text-white bg-purple ml-2  focus:outline-none focus-ring-2 focus-ring-offset-2 focus-ring-indigo-500">
      //     Combined Graph
      //   </button>
    </div> */}
      <div className="h-[90vh] flex mt-2">
        <div className={`flex-1 grid ${(!detailstoggleOn && !infotoggleOn) || !open ? 'grid-rows-2' : 'grid-rows-3'} gap-2`}>
          {/* First Row */}
          <div className="grid grid-cols-1">
            <div className="w-full bg-graphbg dark:bg-whit shadow-md rounded-md p-3">
              <LineChartComponent/>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            <div className="w-full bg-graphbg dark:bg-whit shadow-md rounded-md p-3">
              <BarChartComponent />
            </div>
            <div className="w-full bg-graphbg dark:bg-whit shadow-md rounded-md p-3">
              <BarChartComponent/>
            </div>
          </div>


          {/* third Row */}
          <Detailsinfo
            detailhandleToggle={detailhandleToggle}
            detailstoggleOn={detailstoggleOn}
            infohandleToggle={infohandleToggle}
            infotoggleOn={infotoggleOn}
            open={open}
          />
        </div>
        <Rightnavbar
          detailhandleToggle={detailhandleToggle}
          detailstoggleOn={detailstoggleOn}
          infohandleToggle={infohandleToggle}
          infotoggleOn={infotoggleOn}
          isTabletMid={isTabletMid}
          open={open}
          Nav_animation={Nav_animation}
          sidebarRef={sidebarRef}
          setOpen={setOpen}
        />
      </div>
    </>
  );
};

export default Dashboard;
