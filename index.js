// Attach the scroll event handler to the window
$(window).on("scroll", function() {
    // Get the current window width
    var width = $(window).width();
  
    if (width > 800) {
        if ($(document).scrollTop() > 40) {


            
        } else {



        }
    }

});


/* window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  let maxOffset = window.innerHeight*0.1;
  let parallaxContainer = document.querySelector('.parallax-container');
  
  // Add conditions here
  if (offset < maxOffset ) { // Example condition: only apply parallax effect if scroll position is less than 500 pixels
    parallaxContainer.style.backgroundPositionY = -offset * 2 + 'px';
  } else {
    // Reset background position or do something else when condition is not met
    parallaxContainer.style.backgroundPositionY = -maxOffset * 2 + 'px';
  }
}); */

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  let maxOffset = window.innerHeight*0.1;
  let parallaxContainer = document.querySelector('.parallax-container');
  
    parallaxContainer.style.backgroundPositionY = -offset * 0.5 + 'px';

});


function setBackgroundSize() {
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    let backgroundSize; // Declare backgroundSize variable here
	let heightRatio = 0.7;

    if (viewportWidth > (viewportHeight*heightRatio/3*8)) {
        backgroundSize = viewportWidth + 'px' + ' auto'; // Note the space before 'auto'
    } else {
        backgroundSize = 'auto ' + (viewportHeight * heightRatio) + 'px';
    }
    
    document.querySelector('.parallax-container').style.backgroundSize = backgroundSize;
}

// Call setBackgroundSize() at the beginning of the page loading
setBackgroundSize();

// Update background size on window resize
window.addEventListener('resize', setBackgroundSize);


















function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
  