import React from 'react'
import echoImage from '../../assets/pages/echopage.png'

const Echo = () => {
  const distance1 = "48.1 m"
  const distance2 = "48.1 m"
  const location1 = "32 01.691 N"
  const location2 = "120 54.811 E"
  const att = '002.5"'
  const att2 ='241.34'
  const date = "5/9/2024"
  const time = "17:05:05"

  return (
    <div
      className=" text-white"
      style={{
        backgroundImage: `url(${echoImage})`,
        backgroundSize: '100% 100%', // Stretches the image to fit the container
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
        borderRadius: '8px',
      }}
    >
      <div className="flex h-screen w-screen flex-col ">
      <div className="h-1/2 w-1/2 flex mt-7 ">
        <div className="mt-32 ml-20  w-24 h-10 flex flex-col text-sm   ">
          <div >
          {location1}
          </div>
          <div>
          {location2}
          </div>
        </div>
        <div className=" mt-32  ml-24  w-24 h-10 text-xl">
          {att}
        </div>
        <div className="mt-32 ml-24  w-24 h-10 text-xl">
          {att2}
        </div>
        <div className="mt-32 ml-20  w-24 h-10 flex flex-col text-sm">
          <div>
            {date}
          </div>
          <div>
            {time}
          </div>
        </div>
        </div>
        <div className="w-full h-full flex flex-row mt-12">
          <div className="text-7xl  mt-64 ml-16">{distance1}</div>
          <div className="text-7xl  mt-64 ml-40">{distance2}</div>
        </div>
      </div>
      
    </div>
  )
}

export default Echo
