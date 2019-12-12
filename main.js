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


  $(".pleadings").click(function() {
    $(".pleadings .circle-bg img").toggleClass("point-down");
    $(".pleading-docs-container").slideToggle();
  })

  $(".record").click(function() {
    $(".record .circle-bg img").toggleClass("point-down");
    $(".record-docs-container").slideToggle();
  })

  $(".reports").click(function() {
    $(".reports .circle-bg img").toggleClass("point-down");
    $(".reports-docs-container").slideToggle();
  })

  $(".motion").click(function() {
    $(".motion .circle-bg img").toggleClass("point-down");
    $(".motion-docs-container").slideToggle();
  })

  $(".amended").click(function() {
    $(".amended .circle-bg img").toggleClass("point-down");
    $(".amended-docs-container").slideToggle();
  })

  $(".certs").click(function() {
    $(".certs .circle-bg img").toggleClass("point-down");
    $(".certs-docs-container").slideToggle();
  })
  
});

