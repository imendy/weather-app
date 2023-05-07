import { UilTrashAlt } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { db } from "../src/firebase";
import { collection, addDoc } from "firebase/firestore";



function TodoTask({ todo, toggleComplete, handleDelete, handleEdit,}) {

   const [newTitle, setNewTitle] = useState(todo?.title);

    const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  
  return (
    <div>
     <li className="flex glassmorphism justify-between p-4 my-4 mx-4 rounded-lg capitalize shadow-xl shadow-gray-500">
       <div className="flex mx-4 my-4 ">
         <input 
           style={{ textDecoration: todo?.completed && "line-through" }}
           type="text"
           value={todo?.title === "" ? newTitle : todo?.title} 
           onChange={handleChange}
           className="bg-transparent focus:outline-none capitalize"
           />
            
         </div>
       <div className="flex items-center space-x-2">
          <button 
         className="cursor-pointer flex items-center"
         onClick={() => toggleComplete(todo)}
         >
         {
         <UilCheckCircle
            size={25} 
           className="text-yellow-400 cursor-pointer transition ease-out hover:scale-125 duration-300"
           />
         }
       </button>
        <button
          className="cursor-pointer flex items-center"
          onClick={() => handleEdit(todo, newTitle)}
        >
          {
             <UilEdit 
                size={25} 
                 className="text-purple-500 cursor-pointer transition ease-out hover:scale-125 duration-300"
            />
          }
        </button>
        <button 
          className="cursor-pointer flex items-center"
          onClick={() => handleDelete(todo?.id)}>
          {
            <UilTrashAlt 
                 size={25} 
                 className="text-cyan-600 cursor-pointer transition ease-out hover:scale-125 duration-300"
              />
          }
        </button>
       </div>
      
     </li>
      
    </div>
  )
}

export default TodoTask