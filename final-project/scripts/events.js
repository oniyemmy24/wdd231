let allEvents = [];

async function fetchEvents() {
  try {
    const response = await fetch("data/events.json");
    if (!response.ok) throw new Error("Failed to fetch events data");

    const events = await response.json();
    allEvents = events; // ✅ Save to global for filtering
    displayEvents(events);
  } catch (err) {
    console.error("Error loading events:", err);
    document.getElementById("eventList").innerHTML = "<p>Could not load events.</p>";
  }
}

function displayEvents(events) {
  const container = document.getElementById("eventList");
  container.innerHTML = ""; // Clear previous content

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <h3>${event.title}</h3>
      <time datetime="${event.date}">${new Date(event.date).toDateString()}</time>
      <p>${event.description}</p>
      <p><strong>Location:</strong> ${event.location}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchEvents();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filtered = allEvents.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      );
      displayEvents(filtered);
    });
  }
});

// Footer date updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;
