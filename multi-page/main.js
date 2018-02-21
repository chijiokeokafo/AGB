$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

  

  $("#mobile-nav-button").click(function(e) {
      $(".nav-container").toggleClass("nav-open");
      
  });

  $("ul.nav-container").find("a").click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top
      });

      $(".nav-container").toggleClass("nav-open");
  });

});



