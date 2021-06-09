let menuBtn = document.querySelector('.menu-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let navBar = document.querySelector('.navbar');

menuBtn.onclick = function () {
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  navBar.classList.add("active");
}

cancelBtn.onclick = function () {
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  navBar.classList.remove("active");
}