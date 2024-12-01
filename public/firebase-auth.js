// Configurar autenticación
const auth = firebase.auth();

// Registro de usuario
document.getElementById("register").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Usuario registrado:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});
