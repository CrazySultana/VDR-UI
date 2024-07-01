import React from 'react'
import backgroundImage from '../../assets/main_icons/background.png'
import Speedometer from '../../components/speedometer'
import rudderImage from '../../assets/pages/rudder.png'

const Rudder = () => {
  return (
    <div className="h-screen w-screen pt-10 text-white "
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        borderRadius: '8px',
}}
>

  <div className="text-6xl text-white text-center">Rudder</div>

  <div className=" w-screen flex mt-24">
    <div className="text-center w-1/2 text-4xl">
      Rudder angle
      <div className="pl-20 pt-14">
      <Speedometer speed={30} min={-40} max={40}/>
      </div>
    </div>
    <div className="w-1/2">
    <img className="h-full w-full" src={rudderImage} alt="rudder page" />
    </div>
  </div>


    </div>
  )
}

export default Rudder
