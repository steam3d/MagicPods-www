document.addEventListener("DOMContentLoaded", () => {
  function setHash() {
    window.location.hash = "help";
    window.scrollTo({
      top: document.getElementById("help").offsetTop
    });
    window.removeEventListener("scroll", setHash);
  }
  if (window.pageYOffset === 0 && window.location.hash !== "help") {
    window.addEventListener("scroll", setHash);
  }
});
