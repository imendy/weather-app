// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDamZJSZ_j5H3h28yhXB3K5anaBX0O_bOk",
  authDomain: "weather-todo-app-a018e.firebaseapp.com",
  projectId: "weather-todo-app-a018e",
  storageBucket: "weather-todo-app-a018e.appspot.com",
  messagingSenderId: "677929105552",
  appId: "1:677929105552:web:2d0bc2a204b28d51524015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };