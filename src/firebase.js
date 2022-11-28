// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEWhhG7OAb8xufMJH_iZgsqkzVSbJJR_Y",
  authDomain: "auth-development-4e799.firebaseapp.com",
  projectId: "auth-development-4e799",
  storageBucket: "auth-development-4e799.appspot.com",
  messagingSenderId: "544548360276",
  appId: "1:544548360276:web:79224eec672ed26cfd5dc1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()