// === Footer Dates ===
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;
// Load JSON data and create cards
fetch('data/items.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector("#card-container");
    container.innerHTML= "";
    data.forEach(item => {
      const card = document.createElement("section");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name} image" loading="lazy" width="300" height="200">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
         <button>Learn More</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading JSON data:", error);
  });
