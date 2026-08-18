document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const button = form.querySelector('button[type="submit"]');
  const formFields = document.getElementById('formFields');
  const successMessage = document.getElementById('successMessage');
  const originalHTML = button.innerHTML;

  button.disabled = true;
  button.textContent = 'Sending...';

  try {
    const response = await fetch('/', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      formFields.style.display = 'none';
      successMessage.style.display = 'block';
      form.reset();
    } else {
      throw new Error('Error en el envío');
    }
  } catch (error) {
    alert('There was an error sending your message. Please try again.');
    button.disabled = false;
    button.innerHTML = originalHTML;
  }
});