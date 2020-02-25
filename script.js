$(document).ready(function(){


  /* toggler btn */
$('.navbar-toggler').click(function(){

  $('navbar-toggler').toggleClass('change')
})
//sticky navbar less paddin
$(window).scroll(function(){

  let position = $(this).scrollTop();
  
  if(position >= 718){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
  } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
  }
})


//smooth scroll
$('.nav-item a, .header-link, #back-to-top').click(function(link){
  link.preventDefault();


  let target = $(this).attr('href');

  $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
  }, 3000);
})


      //back to top
      //Get the button:
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

//ripples
  $("#header, .info").ripples({
    dropRadius: 1,
    perturbance: 0.06,
}); 
/* magnific popup */
$('.parent-container').magnificPopup({
  delegate: 'a',
  type: 'image',

  //gallery
  gallery:{
      enabled: true
  }
});

});
