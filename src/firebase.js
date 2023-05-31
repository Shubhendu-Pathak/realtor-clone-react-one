// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxejtJeBMBZEjHLkS8MrAEvox8uvP0wqA",
  authDomain: "realtor-clone-react-tailwind.firebaseapp.com",
  projectId: "realtor-clone-react-tailwind",
  storageBucket: "realtor-clone-react-tailwind.appspot.com",
  messagingSenderId: "867478827167",
  appId: "1:867478827167:web:e68cd14b673a9c2076f2aa"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()