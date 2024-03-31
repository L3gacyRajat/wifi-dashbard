import React, { useEffect, useState } from 'react';

const AttenuationComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const attenuationLevels = [
    { name: 'Atten1', dbm: 50, color: '#CB3CFF', fillPercentage: 50 },
    { name: 'Atten2', dbm: 80, color: '#FFB016', fillPercentage: 80 },
    { name: 'Atten3', dbm: 40, color: '#0E43FB', fillPercentage: 40 },
    { name: 'Atten4', dbm: 90, color: '#00C2FF', fillPercentage: 90 },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className='w-[-webkit-fill-available]'>
      {attenuationLevels.map((level, index) => (
        <div key={index}>
          <span className='mr-2'>{level.name}</span>
          <span className='ml-4'>{level.dbm} dbm</span>
          <div
            style={{
              backgroundColor: '#ddd',
              marginTop: '5px',
              marginBottom: '15px',
              borderRadius: '10px',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <div
              style={{
                backgroundColor: level.color,
                borderRadius: '10px',
                height: '5px',
                width: loaded ? `${level.fillPercentage}%` : '0%',
                transition: 'width 2s ease-out',
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttenuationComponent;
