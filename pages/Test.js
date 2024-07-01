import React from 'react';
import image1 from '../assets/main_icons/vessel.png';
import image2 from '../assets/main_icons/fule.png';
import image3 from '../assets/main_icons/echo.jpg'
import image4 from '../assets/main_icons/anemometer.png';
import image5 from '../assets/main_icons/gps.jpg';
import image6 from '../assets/main_icons/engine.png';
import image7 from '../assets/main_icons/compass.jpg';
import image8 from '../assets/main_icons/alarm.jpg';
import image9 from '../assets/main_icons/radar.jpg';
import image10 from '../assets/main_icons/background.png';
import image11 from '../assets/main_icons/speed.png';
import image12 from '../assets/main_icons/ecdis.jpg'
import image13 from '../assets/main_icons/rudder.png'

import { useNavigate,Link } from 'react-router-dom';


const Test = () => {

  const navigate = useNavigate();


  const images = [
    { src: image1, alt: 'Image 1', title: 'Vessel', url: '/vessel' },
    { src: image2, alt: 'Image 2', title: 'Fuel', url: '/fuel' },
    { src: image3, alt: 'Image 3', title: 'Echo sounder', url: '/echo' },
    { src: image4, alt: 'Image 4', title: 'Anemometer', url: '/anemometer' },
    { src: image5, alt: 'Image 5', title: 'GPS', url: '/gps' },
    { src: image6, alt: 'Image 6', title: 'Engine', url: '/engine' },
    { src: image7, alt: 'Image 7', title: 'Gyro compass', url: '/compass' },
    { src: image8, alt: 'Image 8', title: 'Main alarms', url: '/alarm' },
    { src: image9, alt: 'Image 9', title: 'Radar', url: '/radar' },
    { src: image11, alt: 'Image 11', title: 'Speed log', url: '/speed' },
    { src: image12, alt: 'Image 12', title: 'ECDIS', url: '/ecdis' },
    { src: image13, alt: 'Image 13', title: 'Rudder', url: '/rudder' },
  ];

  return (
    <div style={{ backgroundImage: `url(${image10})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div  className="flex items-center justify-center p-16">
        <p className="text-white text-5xl">Welcome to ship navigation system</p>
      </div>
      <div className="flex items-center justify-center min-h-screen ">
        <table className="  w-full lg:w-4/5 max- ">
          <tbody>
            {[0, 1, 2, 3].map(row => (
              <tr key={row} className=" ">
                {[0, 1, 2].map(col => {
                  const index = row * 3 + col;
                  return (
                    <td key={col} className="p-2   ">
                      <div className='m-5 flex items-center justify-center flex-col '>
                      <img 
                        src={images[index]?.src}
                        alt={images[index]?.alt}
                        className="w-24 h-24 object-cover"
                        onClick={() => navigate(`${images[index]?.url}`)}
                      />
                      <b className='mt-5 text-white text-xl'>{images[index]?.title}</b>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
    
  );
}

export default Test;
