import React, { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ data, onSelect, dropdownname, width, enableSearch, position, selected }) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);

  // Update selectedOption when the selected prop changes
  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]);

  return (
    <div className={`font-medium text-textcolor ${width}`}>
      <div
        onClick={() => setOpen(!open)}
        className={`w-full p-2 flex items-center justify-between rounded-md border border-textcolor ${selectedOption ? "text-textcolor" : ""}`}
      >
        {selectedOption
          ? selectedOption?.length > 25
            ? `${selectedOption.substring(0, 25)}...`
            : selectedOption
          : dropdownname}
        <BiChevronDown
          size={20}
          className={`${open ? "rotate-180 cursor-pointer" : "cursor-pointer"}`}
        />
      </div>
      <ul
        className={`bg-dropdown-bg bg-[#0B1739] ${position} mt-2 overflow-y-auto rounded-md shadow-sm ${open ? "max-h-60" : "max-h-0"}`}
      >
        {enableSearch && (
          <div className="flex items-center px-2 sticky top-0 bg-[#0B1739] border-b border-textcolor">
            <AiOutlineSearch size={18} className="text-textcolor" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search"
              className="placeholder:text-textcolor p-2 outline-none bg-[#0B1739]"
            />
          </div>
        )}
        {data.filter((value) =>
    enableSearch ? value.toLowerCase().includes(inputValue) : true
  )
  .map((value) => (
    <li
      key={value}
      className={`p-2 text-1xl hover:bg-lightpurple rounded-md hover:border-l-4 hover:border-purple cursor-pointer ${
        String(value).toLowerCase() === String(selectedOption).toLowerCase()
          ? "text-white"
          : ""
      }`}
      onClick={() => {
        if (String(value).toLowerCase() !== String(selectedOption).toLowerCase()) {
          onSelect(value);
          setSelectedOption(value);
          setOpen(false);
          if (enableSearch) setInputValue("");
        }
      }}
    >
      {value}
    </li>
  ))}

      </ul>
    </div>
  );
};

export default Selector;
