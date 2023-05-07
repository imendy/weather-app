import type { NextPage } from 'next'
import Head from 'next/head'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from '../components/TopButtons'
import Input from '../components/Input'
import TimeAndLocation from '../components/TimeAndLocation'
import TemperatureAndDetails from '../components/TemperatureAndDetails'
import Forecast from "../components/Forecast";
import DailyTodo from '../components/DailyTodo'
import  WeeklyTodo from '../components/WeeklyTodo'
import TodoTask from '../components/TodoTask'
import Footer from '../components/Footer'
import getFormattedWeatherData from '../services/weatherServices'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../src/firebase";



const Home: NextPage = () => {


  const [que, setQue] = useState({q: 'lagos'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {

      const message = que.q ? que.q : "current location.";

      toast.info("Fetching weather for " + message);
      
      await getFormattedWeatherData({...que, units}).then((data) => {

        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data)
      })
      
    }

    fetchWeather()
  }, [que, units])

    const formatBackground = () => {
    if (!weather) return "from-blue-700 to-orange-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-blue-700 to-orange-700"

    return "from-cyan-500 to-orange-500"
  };

  
  return (
    <div  className={` min-w-max  py-5 px-4 bg-gradient-to-br  min-h-screen shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopButtons setQuery={setQue} />
      <Input setQuery={setQue} units={units} setUnits={setUnits} />

      {weather && (

      <div>
       <TimeAndLocation weather = {weather} />
      <TemperatureAndDetails weather = {weather} />
      
     
  
     <div className="flex flex-col justify-center">
            <div className=" ">
               <div className="flex flex-col justify-center items-center">
         <DailyTodo heading="What's the plan for the day?"/>
       </div>
            </div>
      
       
       {/* <WeeklyTodo />*/}
               
     </div>
     
      </div>
      
      )}

     
      <Footer />

       <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />

      
    </div>
  )
}

export default Home