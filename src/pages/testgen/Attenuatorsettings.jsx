import React, { useState, useEffect } from "react";
import AttenuatorInput from "./AttenuatorInput";
import Select from 'react-select';
import { readRemoteFile } from 'react-papaparse';

const AttenuatorSettings = () => {
  const [selectedAtten, setSelectedAtten] = useState([]);
  const [options, setOptions] = useState([]);
  const [attenCount, setAttenCount] = useState(1);

  const handleChange = (selectedOptions) => {
    setSelectedAtten(selectedOptions);
  };

  useEffect(() => {
    const loadOptions = () => {
      readRemoteFile('/src/assets/Attenuator_status.csv', {
        complete: (results) => {
          const filteredAtten = results.data.slice(0)
            .map((row, index) => ({
              value: `Atten_${index + 1}`,
              label: row['Attenuator Name']
            }));
          setOptions(filteredAtten);
        },
        header: true
      });
    };

    loadOptions();
    const savedSelectedAtten = localStorage.getItem("selectedAtten");
    if (savedSelectedAtten) {
      setSelectedAtten(JSON.parse(savedSelectedAtten));
    }
  }, [options]);

  useEffect(() => {
    localStorage.setItem("selectedAtten", JSON.stringify(selectedAtten));
  }, [selectedAtten]);

  const deleteAtten = (attenToDelete) => {
    const updatedAtten = selectedAtten.filter(atten => atten !== attenToDelete);
    setSelectedAtten(updatedAtten);

    // No need to update local storage here, it will be updated in the useEffect

    const lastAtten = updatedAtten[updatedAtten.length - 1];
    if (lastAtten) {
      const count = parseInt(lastAtten.value.split("_")[1]);
      setAttenCount(count);
    } else {
      setAttenCount(0);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-semibold ml-6 flex items-center justify-center '>Select Attenuators:</div>
        <Select
          options={options}
          value={selectedAtten}
          onChange={handleChange}
          isMulti={true}
          placeholder={"Select Atten..."}
          className='text-black'
        />
      </div>
      {selectedAtten.map((atten, index) => (
        <div key={index} className="flex items-center">
          <AttenuatorInput atten={atten} onDelete={() => deleteAtten(atten)} />
        </div>
      ))}
    </div>
  );
};

export default AttenuatorSettings;
