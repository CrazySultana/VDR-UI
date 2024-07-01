import React from 'react'
import alarmImage from '../../assets/main_icons/background.png'
import Speedometer from '../../components/speedometer'
import { Progress, MantineProvider } from '@mantine/core';
import alarm1 from '../../assets/pages/alarm.png'
import alarm2 from '../../assets/pages/alarm2.png'
import alarm3 from '../../assets/pages/alarm3.png'
import backgroundImage from '../../assets/main_icons/background.png'

const Alarm = () => {

  const att1 = '90.0'
  const att2 = 1481
  const att3 = 13955
  const att4 = 13955

  return (
    <div className="text-white" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px',
    }}>
      <div className='text-7xl text-center'>Propulsion system</div>
      <div className='flex flex-row'>
        <div className=' h-screen w-1/2 flex flex-col '>
          <div className=' h-1/2 w-full flex'>
            <div className='ml-20 mt-24'><Speedometer min={0} max={30} speed={25} /></div>
          </div>
          <div className=' h-1/2 w-full flex'>
            <div className='flex flex-col w-1/2'>
              <div className='w-full h-full flex flex-col '>
                <b className='h-1/4 pt-2 ml-5 text-3xl text-'>RPM</b>
                <b className='h-1/4 ml-5 text-3xl'>{att1}</b>
                <div className='h-2/4 w-3/4 ml-5 '>
                  <MantineProvider>
                    <Progress
                      value={80}
                      size="xl"
                      color="blue"
                    />
                  </MantineProvider>
                </div>
              </div>
              <div className='w-full h-full  flex flex-col '>
                <b className='h-1/4 pt-2 ml-5 text-3xl text-'>Tourqe</b>
                <b className='h-1/4 ml-5 text-3xl'>{att2}</b>
                <div className='h-2/4 w-3/4 ml-5 '>
                  <MantineProvider>
                    <Progress
                      value={80}
                      size="xl"
                      color="blue"
                    />
                  </MantineProvider>
                </div>
              </div>

            </div>
            <div className='flex flex-col w-1/2 '>
              <div className='w-full h-full  flex flex-col '>
                <b className='h-1/4 pt-2 ml-5 text-3xl text-'>Actual power</b>
                <b className='h-1/4 ml-5 text-3xl'>{att3}</b>
                <div className='h-2/4 w-3/4 ml-5 '>
                  <MantineProvider>
                    <Progress
                      value={80}
                      size="xl"
                      color="blue"
                    />
                  </MantineProvider>
                </div>
              </div>
              <div className='w-full h-full  flex flex-col '>
                <b className='h-1/4 pt-2 ml-5 text-3xl text-'>Average power</b>
                <b className='h-1/4 ml-5 text-3xl'>{att4}</b>
                <div className='h-2/4 w-3/4 ml-5 '>
                  <MantineProvider>
                    <Progress
                      value={80}
                      size="xl"
                      color="blue"
                    />
                  </MantineProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' h-screen w-1/2 flex flex-col bg-red600'>


          <div className=' h-1/2 w-full flex justify-center items-center mt-16'>
          
            <img className="h-96" src={alarm1} alt="vessel page" />
          </div>

          <div className=' h-1/2  flex flex-row justify-between mt-14 '>

            <div className='400 w-1/2 h-full ml-5 mr-5'>
              <img className="h-60 " src={alarm2} alt="vessel page" />
            </div>



            <div className=' w-1/2 h-full ml-5 mr-5 '>
              <img
                className="h-60  " src={alarm3} alt="vessel page" />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Alarm
