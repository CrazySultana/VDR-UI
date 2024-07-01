import React from 'react'
import backgroundImage from '../../assets/main_icons/background.png'
import engineroom from '../../assets/pages/enginroom.jpg'
import Speedometer from '../../components/speedometer'
import { Progress, MantineProvider } from '@mantine/core';


const EngineRoomDisplay = () => {
  return (
    <div className="text-white " style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px',
    }}>

      <div className='text-6xl pb-5 pt-5 text-center'>Engine Room</div>
      <div className='h-full flex flex-grow flex-col'>


        <div className='bg-re-600 h-1/3 flex flex-row'>

          <div className='w-2/3 flex flex-col'>
            <div className='h-1/2 flex flex-row ml-36 mt-24'>
              <div className='w-1/3 mr-28'><Speedometer min={0} max={30} speed={25} /></div>
              <div className='w-1/3 mr-28'><Speedometer min={0} max={30} speed={5} /></div>
              <div className='w-1/3 '><Speedometer min={0} max={30} speed={16} /></div>
            </div>
            <div className='h-1/2 bg-r d-600 flex flex-row  text-3xl'>
              <b className='ml-6'>Coolant Temperature</b>
              <b className='ml-20'>Engine speed</b>
              <b className='ml-32'>Engine oil pressure</b>
            </div>


          </div>

          <div className='w-1/3'>
            <img className='pl-5 pt-8 pr-10' src={engineroom} alt="" />
          </div>
        </div>




        <div className='bgblue-600 h-1/3 flex flex-row'>
          <MantineProvider>
            <div className='w-1/4 flex flex-col '>
              <div className='w-80 ml-16 mt-10'>
                <div className='mt-10'>
                  <Progress
                    value={80}
                    size="xl"
                    color="yellow"
                  />
                  Trans oil temp
                </div>
                <div className='mt-10'>
                  <Progress
                    value={80}
                    size="xl"
                    color="yellow"
                  />
                  Fuel temp
                </div>

                <div className='mt-10'>
                  <Progress
                    value={80}
                    size="xl"
                    color="yellow"
                  />
                  Inletmanifold Temp
                </div>
              </div>
            </div>
            <div className='w-1/4 flex flex-col '>
              <div className='w-80 ml-16 mt-10'>
                <div className='mt-10'>
                  <Progress
                    value={80}
                    size="xl"
                    color="yellow"
                  />
                  Trans oil press
                </div>
                <div className='mt-10'>
                  <Progress
                    value={80}
                    size="xl"
                    color="yellow"
                  />
                  Fuel press
                </div>
                <div className='mt-10'>
                  <Progress
                    value={80}
                    size="xl"
                    color="yellow"
                  />
                  Boost press
                </div>
              </div>
            </div>
          </MantineProvider>

          <div className='w-1/2 flex-row flex mt-7'>
            <div className='w-1/2 flex flex-col ml-16'>
              <button className='bg-blue-950 text-4xl pb-2 w-80 rounded-3xl mt-14 '>Check Engine</button>
              <button className='bg-blue-950 text-4xl pb-2 w-80 rounded-3xl mt-5 '>Low oil Level</button>
              <button className='bg-blue-950 text-4xl pb-2 w-80 rounded-3xl mt-5'>Low oil pressure</button>
            </div>
            <div className='w-1/2 flex flex-col ml-6'>
              <button className='bg-blue-950 text-4xl pb-2 w-80 rounded-3xl mt-14 '>Over temperature</button>
              <button className='bg-blue-950 text-4xl pb-2 w-80 rounded-3xl mt-5 '>Low coolest Level</button>
              <button className='bg-blue-950 text-4xl pb-2 w-80 rounded-3xl mt-5'>Low fuel pressure</button>
            </div>
          </div>

        </div>

        <div className='bgblue-600 h-1/3 flex flex-row'>
          <div className="flex flex-col w-1/4 text-4xl pb-20 text-center mt-10">
            <div clas>
              Fuel Rate
            </div>
            <div className='mt-3'>
              4.1 Gal/hr
            </div>
          </div>
          <div className="flex flex-col w-1/4 text-4xl pb-20 text-center mt-10 ml-5">
            <div clas>
              Engine houre
            </div>
            <div className='mt-3'>
              212 Houre
            </div>
          </div>

          <div className=" w-1/2  bg-red-00 flex justify-center ">

            <div className="border-4 border-gray-500 w-fit h-fit mt-4 text-xl">
              <div className="p-5">

                <div>
                  Engine Load ___________ 98%
                </div>
                <div>
                  Fuel Rate  ___________ 98 Gal/hr
                </div>
                <div>
                  Coolant level ___________ OK
                </div>
                <div>
                  Battery Voltage ___________ 40.0 Volt            s
                </div>
                <div>
                  Engine hours ___________ 380.0 Hrs
                </div>

              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  )
}

export default EngineRoomDisplay