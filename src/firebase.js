// Import the functions you need from the SDKs you need
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBnn3XJIE-fFL3KDXcNiVZWfh33QEL0a0k",
  authDomain: "disney-clone-bb989.firebaseapp.com",
  projectId: "disney-clone-bb989",
  storageBucket: "disney-clone-bb989.appspot.com",
  messagingSenderId: "238311296972",
  appId: "1:238311296972:web:93f81be7c5db8f40ee5769",
  measurementId: "G-Y38Y7P9T3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);
const provider =new GoogleAuthProvider()
const storage=getStorage(app);
export {auth,storage,provider}
export default db;
