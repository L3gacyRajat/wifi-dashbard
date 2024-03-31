import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from "prop-types";
import { uuid } from './uuid';
import classNames from 'classnames';
import { RiArrowDropDownLine } from "react-icons/ri";

const Search = ({ options, value, onChange }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const id = uuid();

  useEffect(() => {
    function handleOutsideClick(e) {
      if (!e.target.closest(`#Toggle-${id}`) && !e.target.closest(`#select-${id}`))
        setOpen(false);
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [id]);

  const filteredOptions = useMemo(() => {
    return options.filter(option => option.toLowerCase().includes(search.toLowerCase()));
  }, [options, search]);

  const handleChange = (newValue) => {
    onChange(newValue);
    setSearch(newValue);
    setOpen(false);
  };

  useMemo(() => setSearch(value), [value]);

  return (
    <div id={`select-${id}`} className='relative flex flex-col items-center justify-center bg-[#0F1535] dark:bg-white px-2 py-1 rounded-md mb-2 gap-4 pl-5  group cursor-pointer  shadow-lg m-auto text-[11px] border border-lighttextcolor   h-8 '>
      <div className='flex items-center justify-between divide-x divide-neutral-200 gap-1 rounded-md overflow-hidden'>
        <input
          className='outline-none px-2 w-28 bg-transparent text-white dark:text-lighttextcolor'
          placeholder='search..'
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setOpen(true)} />
        <span className='relative p-4 cursor-pointer'
          onClick={() => setOpen(prevOpen => !prevOpen)}
          id={`Toggle-${id}`}>
          <span className={classNames('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] border-1-transparent border-r-transparent border-b-0 border-t-neutral-900 transition-[transform]', open ? "rotate-180 text-[#0075FF]" : "rotate-0 text-[#0075FF]")}></span>
        </span>
      </div>
      {open && (
        <div id="options"
          className={classNames(
            'absolute  z-50 top-11 border-white-100 w-full rounded-md transition-all overflow-auto px-2 py-1 bg-[#0F1535] dark:bg-white  mb-2 gap-4 mr-2 ',
            { 'max-h-40 border-0': open, 'max-h-0 border': !open }
          )}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div key={index} className='px-4 py-1 cursor-pointer text-white dark:text-lighttextcolor  border-lighttextcolor' onClick={() => handleChange(option)}>
                {option}
              </div>
            ))
          ) : (
            <div className='px-3 py-1 cursor-pointer text-white hover:bg-neutral-300'>
              No matches found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Search.defaultProps = {
  options: [],
  value: "",
  onChange: () => { }
};

export default Search;
