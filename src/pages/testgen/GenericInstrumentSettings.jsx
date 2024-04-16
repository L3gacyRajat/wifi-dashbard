import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Dropdown from './Dropdown';
import Stas from './Stas';
import { readRemoteFile } from 'react-papaparse';

const GenericInstrumentSettings = ({ sta }) => {
  const [selectedStas, setSelectedStas] = useState([]);
  const [options, setOptions] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedStas(selectedOptions);
  };


  useEffect(() => {
    const loadOptions = () => {
      readRemoteFile('/src/assets/instrument_status.csv', {
        complete: (results) => {
          const filteredSta = results.data.slice(0)
            .map((row, index) => ({
              value: `Atten_${index + 1}`,
              label: row['Instrument Name']
            }));
          setOptions(filteredSta);
        },
        header: true
      });
    };

    loadOptions();
    const savedSelectedSta = localStorage.getItem("selectedSta");
    if (savedSelectedSta) {
      setSelectedStas(JSON.parse(savedSelectedSta));
    }
  }, [options]);

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
    },
    {
      id: 3,
      title: "Bandwidth",
      items: ['80', '80', '80', '80', '80']
    },
    {
      id: 4,
      title: "Channel",
      items: ['2', '2', '2', '2', '2']
    },
    {
      id: 5,
      title: "Nss",
      items: ['2', '2', '2', '2', '2']
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-5 ">
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-semibold ml-6 flex items-center justify-center '>Select Instruments</div>
        <Select options={options} value={selectedStas} onChange={handleChange} isMulti={true} placeholder={"Select Instruments"} className='text-black' />
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
        <div style={{ position: 'absolute', top: '320px', right: '60px'}}>
          <input
            type="checkbox"
            id="checkAll"
            checked={selectedStas.length === options.length && options.length > 0}
            className="form-checkbox h-4 w-4 bg-white"
            disabled={true}
          />
          <label htmlFor="checkAll">Check All</label>
        </div>
        {selectedStas.map(option => (
          <div key={option.value}>
            <input
              type="checkbox"
              id={option.value}
              value={option.value}
              className="form-checkbox h-4 w-4 bg-white"
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>

      {/* Display selected STAs */}
      {selectedStas.map((sta, index) => (
        <Stas key={index} name={sta.label} />
      ))}
    </div>
  );
};

export default GenericInstrumentSettings;