// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhjeRj4fRid0QAMW2Nb_4bS-MNCHSKVVo",
  authDomain: "nyobablog-629a0.firebaseapp.com",
  projectId: "nyobablog-629a0",
  storageBucket: "nyobablog-629a0.appspot.com",
  messagingSenderId: "102642038946",
  appId: "1:102642038946:web:de81759e5272d9b7bdfffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
