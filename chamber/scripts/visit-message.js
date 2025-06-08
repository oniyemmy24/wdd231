// Select the message display element (add one in your HTML)
const messageArea = document.getElementById("visit-message");

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

// Get the last visit time from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Get current time
const currentTime = Date.now();

let message = "";

if (!lastVisit) {
  // First visit
  message = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate time difference in days
  const timeDifference = currentTime - Number(lastVisit);
  const daysBetween = Math.floor(timeDifference / MILLISECONDS_IN_A_DAY);

  if (daysBetween < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysBetween} days ago.`;
  }
}

// Save the current time as the new visit timestamp
localStorage.setItem("lastVisit", currentTime);

// Display the message
if (messageArea) {
  messageArea.textContent = message;
}
