import { UilPlusCircle } from '@iconscout/react-unicons'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import TodoTask from './TodoTask'
import work from '../public/work.png'
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc
} from "firebase/firestore";
import { db } from "../src/firebase";
import { motion, AnimatePresence, transition } from 'framer-motion'

const style = {

  count: `text-center p-4 text-white text-lg`,
};



function DailyTodo({heading}) {
  
 const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  
    const [todos, setTodos] = useState([]);

useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
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




  
  return (


    <AnimatePresence>

      <div className="glassmorphism
       mt-24 rounded-xl">
              <div className="flex justify-center items-center mt-24  ">
        <Image 
          src={work}
          className="rounded-full animate-pulse"
          />
      </div>
       <motion.div className="flex flex-col   mt-8 glassmorphism rounded-xl w-fit mb-20 mx-4" {...slideAnimation('up')}>
      
        <div className="mt-8 mb-4 flex justify-center items-center">
        <h2 className="text-white font-bold text-2xl">{heading}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex mx-4 my-8 ">
        <form 
          className="flex items-center space-x-16 "
          onSubmit={handleSubmit}
          >
         <input 
           type="text"
          placeholder="add tasks..."
           className="font-light text-lg p-2 rounded-lg shadow-xl shadow-gray-500 focus:outline-none capitalize placeholder:lowercase w-[300px]"
           value={title}
          onChange={(e) => setTitle(e.target.value)}
           />
          <button> 
            <UilPlusCircle 
              size={25} 
           className="text-white cursor-pointer  transition ease-out hover:scale-125 duration-300"
              />
          </button>
        </form>
        
      </div>
      <div>
          <div className="">
        {todos.map((todo) => (
          <TodoTask
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      </div>
      </div>
         {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      
    </motion.div>
      </div>



    
    </AnimatePresence>
  
     
  )
}

export default DailyTodo