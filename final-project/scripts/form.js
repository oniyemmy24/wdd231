
// form.js
export function initForm(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    
    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const message = form.querySelector("[name='message']").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const data = { name, email, message, date: new Date().toISOString() };
    localStorage.setItem("contactSubmission", JSON.stringify(data));
    
    showConfirmation("Thank you for getting in touch!");
    form.reset();
  });
}

function showConfirmation(msg) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <p>${msg}</p>
      <button id="close-modal">Close</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById("close-modal").addEventListener("click", () => {
    modal.remove();
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;