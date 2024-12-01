  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Captura los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Guarda en Firebase Realtime Database
    firebase.database().ref("messages").push({
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString(),
    })
    .then(() => {
      document.getElementById("status").innerText = "Mensaje enviado con éxito.";
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      document.getElementById("status").innerText = `Error: ${error.message}`;
    });
  });
