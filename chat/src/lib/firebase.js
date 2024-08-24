import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDARYOkq4Niwwaag-vTRMypcfqNIxhhBs8",
  authDomain: "react-chat-app-2eeb6.firebaseapp.com",
  projectId: "react-chat-app-2eeb6",
  storageBucket: "react-chat-app-2eeb6.appspot.com",
  messagingSenderId: "747939209126",
  appId: "1:747939209126:web:95173f8e13c763b0837967"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()