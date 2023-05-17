
document.querySelector("#nav-mobile").addEventListener("click", () => {
  document.querySelector(".mobile-navbar").classList.toggle("active");
});


// fechar menu ao clicar
document.querySelectorAll(".mobile-navbar a").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".mobile-navbar").classList.remove("active");
  });
});