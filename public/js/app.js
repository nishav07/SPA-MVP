
    document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  loadPage("home");

  document.querySelectorAll("a[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      loadPage(page);
    });
  });

  function loadPage(page) {
    fetch(`/partials/${page}`)
      .then(res => res.text())
      .then(html => {
        content.innerHTML = html;
      })
      .catch(err => {
        content.innerHTML = `<p>Error loading page</p>`;
      });
  }
});
