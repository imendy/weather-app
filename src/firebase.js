// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.WEATHER_TODO_APIKEY,
    authDomain: process.env.WEATHER_TODO_AUTHDOMAIN,
    projectId: process.env.WEATHER_TODO_PROJECTID,
    storageBucket: process.env.WEATHER_TODO_STORAGEBUCKET,
    messagingSenderId: process.env.WEATHER_TODO_MESSAGINGSENDERID,
    appId: process.env.WEATHER_TODO_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };