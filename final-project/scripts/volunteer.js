// === Footer year and last modified ===
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

// === Form and Modal Logic ===
const form = document.getElementById('volunteer-form');
const modal = document.getElementById('confirmation-modal');
const message = document.getElementById('confirmation-message');
const closeModal = document.getElementById('close-modal');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.fullname.value.trim();
  const role = form.interest.value;

  message.textContent = `👏 Thank you, ${name}! You've signed up to help with "${role.replace('-', ' ')}". We'll contact you soon.`;
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
