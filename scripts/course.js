const courses = [
    { code: "CSE 110", name: "Intro to Programming", type: "CSE", completed: true },
    { code: "WDD 130", name: "Web Fundamentals", type: "WDD", completed: true },
    { code: "CSE 111", name: "Programming with Functions", type: "CSE", completed: false },
    { code: "CSE 210", name: "Data Structures", type: "CSE", completed: false },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", type: "WDD", completed: true },
    { code: "WDD 231", name: "Frontend Development I", type: "WDD", completed: false }
  ];
  
  function displayCourses(filter = "all") {
    const container = document.getElementById("courses");
    container.innerHTML = "";
  
    const filtered = filter === "all" ? courses : courses.filter(c => c.type === filter);
    filtered.forEach(course => {
      const div = document.createElement("div");
      div.textContent = course.code;
      div.className = course.completed ? "completed" : "incomplete";
      container.appendChild(div);
    });
  }
  
  document.querySelectorAll("button[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      displayCourses(button.dataset.filter);
    });
  });
  
  window.addEventListener("DOMContentLoaded", () => displayCourses());
