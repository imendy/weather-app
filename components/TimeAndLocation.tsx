import {formatLocalTime} from '../services/weatherServices'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (

    <div>
      <div className="flex my-6 items-center justify-center">
         <p className="text-white font-light">
           {formatLocalTime(dt, timezone)}
         </p>
      </div>
      <div className="flex my-3 items-center justify-center">
         <p className="text-white text-xl font-medium">
           {`${name}, ${country}`} 
         </p>
      </div>
    </div>
  ) 
}

export default TimeAndLocation