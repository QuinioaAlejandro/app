// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1b1SCF3yz5EJeLk8CnilfV4_nRSEFv2s",
  authDomain: "quinoto-records.firebaseapp.com",
  projectId: "quinoto-records",
  storageBucket: "quinoto-records.appspot.com",
  messagingSenderId: "230015651435",
  appId: "1:230015651435:web:6a7bf56c9e2b3bf3476b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)