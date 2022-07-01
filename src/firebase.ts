import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA0AClTog61-TFU-oqJMuAxC5nzQB9hiOQ",
  authDomain: "la-shoopa-49d4f.firebaseapp.com",
  databaseURL: "https://la-shoopa-49d4f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "la-shoopa-49d4f",
  storageBucket: "la-shoopa-49d4f.appspot.com",
  messagingSenderId: "512351565031",
  appId: "1:512351565031:web:13c7d1a5de6e5b18ce5e42"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);