// Populate current year
document.getElementById("year").textContent = new Date().getFullYear();

// Sample events data (could be fetched from a JSON file)
const events = [
  { date: "2025-06-15", name: "Historic Walking Tour" },
  { date: "2025-07-02", name: "Museum Open House" },
  { date: "2025-08-10", name: "Landmark Restoration Day" }
];

const eventList = document.getElementById("event-list");
events.forEach(event => {
  const li = document.createElement("li");
  li.textContent = `${event.date} – ${event.name}`;
  eventList.appendChild(li);
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for your message! We'll be in touch.");
  e.target.reset();
});

// Handle newsletter form
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  localStorage.setItem("newsletterEmail", email);
  alert("You've been subscribed to the newsletter!");
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  // Form Submission Modal
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return;
    }

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <p>Thank you for getting involved! We'll be in touch.</p>
        <button id="closeModal">Close</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("closeModal").onclick = () => modal.remove();
  });

  // Load events
  fetch("data/events.json")
    .then((res) => res.json())
    .then((events) => {
      const list = document.getElementById("event-list");
      events.forEach(event => {
        const li = document.createElement("li");
        li.textContent = `${event.date} – ${event.name}`;
        list.appendChild(li);
      });
    });
});

// === Footer Dates ===
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;
