document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const button = form.querySelector('button[type="submit"]');
  const formFields = document.getElementById('formFields');
  const successMessage = document.getElementById('successMessage');
  
  // Cambiar texto del botón
  button.disabled = true;
  button.textContent = 'Enviando...';
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    
    if (response.ok) {
      // OCULTA TODO el formulario (incluyendo el botón)
      formFields.style.display = 'none';
      
      // MUESTRA el mensaje de éxito
      successMessage.style.display = 'block';
      
      // Resetea el formulario
      form.reset();
    } else {
      throw new Error('Error en el envío');
    }
  } catch (error) {
    alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    button.disabled = false;
    button.textContent = 'Enviar';
  }
});