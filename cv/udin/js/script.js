$(document).ready(function (){

	$(".accordion-button").next().hide();

	$(".switcher").click(function(){
		$(this).siblings().removeClass("viewbox-active");
		$(this).addClass("viewbox-active");

		var elementName = $(this).attr("name");
		$("#viewbox-content").removeClass();
		$("#viewbox-content").addClass("to-"+elementName);
		
	});

	$(window).scroll(function(){

		var interestsPosition = $("#interests").offset().top - 20;
		var screenPosition = $(window).scrollTop();


		if(screenPosition >= interestsPosition){

			setTimeout(function(){
				$(".webdev").removeClass("hide-card");
			}, 300);

			setTimeout(function(){
				$(".music").removeClass("hide-card");
			}, 600);

			setTimeout(function(){
				$(".dogs").removeClass("hide-card");
			}, 900);
		}
	});

	
	$(".scroller").click(function(e) {
	    e.preventDefault();
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000 );
	});

	$(".accordion-button").click(function(){

		var check = $(this).next().is(":hidden");

		if(check){
			$(".accordion-button").next().slideUp(500);
			$(this).siblings().removeClass("accordion-active");
			$(this).addClass("accordion-active");
			$(this).next().slideDown(500);
		} else {
			$(this).next().slideUp(500);
			$(this).removeClass("accordion-active");
		}
	});

});