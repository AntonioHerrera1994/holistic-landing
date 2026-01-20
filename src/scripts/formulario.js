
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const button = form.querySelector('button[type="submit"]');
  const formFields = document.getElementById('formFields');
  const successMessage = document.getElementById('successMessage');
  
  button.disabled = true;
  button.textContent = 'Enviando...';
  
  try {
    // IMPORTANTE: Enviar como formulario, no como JSON
    const response = await fetch('/', {
      method: 'POST',
      body: formData  // ← Cambio clave: enviar FormData directamente
    });
    
    if (response.ok) {
      formFields.style.display = 'none';
      successMessage.style.display = 'block';
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
