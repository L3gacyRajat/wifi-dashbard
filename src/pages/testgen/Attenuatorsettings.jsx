import React, { useState, useEffect } from "react";
import AttenuatorInput from "./AttenuatorInput";
import Select from 'react-select';

const AttenuatorSettings = () => {
  const [selectedAtten, setSelectedAtten] = useState([]);
  const [attenCount, setAttenCount] = useState(1);

  const handleChange = (selectedOptions) => {
    setSelectedAtten(selectedOptions);
  };

  //dropdown data
  const options = [
    { value: 'Atten_01', label: 'Atten_01' },
    { value: 'Atten_02', label: 'Atten_02' },
    { value: 'Atten_03', label: 'Atten_03' }
  ];

  // Load selected attenuators from local storage on component mount
  useEffect(() => {
    const savedSelectedAtten = localStorage.getItem("selectedAtten");
    if (savedSelectedAtten) {
      setSelectedAtten(JSON.parse(savedSelectedAtten));
    }
  }, []); // Empty dependency array to run only once after initial mount

  // Update local storage whenever selected attenuators change
  useEffect(() => {
    localStorage.setItem("selectedAtten", JSON.stringify(selectedAtten));
  }, [selectedAtten]); // Dependency array ensures it runs whenever selectedAtten changes

  const handleAttenClick = (atten) => {
    setSelectedAtten([...selectedAtten, atten]);
  };

  const deleteAtten = (attenToDelete) => {
    const updatedAtten = selectedAtten.filter(atten => atten !== attenToDelete);
    setSelectedAtten(updatedAtten);

    // No need to update local storage here, it will be updated in the useEffect

    const lastAtten = updatedAtAtten[updatedAtAtten.length - 1];
    if (lastAtten) {
      const count = parseInt(lastAtten.value.split("_")[1]);
      setAttenCount(count);
    } else {
      setAttenCount(0);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-5 ">
        <div className='grid grid-cols-2 gap-3'>
          <div className='font-semibold ml-6 flex items-center justify-center '>Select Attenuators:</div>
          <Select options={options} value={selectedAtten} onChange={handleChange} isMulti={true} placeholder={"Select Atten..."} className='text-black' />
        </div>
      </div>

      {selectedAtten.map((atten, index) => (
        <div key={index} className="flex items-center">
          {/* Render the selected attenuator inputs */}
          <AttenuatorInput atten={atten} onDelete={deleteAtten} />
        </div>
      ))}
    </div>
  );
};

export default AttenuatorSettings;
