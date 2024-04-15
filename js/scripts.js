const titleElement = document.getElementById("title");
const buttonMenuElement = document.getElementById("button-menu");
const menuElement = document.getElementById("menu");

function changeColor() {
  if (titleElement.classList.contains("red")) {
    titleElement.classList.remove("red");
  } else {
    titleElement.classList.add("red");
  }
}

titleElement.addEventListener("click", changeColor);

function handleMenu() {
  if (menuElement.classList.contains("show")) {
    menuElement.classList.remove("show");
  } else {
    menuElement.classList.add("show");
  }
}

buttonMenuElement.addEventListener("click", handleMenu);
