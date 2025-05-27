const spotlightContainer = document.querySelector("#spotlights");

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (response.ok) {
      const data = await response.json();
      displaySpotlights(data.members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log("Members fetch error:", error);
  }
}

function displaySpotlights(members) {
  const qualified = members.filter(member => member.membership === "Gold" || member.membership === "Silver");
  const selected = shuffleArray(qualified).slice(0, 3);

  spotlightContainer.innerHTML = "";
  selected.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><strong>Level:</strong> ${member.level}</p>
      <p><strong>category:</strong> ${member.category}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="${member.membership.toLowerCase()}-badge">${member.membership} Member</p>
    `;
    spotlightContainer.appendChild(card);
  });
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

getMembers();
