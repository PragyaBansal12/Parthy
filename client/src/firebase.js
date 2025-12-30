import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "g-stroll.firebaseapp.com",
  projectId: "g-stroll",
  storageBucket: "g-stroll.firebasestorage.app",
  messagingSenderId: "857914026248",
  appId: "1:857914026248:web:4bbd855bb51d664f9ee4bd"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
