  
  const telefonoInput = document.getElementById("celular");
  const telError = document.getElementById("tel-error");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const nombreInput = document.getElementById("nombre");
  const apellidosInput = document.getElementById("apellidos");
  const nombreError = document.getElementById("nombre-error");
  const apellidosError = document.getElementById("apellidos-error");
  const formulario = document.querySelector('form');
  const mensajeEnviado = document.getElementById('mensaje-enviado');

  telefonoInput.addEventListener("input", function() {
    if (!/^\d*$/.test(this.value)) {
      telError.textContent = "Solo se permiten números en este campo.";
    } else {
      telError.textContent = "";
    }
  });

  emailInput.addEventListener("input", function() {
    const email = this.value.trim(); // Elimina espacios en blanco al inicio y al final
    if (email === "") {
      emailError.textContent = "";
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Por favor, ingrese una dirección de correo electrónico válida.";
    } else {
      emailError.textContent = "";
    }
  });
  
  // Función para validar una dirección de correo electrónico
  function isValidEmail(email) {
    // Utiliza una expresión regular para validar la dirección de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  nombreInput.addEventListener("input", function() {
    const nombre = this.value.trim();
    if (nombre.length > 55) {
      nombreError.textContent = "El nombre debe tener un máximo de 55 caracteres.";
    } else {
      nombreError.textContent = "";
    }
  });
  
  apellidosInput.addEventListener("input", function() {
    const apellidos = this.value.trim();
    if (apellidos.length > 55) {
      apellidosError.textContent = "Los apellidos deben tener un máximo de 55 caracteres.";
    } else {
      apellidosError.textContent = "";
    }
  });

  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío del formulario por defecto
  
    // Realiza la validación de campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    if (nombre === '' || apellidos === '' || celular === '' || email === '' || mensaje === '') {
      // Si algún campo está vacío, muestra un mensaje de error
      alert('Por favor, complete todos los campos.');
    } else {
      // Todos los campos están completos, muestra "Mensaje enviado" y oculta el formulario
      mensajeEnviado.style.display = 'block';
      formulario.style.display = 'none';
    }
  });


