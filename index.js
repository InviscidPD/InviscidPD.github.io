// Attach the scroll event handler to the window
$(window).on("scroll", function() {
    // Get the current window width
    var width = $(window).width();
  
    if (width >= 1) {
        if ($(document).scrollTop() > 40) {
            $("#header").css("background", "#fff");
            $("#header").css("color", "#000");
            $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding", "1vh 4vw");
			$("#navigation").css("vertical-align", "middle");
            $("#logo img").css("width", "10px");
            $("#logo img").attr("src", "images/Logo/Small.svg"); // Corrected image source change
            $("#navigation a").hover(function() {
                $(this).css("border-bottom", "2px solid rgb(255, 44, 90)");
            }, function() {
                $(this).css("border-bottom", "2px solid transparent");
            });
        } else {
            $("#header").css("background", "transparent");
            $("#header").css("color", "#fff");
            $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding", "6vh 4vw");
			$("#navigation").css("vertical-align", "bottom");
            $("#logo img").css("width", "90px");
            $("#logo img").attr("src", "images/Logo/InviscidLogo.svg"); // Corrected image source change
            $("#navigation a").hover(function() {
                $(this).css("border-bottom", "2px solid #fff");
            }, function() {
                $(this).css("border-bottom", "2px solid transparent");
            });
        }
    }
});



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
  