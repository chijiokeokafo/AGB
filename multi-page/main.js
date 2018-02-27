$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:6000,
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
  });

    
  $("#commercial-btn").click(function(){
    $(".notable-cases").fadeOut();
    setTimeout( function () {
      $("#commercial").fadeIn();
      $("#regulatory-btn, #public-btn, #tort-btn").css("color", "#144053");
      $('#commercial-btn').css("color", "#949696");
    }, 200)
  });

  $("#regulatory-btn").click(function(){
    $(".notable-cases").fadeOut();
    setTimeout( function () {
      $("#regulatory").fadeIn();
      $("#commercial-btn, #public-btn, #tort-btn").css("color", "#144053");
      $('#regulatory-btn').css("color", "#949696");
    }, 210)
  });

  $("#public-btn").click(function(){
    $(".notable-cases").fadeOut();
    setTimeout( function () {
      $("#public").fadeIn();
      $("#commercial-btn, #regulatory-btn, #tort-btn").css("color", "#144053");
      $('#public-btn').css("color", "#949696");
    }, 220)
  });

  $("#tort-btn").click(function(){
    $(".notable-cases").fadeOut();
    setTimeout( function () {
      $("#tort").fadeIn();
      $("#commercial-btn, #public-btn, #regulatory-btn").css("color", "#144053");
      $('#tort-btn').css("color", "#949696");
    }, 230);
  });
  

  

  $("#mobile-nav-button").click(function(e) {
      $(".nav-container").toggleClass("nav-open");
      
  });

  // $("ul.nav-container").find("a").click(function(e) {
  //     e.preventDefault();
  //     var section = $(this).attr("href");
  //     $("html, body").animate({
  //         scrollTop: $(section).offset().top
  //     });

  //     $(".nav-container").toggleClass("nav-open");
  // });

});



