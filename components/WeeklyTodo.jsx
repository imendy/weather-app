{/*import { UilPlusCircle } from '@iconscout/react-unicons'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import TodoTask from './TodoTask'
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



function  WeeklyTodo({heading}) {
  
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




  
  return (
  
      <div className="flex flex-col   mt-24 glassmorphism rounded-xl w-fit">
      
        <div className="mt-4 mb-4 flex justify-center items-center">
        <h2 className="text-white font-bold text-2xl">{heading}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex mx-4 my-4 ">
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
      
    </div>

  )
}

export default WeeklyTodo */}