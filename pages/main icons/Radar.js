import React from 'react'
import radarImage from '../../assets/pages/radar page.png'

const Radar = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img className="h-full w-full" src={radarImage} alt="vessel page" />
    </div>
  )
}

export default Radar
