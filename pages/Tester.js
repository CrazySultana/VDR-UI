// Speedometer.js
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import backgroundImage from '../assets/main_icons/background.png'; 


const Speedometer = ({ speed }) => {
  const containerStyle = {
    width: '200px', // Adjust width as needed
    height: '200px', // Adjust height as needed
    position: 'relative',
    transform: 'rotate(135deg)', // Rotate to make 3/4 circle
  };

  const speedometerStyle = {
    position: 'absolute',
    transform: 'rotate(-135deg)', // Counter-rotate to align
  };

  return (
    <div className='m-40'>
        <div style={containerStyle}>
      <div style={speedometerStyle}>
        <ReactSpeedometer
          value={speed}
          minValue={0}
          maxValue={240}
          needleColor="red"
          startColor="green"
          segments={10}
          endColor="blue"
          radius={150} // Adjust radius to fit within container
          ringWidth={20} // Adjust ring width as needed
        />
      </div>
    </div>
    </div>
  );
};

export default Speedometer;
