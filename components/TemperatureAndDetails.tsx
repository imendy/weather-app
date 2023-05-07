import Image from 'next/image'
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

import { formatLocalTime, iconUrlFromCode } from "../services/weatherServices";





function TemperatureAndDetails({weather: {
    details, 
    icon, 
    temp, 
    feels_like, 
    temp_min, 
    temp_max, 
    humidity,
    sunrise,
    sunset,
    speed,
    timezone,
  
}}) {

  const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

  
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-lg text-cyan-300">
         <p className="">
           {details}
         </p>
      </div>
      <div className="flex flex-row py-3 justify-center items-center text-white space-x-28">
        <div className="w-[50px] h-[50px]">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        </div>
            
        <p className="text-3xl text-white">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center  text-xs items-center font-light">
           <UilTemperature size={10} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex justify-center text-xs items-center font-light">
           <UilWind size={10} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
          </div>
          <div className="flex justify-center text-xs items-center font-light">
           <UilTear size={10} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
        </div>
      </div>
     <div className="flex flex-row justify-center items-center text-white text-xs  space-x-2 py-6">
       <  UilSun size={15} />
       <p className="font-light">
         Rise:{' '} <span className="font-medium ml-1">{formatLocalTime(sunrise, timezone, 'hh:mm a' )}</span>
       </p>
       <p className="font-light">|</p>
        < UilSunset size={15} />
       <p className="font-light">
         Set:{' '} <span className="font-medium ml-1">{formatLocalTime(sunset, timezone, 'hh:mm a' )}</span>
       </p>
       <p className="font-light">|</p>
        <  UilSun size={15} />
       <p className="font-light">
         High:{' '} <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
       </p>
       <p className="font-light">|</p>
        <  UilSun size={15} />
       <p className="font-light">
         Low:{' '} <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
       </p>
      
     
     </div>
      
    </div>
  )
}

export default TemperatureAndDetails