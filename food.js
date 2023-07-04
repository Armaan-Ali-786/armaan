let bars = document.querySelector('.dot');
let navbar = document.querySelector('.navbar');
bars.onclick = () =>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('visible');
}

let glass = document.querySelector('.glass');
let search =document.querySelector('.search-form');
glass.onclick = () => {
    search.classList.toggle('visible1');
}
let remo = document.querySelector('.close');
remo.onclick = () => {
    search.classList.remove('visible1');
}
window.onscroll = () => {
    bars.classList.remove('fa-times');
    navbar.classList.remove('visible');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 5,
  centeredSlides: true,
  autoplay: {
    delay: 40500,
    disableOnInteraction: false
  },
  loop:true,
  breakpoints:{
      0:{
          slidesPerView:1,
      },
      640:{
          slidesPerView:2,
      },
      768:{
          slidesPerView:3,
      },
      1024:{
          slidesPerView:3,
      },
  }
});