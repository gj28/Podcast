// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD_7CYi6YpF-e1S2BAe_CaEv5COhL5WmI",
  authDomain: "senselive-fd1ee.firebaseapp.com",
  databaseURL: "https://senselive-fd1ee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "senselive-fd1ee",
  storageBucket: "senselive-fd1ee.appspot.com",
  messagingSenderId: "746175344138",
  appId: "1:746175344138:web:42a4eba55df1486eb4b9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;