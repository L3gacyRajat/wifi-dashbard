import React from "react";
import SidebarItem from "./SidebarItem";
import MENU from "./constants/menu.json";
import "./SideBarItem.scss";

const Sideebar = () => {
  return (
    <div className="w-[350px] text-[#000] dark:text-black">
      {MENU.map((items, index) => (
        <SidebarItem key={index} items={items} />
      ))}
      <div className="grid grid-cols-2 text-white dark:text-black check1">
        <div className="flex items-center py-2 check">Packet Gap</div>
        <div className="flex items-center  py-1">
          <input
            type="text"
            id="packetgap"
            name="packetgap"
            placeholder="Enter Packet gap"
            className="p-2 outline-none bg-background-color dark:bg-[#F4F7FE] "
          />
        </div>
        <div className="flex items-center py-2 check">Packet Size</div>
        <div className="flex items-center  py-1">
          <input
            type="text"
            id="packetsize"
            name="packetsize"
            placeholder="Enter Packet size"
            className="p-2 outline-none bg-background-color dark:bg-[#F4F7FE]"
          />
        </div>
        <div className="flex items-center py-2 check">Attenuation</div>
        <div className="flex items-center  py-1">
          <input
            type="text"
            id="attenuationp"
            name="attenuation"
            placeholder="Enter Attenuation"
            className="p-2 outline-none bg-background-color dark:bg-[#F4F7FE]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sideebar;
