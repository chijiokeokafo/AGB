$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:60000,
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
      $("#regulatory-btn, #public-btn, #tort-btn").removeClass("this-page");
      $('#commercial-btn').addClass("this-page");
    }, 200)
  });

  $("#regulatory-btn").click(function(){
    $(".notable-cases").fadeOut();
    setTimeout( function () {
      $("#regulatory").fadeIn();
      $("#commercial-btn, #public-btn, #tort-btn").removeClass("this-page");
      $('#regulatory-btn').addClass("this-page");
    }, 210)
  });

  $("#public-btn").click(function(){
    $(".notable-cases").fadeOut();
    setTimeout( function () {
      $("#public").fadeIn();
      $("#commercial-btn, #regulatory-btn, #tort-btn").removeClass("this-page");
      $('#public-btn').addClass("this-page");
    }, 220)
  });

  $("#tort-btn").click(function(){
    $(".notable-cases").fadeOut();
    setTimeout( function () {
      $("#tort").fadeIn();
      $("#commercial-btn, #public-btn, #regulatory-btn").removeClass("this-page");
      $('#tort-btn').addClass("this-page");
    }, 230);
  });
  

  

  $("#mobile-nav-button").click(function(e) {
      $(".nav-container").toggleClass("nav-open");  
  });

    
  $('#geoff-adair').click( function() {
    $('#geoff-modal').addClass('md-show');
  });
  
  $('.md-close').on('click', function() {
    $('.md-modal').removeClass('md-show');
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
// var widgetCSS = "" +
//     "body{font-family: 'Shadows Into Light', cursive;}" +
//     ".timeline-Header{background-color: purple; border-top-left-radius: 10px; border-top-right-radius: 10px;}" +
//     ".timeline-Header-title{color: white;}" +
//     ".timeline-Tweet-text{color: red;}";

// function paint(){
//   var w = document.getElementById("twitter-widget-0").contentDocument;
  
//   var s = document.createElement("style");
//   s.innerHTML = widgetCSS;
//   s.type = "text/css";
//   w.head.appendChild(s);
// }


// **************** AIzaSyDlyT1TfJRuZqSSTROfPF3r0Xm6JXE4nx4 = GOOGLE MAPS API KEY*************

