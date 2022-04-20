// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARDnuSpJZ2hUTdyLZ6VRcr84EXjfUFguY",
  authDomain: "ema-john-14237.firebaseapp.com",
  projectId: "ema-john-14237",
  storageBucket: "ema-john-14237.appspot.com",
  messagingSenderId: "974355570862",
  appId: "1:974355570862:web:c5e2ba6e9b49ca73aa4d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);