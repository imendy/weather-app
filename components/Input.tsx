import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { motion, AnimatePresence, transition } from 'framer-motion'
import React, { useState } from "react";
import { toast } from "react-toastify";


function Input({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");


 const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 4,
    stiffness: 20,
    restDelta: 0.001,
    duration: 0.3,
  },
};

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

    const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

   const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  
  return (
    <AnimatePresence>
     <motion.div className="flex my-6 justify-center flex-row items-center" {...headTextAnimation}>
       <div className="flex flex-row space-x-2 justify-center items-center">
         <input
           value={city}
           onChange={(e) => setCity(e.currentTarget.value)}
           type="text"
           placeholder="Search for city..."
           className="font-light text-lg p-1 rounded-lg shadow-xl shadow-gray-500 focus:outline-none capitalize placeholder:lowercase"
           />
         <UilSearch 
           size={25} 
           className="text-white cursor-pointer transition ease-out hover:scale-125 duration-300" 
           onClick={handleSearchClick}
           />
         <UilLocationPoint 
           size={25} 
           className="text-white cursor-pointer transition ease-out hover:scale-125 duration-300" 
           onClick={handleLocationClick}
           />

         <div className="flex flex-row w-1/4 justify-center">
          <button 
            name="metric"  
            className="text-white text-lg font-light transition ease-out hover:scale-125 duration-300"
            onClick={handleUnitsChange}
            >
            °C
          </button>
          <p className="text-white text-lg font-light mx-1">|</p>
          <button 
            name="imperial" 
            className="text-white text-lg font-light transition ease-out hover:scale-125 duration-300"
            onClick={handleUnitsChange}
            >
            °F
          </button>
       </div>
          
       </div>
      
       
     </motion.div>
    
      
    </AnimatePresence>
  )
}

export default Input