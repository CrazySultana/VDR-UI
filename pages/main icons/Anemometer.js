import React from 'react'
import anemometerImage from '../../assets/pages/anemometerpage.png'
// import backgroundImage from '../../assets/main_icons/background.png'

const Anemometer = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col  text-white w-screen pt-10 h-full "
    style={{
        backgroundImage: `url(${anemometerImage})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        padding: '2rem',
        borderRadius: '8px',
}}
>
     
    <div className="flex">
    <div className="bg-black w-40 h-20 ml-14  mt-48  text-lime-400 flex justify-center items-center"  type="text" >
        <span className="text-8xl pb-5">8</span>
        </div>
        <div className="bg-black w-40 h-20 ml-56  mt-48  text-lime-400 flex justify-center items-center"  type="text" >
        <span className="text-8xl pb-5">16</span>
        </div>
      </div>      
    </div>
    </div>
  )
}

export default Anemometer
