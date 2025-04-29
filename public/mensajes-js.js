  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Muestra un mensaje de estado
    const status = document.getElementById("status");
    status.innerText = "Enviando mensaje...";

    // Enviar usando EmailJS
    emailjs.sendForm("service_ic1mymw", "template_ejp8qcp", this)
      .then(function () {
        status.innerText = "✅ ¡Mensaje enviado con éxito!";
        document.getElementById("contactForm").reset(); // Limpia el formulario
      }, function (error) {
        status.innerText = "❌ Hubo un error. Intenta de nuevo.";
        console.error("EmailJS error:", error);
      });
  });
