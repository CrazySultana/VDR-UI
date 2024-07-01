import React from 'react'
import background from '../../assets/main_icons/background.png'
import { Button , MantineProvider} from '@mantine/core';
import MapComponent from '../../components/Map';
import arrow from '../../assets/pages/arrow.png'

const ECDIS = () => {

  const x = 29.85
  const y = 31.2
  const att1 = '6.0'
  const att2 = '134 DPT (s)'
  const att3 = '+3.38 m'
  const att4 = '+0.01 m'
  const att5 = '+3.08 m'
  const att6 = '+32.2'
  const att7 = '0.1 kn'
  const att8 = '6.0 Drift'

  return (
    <div
      className=" text-white "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        borderRadius: '8px',

      }}
    >
      <div className="h-full flex flex-col ">
        <div className="bgblue-700 h-16  flex flex-row pt-5 ">
        <MantineProvider>
          <div className='w-1/2'>
          <button className='w-1/4 h-10 g-blue-900'>Navigation</button>
          <button className='w-1/4 h-10 '>Planning</button>
          <button className='w-1/4 h-10 '>Fishing</button>
          <button className='w-1/4 h-10 '>3D cube</button>
          
          </div>
          <div className='w-1/2'>
          <button className='w-1/4 h-10 g-blue-900'>Dual Nav</button>
          <button className='w-1/4 h-10 g-blue-900'>2D / 3D</button>
          <button className='w-1/4 h-10 g-blue-900'>Radar</button>
          <button className='w-1/4 h-10 g-blue-900'>Update</button>

          </div>
          </ MantineProvider>
        </div>

        <div className='flex flex-row flex-grow mt-5'>
        <div className=" w-3/4  flex flex-row flex-grow ">
        <MapComponent x={x} y={y}/>

        </div>
        <div className='bg-iolet-800 w-1/4 flex flex-col h-full'>
          <div className='h-1/3 flex flex-col justify-center items-center text-4xl'>
            <div className='h-1/3 flex items-center justify-center pt-5 pb-5 border-b-2 border-t-2 border-white w-full '>{att1}</div>
            <div className='h-1/3 flex items-center justify-center pt-5 pb-5 border-b-2 border-t-2 border-white w-full'>{att2}</div>
            <div className='h-1/3 flex items-center justify-center pt-5 pb-5 border-b-2 border-t-2 border-white w-full'>...°C SST</div>
          </div>
          <div className='h-2/3'>
          <div className='h-1/6 flex items-center justify-center text-4xl  pt-5 pb-5 border-b-2 border-t-2 border-white w-full'>Port Jefferson</div>
          <div className='h-2/6 flex flex-row pt-5 pb-5 border-b-2  border-white'>
          <div className='w-1/2 flex flex-col    '>
            <div className='h-1/2 flex items-center justify-center text-4xl'>
            {att3}
            </div>
            <div className='h-1/2 flex items-center justify-center text-4xl'>
            {att4}
            </div>
          </div>
          <div className='w-1/2 flex items-center justify-center text-4xl '>
          {att5}
          </div>
          </div>

          <div className='h-2/6 flex flex-row pt-5 pb-5 border-b-2  border-white'>
            <div className='w-1/2'>
              <img src={arrow} alt="" />
            </div>
            <div className='w-1/2 flex flex-col '>
              <div className='h-1/2 flex items-center justify-center text-4xl '>
              {att6}
              </div>
              <div className='h-1/2 flex items-center justify-center text-4xl'>
              {att7}
              </div>
            </div>
          </div>

          <div className='h-1/6 flex items-center justify-center text-4xl pt-5 pb-5'>{att8}</div>

          </div>
        </div>
        </div>
        
      </div>

    </div>
  )
}

export default ECDIS
