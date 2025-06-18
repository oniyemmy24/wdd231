// main.js
// Loads shared components, sets date, and nav behavior
import { loadEvents } from './modules/events.js';
import { loadMap } from './modules/map.js';
import { showModal } from './modules/modal.js';

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

export function initNavToggle(buttonSelector, navSelector) {
  const button = document.querySelector(buttonSelector);
  const nav = document.querySelector(navSelector);
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
