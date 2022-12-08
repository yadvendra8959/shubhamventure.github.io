let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');



var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});

function sendEmail(){

  Email.send({
// Host : "smtp.elasticemail.com",
// Username : "yadvendra8959@gmail.com",
// Password : "4A86141793627238915836557AB355BB068A",
  SecureToken : "e3518621-0a49-4d6e-8a53-494ccba243e6",
  To : 'shubhan777@gmail.com',
  From : document.getElementById("email").value,
  Subject : document.getElementById("subject").value,
  Body : "name :" +document.getElementById("name").value
  + "<br> Email: " + document.getElementById("email").value
  + "<br> Number: " + document.getElementById("number").value
  + "<br> Message: " + document.getElementById("message").value
}).then(
      message => alert("Message Sent Successfully")
);
}