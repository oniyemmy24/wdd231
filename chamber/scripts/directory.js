// === Footer Dates ===
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

// === DOM Elements ===
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory"); // More specific!

// === Fetch and Display Members ===
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    data.members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} Logo">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p><strong>Level:</strong> ${member.level}</p>
        <p><strong>category:</strong> ${member.category}</p>
      `;
      display.appendChild(card);
    });
  });

// === Toggle View Buttons ===
gridbutton.addEventListener("click", () => {
  display.classList.add("grid-view");
  display.classList.remove("list-view");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list-view");
  display.classList.remove("grid-view");
});
