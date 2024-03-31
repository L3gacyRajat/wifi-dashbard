import React, { useState } from 'react';
import StaInput from './StaInput';

const GenericInstrumentSettings = ({sta}) => {
  const [selectedStas, setSelectedStas] = useState([]);
  const [staCount, setStaCount] = useState(1);

  const handleStaClick = (sta) => {
      setSelectedStas([...selectedStas, sta]);
  };


  const deleteSta = (staToDelete) => {
    const updatedSta = selectedStas.filter(sta => sta !== staToDelete);
    setSelectedStas(updatedSta);
  
    // Update the count based on the remaining test cases
    const lastTestcase = updatedSta[updatedSta.length - 1];
    if (lastTestcase) {
      const count = parseInt(lastTestcase.split("_")[1]);
      setStaCount(count);
    } else {
      setStaCount(0);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-normal mt-5">
        <div>
          <span className='font-semibold ml-6'>Select STA's:</span>
          <button 
            className={`rounded-md border  px-3 py-2 mr-2 ml-3 ${selectedStas.includes('STA_01') ? 'border-purple' : 'border-textcolor'}`}
            onClick={() => handleStaClick('STA_01')}
          >
            STA_01
          </button>
          <button 
            className={`rounded-md border px-3 py-2 mr-2 ml-3 ${selectedStas.includes('STA_02') ? 'border-purple' : 'border-textcolor'}`}
            onClick={() => handleStaClick('STA_02')}
          >
            STA_02
          </button>
          {/* Add more buttons for other STA's as needed */}
        </div>
      </div>
      {selectedStas.map((sta, index) => (
        <StaInput key={index} sta={sta} onDelete={deleteSta}/>
      ))}
    </div>
  );
};

export default GenericInstrumentSettings;
