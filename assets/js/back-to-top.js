
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    scrollFunction();
  });

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  button.addEventListener("click", () => {
    backToTop();
  });

  const backToTop = () => {
    document.documentElement.scrollTop = 0;
  };
});