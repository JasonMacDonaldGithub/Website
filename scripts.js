$(document).ready(function(){
    $(".fa-facebook").hover(function(){
        $(this).css({"background-color": "#3B5998", color: '#ffffff'});
        }, function(){
        $(this).css({"background-color": "rgba(0,0,0,0)", color: "#ffffff"});
    });
	
	$(".fa-linkedin").hover(function(){
        $(this).css({"background-color": "#0073a4", color: '#ffffff'});
        }, function(){
        $(this).css({"background-color": "rgba(0,0,0,0)", color: "#ffffff"});
    });
	
	$(".fa-github").hover(function(){
        $(this).css({"background": "#c9510c", color: '#ffffff'});
        }, function(){
        $(this).css({"background-color": "rgba(0,0,0,0)", color: "#ffffff"});
    });
	
	$(".fa-instagram").hover(function(){
        $(this).css({"background-color": "#125688", color: '#ffffff'});
        }, function(){
        $(this).css({"background-color": "rgba(0,0,0,0)", color: "#ffffff"});
    });	

	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800);
		} // End if
	});
});		
