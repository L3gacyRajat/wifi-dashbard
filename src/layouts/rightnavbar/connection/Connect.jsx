import React, { useState, useEffect } from 'react';
import connectdata from './connectdata';

const Connect = () => {
  const [showDefaultImage, setShowDefaultImage] = useState(true);

  useEffect(() => {
    // Start the bouncing animation
    const interval = setInterval(() => {
      setShowDefaultImage((prev) => !prev);
    }, 1000); // Switch every 1 seconds

    // Set a timeout to clear the interval after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval); // Clear the interval
    }, 3000); // 3 seconds timeout

    // Clear the timeout and interval on component unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []); // useEffect will only run once on component mount

  return (
    <div className='py-3'>
      {connectdata.map((value) => (
        <div className='text-textcolor items-center dark:text-black text-1xl px-3 grid grid-cols-2 py-1 mb-2' key={value.id}>
          <img src={showDefaultImage ? 'white wifi.png' : getStatusImage(value.status)} className='w-6 bounce-animation' alt="Wifi Image" />
          <h>{value.connectionName}</h>
        </div>
      ))}
    </div>
  );
};

const getStatusImage = (status) => {
  switch (status) {
    case 'active':
      return 'red wifi.png';
    case 'inactive':
      return 'green wifi.png';
    case 'associated':
      return 'yellow wifi.png';
    default:
      return 'white wifi.png';
  }
};

// CSS styles as template literals
const styles = `
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .bounce-animation {
    animation: bounce 2s 0s ;
    animation-iteration-count: 2;
  }
`;

// Injecting CSS into the document head
const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(styles));
document.head.appendChild(styleTag);

export default Connect;
