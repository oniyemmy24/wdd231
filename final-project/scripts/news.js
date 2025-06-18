document.addEventListener("DOMContentLoaded", () => {
  const newsData = [
    {
      date: "1 Jul 25",
      title: "Blue plaque for Barbara Pym’s Pimlico home",
      description:
        "The home that saw the beginnings of the celebrated novelist’s literary career is to be marked with a new plaque.",
      image: "images/volunteer.webp"
    },
    {
      date: "31 Jun 25",
      title: "Appeal for return of iconic bell to Shrewsbury Flaxmill Maltings",
      description:
        "Osun Heritage will open the Shrewsbury Flaxmill Maltings site from tomorrow — and experts say now is the time to return its lost iconic bell.",
      image: "images/volunteer1.webp"
    },
    {
      date: "11 Jul 25",
      title: "Three pioneering member receive blue plaques",
      description:
        "New blue plaques celebrate the BBC’s first Black pioneer producer and trailblazing women interior designers.",
      image: "images/volunteer2.webp"
    }
  ];

  const container = document.getElementById("newsContainer");

  newsData.forEach(news => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <div class="news-content">
        <time>${news.date}</time>
        <h3>${news.title}</h3>
        <p>${news.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
});
