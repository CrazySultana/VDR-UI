import React, { useState, useEffect } from 'react';


const CompassComp = () => {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const handleOrientation = (event) => {
      const { alpha } = event.alpha || {};

      if (typeof alpha === 'number') {
        setHeading(alpha);
      }
    };

    window.addEventListener('deviceorientation', handleOrientation, true);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
    };
  }, []);

  return (
    <div className="compass">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="2" />
        <line
          x1="100"
          y1="10"
          x2="100"
          y2="190"
          stroke="black"
          strokeWidth="2"
          transform={`rotate(${heading}, 100, 100)`}
        />
        <text x="100" y="20" textAnchor="middle" fontSize="16">{`${Math.round(heading)}°`}</text>
      </svg>
    </div>
  );
}

export default CompassComp
