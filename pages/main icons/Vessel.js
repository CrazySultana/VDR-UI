import React, { useState } from 'react';
import Speedometer from '../../components/speedometer'
import { FaTachometerAlt } from 'react-icons/fa';
import backgroundImage from '..//../assets/main_icons/background.png'

const Vessel = () => {
  const distance = '27.4 ft'
  const volts = ['12.8 Volt', '12.9 Volt']
  const speed = 50
  const MPH = '10 MPH'
  const GAL = '158 GAL'

  const [MPH_left, setMPH_left] = useState(11.5);

  const incrementMPH = () => {
    setMPH_left((prevMPH) => prevMPH + 1);
  };
  const decrementMPH = () => {
    setMPH_left((prevMPH) => prevMPH - 1);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="text-white bg-gray-800 w-1/4 flex flex-col items-center text-3xl " >
        <div className="h-1/6 flex justify-center items-center border-b-2 border-white w-full ">
          <b className="text-4xl">Vessel Control</b>
        </div>
        <div className="h-1/6 flex justify-center items-center border-b-2 border-white w-full">
          Smart Tow
        </div>
        <div className="h-1/6 flex justify-center items-center border-b-2 border-white w-full">
          <FaTachometerAlt size={20} />
          <p className="ml-2">{MPH}</p>
        </div>
        <div className="h-2/6 flex justify-center flex-col items-center border-b-2 border-white w-full">
          <div>
          <button className="pb-8"
            style={{ fontSize: '24px' }}
            onClick={incrementMPH}
            >&#9650;</button>
        </div>
        <div>
          {MPH_left}
          <div className="mt-2">MPH</div>
        </div>
        <div>
          <button className="pt-8"
          style={{ fontSize: '24px' }}
          onClick={decrementMPH}
          >&#9660;</button>
        </div>
        </div>
        
        <div className="h-1/6 flex items-center">
          Smart Tow active
        </div>
      </div>
      <div className=" w-3/4 flex flex-col text-white  text-3xl " style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        borderRadius: '8px',
}}>
        <div className="flex justify-center m-10 ">
          <b >{distance}</b>
        </div>

        <div className=" flex ">
          {
            volts.map((volt) => (
              <div className="w-1/2 flex justify-center">
                <b >{volt}</b>
              </div>
            ))
          }
        </div>

        <div className="flex justify-center mt-8">
          <span className="mr-2" style={{
            color: 'white', background: "green", borderRadius: '90%', width: '44px', height: '44px', textAlign: 'center'
          }}>
            <b >
            &#10003;
            </b>
          </span>
          <span > System OK</span>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-1/2">
            <Speedometer speed={speed} />
          </div>
          <div className="w-1/2">
            <Speedometer speed={speed} />
          </div>
        </div>
        <div>
          <div className="justify-center flex">
            <b className="mb-10" >Trim</b>
          </div>
          <div className="flex ">
            <div className="w-1/2 flex justify-center items-center flex-col">
              <span >Miles Per Houre</span>
              <span className="text-2xl" >{MPH}</span>
            </div>
            <div className="w-1/2 flex justify-center items-center flex-col">
              <span >Precision gravimetry</span>
              <span className="text-2xl" >{GAL}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vessel
