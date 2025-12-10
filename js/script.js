$(function () {
    $("#slideUpDown").click(function (){
       $(".div26").slideToggle(500);
    })
     
    $("#slideUpDown2").click(function (){
       $(".div27").slideToggle(500);
    })
    $("#slideUpDown3").click(function (){
       $(".div27").slideToggle(500);
    })
  

   
    
})
  jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
// ===================================
        (function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/31/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
  // autoplay -==============================
  $('.sliders').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 400,
  arrows:false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots:false,
      }
    }
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});
  // autoplay -==============================
  $('.sliders1').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
autoplay:true,
  autoplaySpeed: 1000,
  dots:true,
  prevArrow:'<i class="fa-solid fa-chevron-left button4"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right button5"></i>'
  
  
  
});
 AOS.init({
   debounceDelay:200000,
 }

 );

$('.sliders2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
autoplay:true,
  autoplaySpeed: 1000,
  dots:true,
  prevArrow:'<i class="fa-solid fa-chevron-left button7"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right button8"></i>'
  
  
  
});
