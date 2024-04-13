import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Dropdown from './Dropdown';
import Stas from './Stas';

const GenericInstrumentSettings = ({ sta }) => {
  const [selectedStas, setSelectedStas] = useState([]);
  const [staCount, setStaCount] = useState(1);
  const [checkedStas, setCheckedStas] = useState([]);

  // Update checked STAs when selected STAs change
  useEffect(() => {
    const selectedStaValues = selectedStas.map(option => option.value);
    setCheckedStas(checkedStas.filter(sta => selectedStaValues.includes(sta)));
  }, [selectedStas]);

  const handleStaClick = (sta) => {
    setSelectedStas([...selectedStas, sta]);
  };

  const handleChange = (selectedOptions) => {
    setSelectedStas(selectedOptions);
  };

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCheckedStas([...checkedStas, value]);
    } else {
      setCheckedStas(checkedStas.filter((sta) => sta !== value));
    }
  };

  const handleCheckAll = (event) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedStas(options); // Select all options
      setCheckedStas(options.map(option => option.value)); // Check all options
    } else {
      setSelectedStas([]); // Deselect all options
      setCheckedStas([]); // Uncheck all options
    }
    
  };

  const options = [
    { value: 'STA_01', label: 'STA_01' },
    { value: 'STA_02', label: 'STA_02' },
    { value: 'STA_03', label: 'STA_03' }
  ];

  //dropdowns data
  const dropdown = [
    {
      id: 1,
      title: "Band",
      items: ['5', '5', '5', '5', '5']
    },
    {
      id: 2,
      title: "Standr",
      items: ['11ax', '11ax', '11ax', '11ax', '11ax']
    }
    ,
    {
      id: 3,
      title: "Bandwidth",
      items: ['80', '80', '80', '80', '80']
    }
    ,
    {
      id: 4,
      title: "Nss",
      items: ['2', '2', '2', '2', '2']
    }
    ,
    {
      id: 5,
      title: "Gaurd",
      items: ['800', '800', '800', '800', '800']
    }
    ,
    {
      id: 6,
      title: "Test",
      items: ['Tcp', 'Tcp', 'Tcp', 'Tcp', 'Tcp']
    }
    ,
    {
      id: 7,
      title: "Test",
      items: ['120', '120', '120', '120', '120']
    }
  ];
  
  return (
    <div className="flex flex-col items-center justify-center mt-5 ">
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-semibold ml-6 flex items-center justify-center '>Select STA's:</div>
        <Select options={options} value={selectedStas} onChange={handleChange} isMulti={true} placeholder={"Select STA's..."} className='text-black' />
      </div>
      <div className="p-2">
        <div className='flex justify-between items-center text-purple-500 bg-[#0B1739] border-[#343B4F] border rounded-md m-2 p-2'>
          <div className="flex gap-3">
            {dropdown.map((item) => (
              <Dropdown key={item.id} title={item.title} items={item.items} />
            ))}
          </div>
        </div>
      </div>

      <div className='w-full h-[200px] bg-white border-black flex gap-3 rounded-md text-black p-5 position-relative' >
        {/* checkall */}
        <div style={{ position: 'absolute', top: '320px', right: '60px' }}>
          <input
            type="checkbox"
            id="checkAll"
            onChange={handleCheckAll}
            checked={selectedStas.length === options.length && options.length > 0}
            className="form-checkbox h-4 w-4 bg-white"
          />
          <label htmlFor="checkAll">Check All</label>
        </div>
        {selectedStas.map(option => (
          <div key={option.value}>
            <input
              type="checkbox"
              id={option.value}
              value={option.value}
              onChange={handleCheckboxChange}
              checked={checkedStas.includes(option.value)}
              className="form-checkbox h-4 w-4 bg-white"
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>

      {/* Display selected STAs */}
      {checkedStas.map((staName, index) => (
        <Stas key={index} name={staName} />
      ))}
    </div>
  );
};

export default GenericInstrumentSettings;
