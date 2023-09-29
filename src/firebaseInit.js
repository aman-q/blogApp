// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeUYBU5g5MMifTgGTbQBgtaX8RNcLJtjw",
  authDomain: "blogging-app-888cd.firebaseapp.com",
  projectId: "blogging-app-888cd",
  storageBucket: "blogging-app-888cd.appspot.com",
  messagingSenderId: "1028845775757",
  appId: "1:1028845775757:web:0f02645946d932bb5e6bc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);