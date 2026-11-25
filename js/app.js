(() => {
  "use strict";
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuButton");
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
  menuButton?.addEventListener("click", () => sidebar.classList.toggle("open"));
  document.querySelectorAll(".nav-link:not(.active), .mission-state, #exploreButton").forEach(item => {
    item.addEventListener("click", event => {
      if (item.tagName === "A") event.preventDefault();
      showToast("Este módulo será desenvolvido na próxima etapa.");
      sidebar.classList.remove("open");
    });
  });
  document.querySelector(".primary-button")?.addEventListener("click", () => {
    showToast("Bem-vindo ao Sistema Solar. A exploração interativa será ativada em breve.");
  });
})();