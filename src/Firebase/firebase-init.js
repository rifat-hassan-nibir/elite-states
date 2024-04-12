// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLuVx5CtQnxMYH0hgXJPgCw_FwHP7QMAk",
  authDomain: "elite-states.firebaseapp.com",
  projectId: "elite-states",
  storageBucket: "elite-states.appspot.com",
  messagingSenderId: "465775836785",
  appId: "1:465775836785:web:debc019cd9bd6778dea5d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
