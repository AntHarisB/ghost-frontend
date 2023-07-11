import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC4oJ-B-hmxJuSBte8e4_jzxAM6KFmX8Dw",
  authDomain: "antcolony-b9df5.firebaseapp.com",
  projectId: "antcolony-b9df5",
  storageBucket: "antcolony-b9df5.appspot.com",
  messagingSenderId: "354965784197",
  appId: "1:354965784197:web:63bba5e798e7641ba4cbec"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)