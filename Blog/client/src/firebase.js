// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-139f6.firebaseapp.com",
  projectId: "blog-mern-139f6",
  storageBucket: "blog-mern-139f6.appspot.com",
  messagingSenderId: "661253865303",
  appId: "1:661253865303:web:3553ea5f84f9139b5ec812",
  measurementId: "G-KX0BF27V7W"
};
export const app = initializeApp(firebaseConfig);