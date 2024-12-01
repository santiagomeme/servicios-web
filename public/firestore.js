// Configurar Firestore
const db = firebase.firestore();

// Agregar datos
document.getElementById("submit").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  db.collection("messages").add({
    name: name,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log("Mensaje guardado con éxito.");
  })
  .catch((error) => {
    console.error("Error al guardar el mensaje:", error);
  });
});
db.collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log("Mensaje:", doc.data());
    });
  });

  