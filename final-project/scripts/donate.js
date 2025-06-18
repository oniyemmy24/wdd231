// Update footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

// Form submission with modal confirmation
const form = document.getElementById('donation-form');
const modal = document.getElementById('confirmation-modal');
const closeModal = document.getElementById('close-modal');
const message = document.getElementById('confirmation-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.fullname.value.trim();
  const amount = form.amount.value;

  message.textContent = `🎉 Thank you${name ? ', ' + name : ''}! Your ₦${amount} donation has been submitted.`;
  modal.style.display = 'block';

  form.reset();
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
