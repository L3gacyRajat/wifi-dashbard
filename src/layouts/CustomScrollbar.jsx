import React from 'react';
import PropTypes from 'prop-types';

const CustomScrollbar = ({ className, width, thumbColor, hoverColor }) => {
  const scrollbarStyle = `
    .${className}::-webkit-scrollbar {
      width: ${width}px;
    }
    
    .${className}::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
          border-radius: 10px;
    }
    
    .${className}::-webkit-scrollbar-thumb {
      background-color: ${thumbColor};
      border-radius: 10px;
    }
    
    .${className}::-webkit-scrollbar-thumb:hover {
      background-color: ${hoverColor};
    }
  `;

  return (
    <style>{scrollbarStyle}</style>
  );
};

CustomScrollbar.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  thumbColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

export default CustomScrollbar;
