(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);

$(document).ready(function(){
	//Mostrar menu mobil
	$('.ShowMenuMobile').on('click', function(){
		var mobileMenu=$('.NavBarP-Nav');
		var login=$('.Login');
		var body=$('body');
		if(mobileMenu.css('opacity')=="0"){
			mobileMenu.addClass('ShowBox');
			body.addClass('NoScroll');
			$(this).removeClass('fa-bars').addClass('fa-times');
		}else{
			mobileMenu.removeClass('ShowBox');
			if(login.css('opacity')=="1"){
				login.removeClass('ShowBox');
			}
			$(this).removeClass('fa-times').addClass('fa-bars');
			body.removeClass('NoScroll');
		}
	});
	//Mostrar login
	$('#login').on('click', function(e){
		e.preventDefault();
		var login=$('.Login');
		if(login.css('opacity')=="0"){
			login.addClass('ShowBox');
		}else{
			login.removeClass('ShowBox');
		}
	});
});


