let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");
let panels = document.querySelectorAll(".tab-panel");

indicator.style.width =
  tabs[0].getBoundingClientRect().with -
  tabs[0].parentElement.getBoundingClientRect().width +
  "px";
