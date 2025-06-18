// slider.js
let currentSlide = 0;

export function initSlider(images, containerSelector, interval = 3000) {
  const container = document.querySelector(containerSelector);
  if (!container || !images.length) return;

  function showSlide(index) {
    container.innerHTML = `
      <img src="${images[index]}" alt="Historic image ${index + 1}" class="slide-img">
    `;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, interval);
}
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;
