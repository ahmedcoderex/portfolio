const menu = document.getElementsByClassName("menu")[0];
const nav = document.getElementsByClassName("nav")[0];
menu.addEventListener("click", function () {
  nav.classList.toggle("active-nav");

  if ((nav.classList.contains("active-nav")))
    menu.innerHTML = `<img src="imgs/menu (1).webp" alt="menu-icon">`;
  else menu.innerHTML = `<img src="imgs/menu.webp" alt="menu-icon">`;
});
