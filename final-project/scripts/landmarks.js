// scripts/landmarks.js

const container = document.getElementById('landmark-container');
const map = L.map('map').setView([7.5, 4.5], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

async function loadLandmarks() {
  try {
    const response = await fetch('data/landmarks.json');
    const landmarks = await response.json();

    landmarks.forEach(landmark => {
      // Add marker
      L.marker([landmark.latitude, landmark.longitude])
        .addTo(map)
        .bindPopup(`<strong>${landmark.name}</strong><br>${landmark.address}`);

      // Create card
      const card = document.createElement('section');
      card.className = 'card';
      card.innerHTML = `
        <img src="${landmark.image}" alt="${landmark.name}" loading="lazy">
        <h2>${landmark.name}</h2>
        <address>${landmark.address}</address>
        <p>${landmark.description}</p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading landmarks:', error);
    container.innerHTML = '<p class="error">Failed to load landmarks.</p>';
  }
}

loadLandmarks();

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;
