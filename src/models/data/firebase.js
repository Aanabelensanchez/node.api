// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJAGEbc76SxjfuAIknoI-RS00X59pBlD0",
  authDomain: "api-rest-node-2e32c.firebaseapp.com",
  projectId: "api-rest-node-2e32c",
  storageBucket: "api-rest-node-2e32c.firebasestorage.app",
  messagingSenderId: "447296472613",
  appId: "1:447296472613:web:76577ebdf22a386485a1cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Inicializar Firestore

const db = getFirestore(app);

export { db };