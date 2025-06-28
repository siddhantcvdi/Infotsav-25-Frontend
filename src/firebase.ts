// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5eQMz1qWBIseeHeR5OqGKx3ENb7IoiwU",
  authDomain: "infotsav-backend.firebaseapp.com",
  projectId: "infotsav-backend",
  storageBucket: "infotsav-backend.appspot.com",
  messagingSenderId: "303055456951",
  appId: "1:303055456951:web:96ad798aa33cd6987d9b32",
  measurementId: "G-970Y52LVMQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };