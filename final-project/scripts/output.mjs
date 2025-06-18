export function setTitle(course) { 
    const title = document.querySelector("#courseTitle");
  title.textContent = `${course.name} | ${course.code}`;
}
export function renderSections(sections) {const list = document.querySelector("#sections");
  list.innerHTML = "";

  sections.forEach(section => {
    const item = document.createElement("li");
    item.textContent = `${section.sectionNum} | ${section.roomNum} | ${section.enrolled} enrolled | ${section.days} | ${section.instructor}`;
    list.appendChild(item);
  });
}