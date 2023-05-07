import { motion, AnimatePresence, transition } from 'framer-motion'




function TopButtons({ setQuery }) {


  const cities = [
    {
      id: 1,
      title: 'London'
    },
    
    {
      id: 2,
      title: 'Paris'
    },

    {
      id: 3,
      title: 'Milan'
    },

   {
      id: 4,
      title: 'Lagos'
    },

   {
      id: 5,
      title: 'Barcelona'
    },
   {
      id: 6,
      title: 'Tokyo'
    },
     {
      id: 7,
      title: 'Berlin'
    },
  ]


   const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

  const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};
  
  return (

     <AnimatePresence>
            <motion.div className="flex my-6 items-center justify-center"              {...headTextAnimation}>
      {cities.map((city) => (
        <button 
          key={city.id} 
          className="text-white text-[11px] font-bold px-3"
          onClick={() => setQuery({ q: city.title })}
          >
          {city.title}
        </button>
      ))}
      </motion.div>
     
     </AnimatePresence>

  )
}

export default TopButtons