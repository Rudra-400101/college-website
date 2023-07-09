
// hamberger navbar

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("actives");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("actives");
  });
}

// make feature card clickable

let goodwill = document.getElementsByClassName("goodwill");
goodwill[0].onclick=()=>{
  location = "admission.html"
}
goodwill[1].onclick=()=>{
  location = "admission.html"
}
goodwill[2].onclick=()=>{
  location = "admission.html"
}
goodwill[3].onclick=()=>{
  location = "admission.html"
}
goodwill[4].onclick=()=>{
  location = "admission.html"
}
goodwill[5].onclick=()=>{
  location = "admission.html"
}
// contact page get detail

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
