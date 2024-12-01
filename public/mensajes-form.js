import { db } from "./firebase-config.js";
import {
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
    deleteDoc,
    updateDoc,
    arrayUnion,
    where
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Manejo del formulario
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "contactMessages"), {
      name: name,
      email: email,
      message: message,
      timestamp: serverTimestamp(),
    });

    document.getElementById("status").innerText = "Mensaje enviado con éxito.";
    document.getElementById("contactForm").reset();
  } catch (error) {
    document.getElementById("status").innerText = `Error: ${error.message}`;
  }
});
