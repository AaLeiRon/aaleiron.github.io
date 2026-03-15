function getLang() {
  return localStorage.getItem("siteLang") || "de";
}
function setLang(lang) {
  localStorage.setItem("siteLang", lang);
  renderPage();
}
function getNested(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}
function applyTextContent(lang) {
  const dict = SITE_CONTENT[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-text]").forEach((el) => {
    const key = el.getAttribute("data-text");
    const value = getNested(dict, key);
    if (typeof value === "string") el.textContent = value;
  });
}
function createCard(item, extraClass = "") {
  const article = document.createElement("article");
  article.className = `card tilt ${extraClass}`.trim();
  article.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
  return article;
}
function createBlogCard(item) {
  const a = document.createElement("a");
  a.className = "card blog-card tilt";
  a.href = item.href;
  a.innerHTML = `<p class="meta">${item.meta}</p><h3>${item.title}</h3><p>${item.text}</p>`;
  return a;
}
function renderCollection(id, items, factory) {
  const target = document.getElementById(id);
  if (!target) return;
  target.innerHTML = "";
  items.forEach((item) => target.appendChild(factory(item)));
}
function initLanguageButtons() {
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-switch")));
  });
}
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
function initTilt() {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}
function renderPage() {
  const lang = getLang();
  applyTextContent(lang);
  renderCollection("home-skills", HOME_SKILLS[lang], createCard);
  renderCollection("home-projects", HOME_PROJECTS[lang], createCard);
  renderCollection("about-skills", ABOUT_SKILLS[lang], createCard);
  renderCollection("about-interests", ABOUT_INTERESTS[lang], createCard);
  renderCollection("projects-list", PROJECTS_LIST[lang], createCard);
  renderCollection("blog-list", BLOG_POSTS[lang], createBlogCard);
  initTilt();
}
document.addEventListener("DOMContentLoaded", () => {
  initLanguageButtons();
  initReveal();
  renderPage();
});
