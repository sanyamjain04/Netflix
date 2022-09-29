// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm0ssh705L9_oWshERAct2ZXNk5DKanFs",
  authDomain: "netflix-e4598.firebaseapp.com",
  projectId: "netflix-e4598",
  storageBucket: "netflix-e4598.appspot.com",
  messagingSenderId: "970003518290",
  appId: "1:970003518290:web:ff8846749988b40084e08b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app;
export { auth, db }