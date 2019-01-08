function dots_left(){
	var leftD = $('#reviews_slider').width() / 2 - $('#reviews_slider .owl-dots').width() / 2;

	$('#reviews_slider .owl-dots').css('left', leftD);
}

dots_left();


$(window).resize(function(){
	dots_left();
});

$('.slider__addr__item__addr').click(function(){
	var id = $(this).attr('maps');
	
	$('.maps__map').hide();
	
	$('#' + id).fadeIn(200);
});


 
$("#to__top").hide();

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 720) {
			$('#to__top').fadeIn();
		} else {
			$('#to__top').fadeOut();
		}
	});
});

$("#to__top").click(function(){
	$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
});

$('.float__menu__close').click(function(){
	$('.float__menu').animate({left: -270}, 300);
});
 
$('.show__menu').click(function(){
	$('.float__menu').animate({left: 0}, 300);
});

$('[popup-target]').click(function(e) {
	var el = $(this);
	var target = el.attr('popup-target');

	$('.overlay').fadeIn(200, function(){
		$('.popup.'+target).fadeIn(200);
		var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
		var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
		left = left - 38;
		$('.popup.'+target).css('top', top).css('left', left);
	})
	
	
	return false;
});

$('.overlay, .close1').click(function(e) {
	var popup = $('.popup:visible');
	popup.fadeOut(200, function(){
		$('.overlay').fadeOut(200);
	});
	return false;
});

function keyExit(e){
	if(e.keyCode == 27){

		var popup = $('.popup:visible');
		popup.fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});				
			
	}
}

addEventListener("keydown", keyExit);
 
jQuery(function(){
	jQuery(".phone").mask("+7(999) 999-9999");
});

$(function () {
	$('#datetimepicker1').datetimepicker(
      {language: 'ru'}
    );
	
	$('#datetimepicker2').datetimepicker(
      {language: 'ru'}
    );	
});
 
$(document).ready(function(){

	$("#reviews_slider").owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 0,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: true,
		nav: false,
		navText: ['', ''],	
    });	
	
	$('#slider__poster').owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:1
			},			
			600:{
				items:1
			},
			991:{
				items:1
			}		
		},
		margin: 15,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		autoWidth:false,
		nav: true,
		navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],	
    });
	
	$('#guests_reviews').owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:2
			},
			991:{
				items:3
			}		
		},
		margin: 0,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],	
    });	
	
	$('#slider_restaurant').owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:2
			},
			991:{
				items:3
			}		
		},
		margin: 0,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],	
    });	

	$('#slider__menu').owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:2
			},
			991:{
				items:3
			}		
		},
		margin: 0,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],	
    });	
	
	$('#slider__addr').owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:2
			},
			991:{
				items:4
			}		
		},
		margin: 0,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],	
    });	

	$('#slider__restaurants').owlCarousel({
        responsive:{ 
			0:{
				items:1
			},
			570:{
				items:2
			},			
			600:{
				items:2
			},
			991:{
				items:4
			}		
		},
		margin: 0,
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		touchDrag: true,	
		dots: false,
		nav: true,
		navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],	
    });		
});