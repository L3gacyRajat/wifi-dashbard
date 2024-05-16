import React, { useState } from "react";
import "./SideBarItem.scss";

const SidebarItem = ({ items }) => {
  const [open, setOpen] = useState(false); // Initialize open state as false

  const handleParentClick = () => {
    // Toggle the state of the parent
    setOpen(!open);
  };

  return (
    <div className="w-full  py-[0.5px] relative">
      <div className="grid grid-cols-2 gap-3">
        <div className="text-white flex items-center dark:text-black check">
          {items.main}
        </div>
        <div
          onClick={handleParentClick} // Use custom click handler for parent
          className="flex justify-between items-center px-2 py-2 text-white dark:text-black"
        >
          <span>
            <span>{items.icon}</span> {items.title}
          </span>
          <span
            className={
              open
                ? "rotate-180 cursor-pointer transition-all"
                : "cursor-pointer transition-all"
            }
          >
            🔻
          </span>
        </div>
      </div>
      <div
        className={
          open
            ? "absolute h-auto pl-2 left-[270px] w-[250px] bg-graphbg text-white bg-navbarbg rounded-md z-50"
            : "h-0 overflow-hidden"
        }
      >
        {items.childrens &&
          items.childrens.map((child, index) => (
            <ChildSidebarItem key={index} items={child} parentOpen={open} />
          ))}
      </div>
    </div>
  );
};

const ChildSidebarItem = ({ items, parentOpen }) => {
  const [open, setOpen] = useState(false); // Initialize open state as false

  const handleChildClick = () => {
    // Toggle the state of the child
    setOpen(!open);
  };

  // If parent closes, close the child as well
  React.useEffect(() => {
    if (!parentOpen) {
      setOpen(false);
    }
  }, [parentOpen]);

  return (
    <div className="pl-2">
      <div onClick={handleChildClick} className="cursor-pointer flex py-2">
        <span>{items.icon}</span> {items.title}
      </div>
      {open && items.childrens && (
        <div className="pl-2 py-2 max-h-[53vh] overflow-x-auto">
          {items.childrens.map((child, index) => (
            <ChildSidebarItem key={index} items={child} parentOpen={open} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
