// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZqEgUbZ1GMNfNj7MOTcWHTsawR4CvirI",
  authDomain: "ecommerce-97add.firebaseapp.com",
  projectId: "ecommerce-97add",
  storageBucket: "ecommerce-97add.appspot.com",
  messagingSenderId: "939290801050",
  appId: "1:939290801050:web:cb3b9a489570d57c324023",
  measurementId: "G-7M0P9KVCTB"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}