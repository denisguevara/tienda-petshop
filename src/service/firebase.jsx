// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYZY2HMK3qIACIX_9OwrxOMZvTG0D0iDk",
  authDomain: "tienda-pet-shop.firebaseapp.com",
  projectId: "tienda-pet-shop",
  storageBucket: "tienda-pet-shop.firebasestorage.app",
  messagingSenderId: "1072907849369",
  appId: "1:1072907849369:web:1db9958842efb08f823208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)