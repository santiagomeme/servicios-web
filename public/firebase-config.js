 // Import Firebase desde el CDN
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi-40HpYqMAvDR_6vnUtJFYmjq1TBS-zg",
  authDomain: "catalogopublicidad-a3609.firebaseapp.com",
  databaseURL: "https://catalogopublicidad-a3609-default-rtdb.firebaseio.com",
  projectId: "catalogopublicidad-a3609",
  storageBucket: "catalogopublicidad-a3609.firebasestorage.app",
  messagingSenderId: "10516908094",
  appId: "1:10516908094:web:3f46eaf00bdbfa4eac696f",
  measurementId: "G-41BZFJ0CM7"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta la referencia a Firestore
export { db };