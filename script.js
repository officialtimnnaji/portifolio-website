// =============================
//  LuxuryNad Portfolio Script
// =============================

// Theme Toggle
const toggle = document.createElement("button");
toggle.className = "theme-toggle";
toggle.innerHTML = "🌙";
document.body.appendChild(toggle);

const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);
if (currentTheme === "light") toggle.innerHTML = "☀️";

toggle.addEventListener("click", () => {
  const newTheme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggle.innerHTML = newTheme === "light" ? "☀️" : "🌙";
});

// Projects
const projects = [
  {
    name: "Pharos Network",
    role: "Regional Lead — grew regional engagement and organized local events.",
    link: "https://x.com/pharos_network",
  },
  {
    name: "Coraluna",
    role: "Moderator — community moderation and engagement initiatives.",
    link: "https://x.com/0xcoraluna",
  },
  {
    name: "VelixoMarket",
    role: "Moderator — community support and campaign coordination.",
    link: "https://x.com/velixomarket",
  },
  {
    name: "ZentraFi",
    role: "Moderator — moderation and growth initiatives.",
    link: "https://x.com/zentrafi",
  },
];

const projectContainer = document.querySelector(".projects-list");
projectContainer.innerHTML = "";

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project";
  card.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.role}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectContainer.appendChild(card);
});

// Fade-in Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach((section) => observer.observe(section));
