document.addEventListener("DOMContentLoaded", function () {
  const b = document.querySelector(".menu-button"),
    n = document.querySelector(".nav-links");
  if (b && n) {
    b.addEventListener("click", function () {
      const open = n.classList.toggle("is-open");
      b.setAttribute("aria-expanded", open);
    });
    n.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        n.classList.remove("is-open");
        b.setAttribute("aria-expanded", "false");
      }),
    );
  }
  const footer = document.querySelector(".footer-grid");
  if (footer && !footer.querySelector(".social-links")) {
    footer.insertAdjacentHTML(
      "beforeend",
      '<div><span class="footer-title">شبکه‌های اجتماعی</span><div class="social-links"><a class="social-link telegram" href="https://t.me/gheleghstudio" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 3.5 18.6 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.3L6 13.5l-5-1.6c-1.1-.4-1.1-1.1.2-1.6L20.6 3c.9-.3 1.6.2 1.1.5Z"/></svg></a><a class="social-link instagram" href="https://www.instagram.com/gheleghstudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 2h9.2A5.4 5.4 0 0 1 22 7.4v9.2a5.4 5.4 0 0 1-5.4 5.4H7.4A5.4 5.4 0 0 1 2 16.6V7.4A5.4 5.4 0 0 1 7.4 2Zm-.2 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm10.6 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 6.8A5.2 5.2 0 1 1 12 17.2 5.2 5.2 0 0 1 12 6.8Zm0 2A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z"/></svg></a></div></div>',
    );
  }
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    items.forEach((e) => e.classList.add("shown"));
    return;
  }
  new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("shown");
        }
      }),
    { threshold: 0.12 },
  ).observe &&
    items.forEach((e) =>
      new IntersectionObserver(
        (es) =>
          es.forEach(
            (x) => x.isIntersecting && x.target.classList.add("shown"),
          ),
        { threshold: 0.12 },
      ).observe(e),
    );
});
