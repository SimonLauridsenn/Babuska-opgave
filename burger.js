const knapper = document.querySelector(".toggle_knap");
const nav = document.querySelector(".navburger");

knapper.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    knapper.classList.add("open");
  } else {
    knapper.classList.remove("open");
  }
}
