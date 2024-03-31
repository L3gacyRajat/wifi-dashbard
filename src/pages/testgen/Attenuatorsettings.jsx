import React, { useState, useEffect } from "react";
import AttenuatorInput from "./AttenuatorInput";

const AttenuatorSettings = () => {
  const [selectedAtten, setSelectedAtten] = useState([]);
  const [attenCount, setAttenCount] = useState(1);

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
    const lastTestcase = updatedAttenu[updatedAtten.length - 1];
    if (lastTestcase) {
      const count = parseInt(lastTestcase.split("_")[1]);
      setAttenCount(count);
    } else {
      setAttenCount(0);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-normal">
        Select Attenuators:
        <button 
          className={`rounded-md border  px-3 py-2 mr-2 ml-3 ${selectedAtten.includes('Atten_01') ? 'border-purple' : 'border-textcolor'}`}
          onClick={() => handleAttenClick('Atten_01')}
        >
          Atten_01
        </button>
        <button 
          className={`rounded-md border px-3 py-2 mr-2 ml-3 ${selectedAtten.includes('Atten_02') ? 'border-purple' : 'border-textcolor'}`}
          onClick={() => handleAttenClick('Atten_02')}
        >
          Atten_02
        </button>
      </div>
      {selectedAtten.map((atten, index) => (
        <div key={index} className="flex items-center">
          <AttenuatorInput atten={atten} onDelete={deleteAtten}/>
        </div>
      ))}
    </div>
  );
};

export default AttenuatorSettings;
