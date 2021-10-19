const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  links.classList.contains("show-links")
    ? links.classList.remove("show-links")
    : links.classList.add("show-links");
});
