//ie fix
if(!(window.console && console.log)) {
	console = {
		log: function(){},
		debug: function(){},
		info: function(){},
		warn: function(){},
		error: function(){}
	};
}

$(function () {

	//setup slider
	var slider = (function() {

		var $el = $('#slider');

		$el.slick({
			dots: true
		});

		var $innerWrap = $el.find('.slick-track');
		var $slideContent = $el.find('.slider__slide-content');

		setupSlideHeight();

		$(window).resize(function() {
			setupSlideHeight();
		});
		
		function setupSlideHeight() {
			$slideContent.css('height', 'auto' );
			var $innerWrapHeight = $innerWrap.height();
			$slideContent.css('height', $innerWrapHeight + 'px' );
		}

	})();


	//setup main-menu dropdowns
	var mainMenu = (function () {

		var $el = $('#main-menu'),
			$mainMenuDropdown = $el.find('.main-menu__dropdown'),
			$mainMenuSecondLevelDropdown = $el.find('.main-menu__submenu-dropdown');

		var subMenu = '.main-menu__submenu',
			secondSubMenu = '.main-menu__second-submenu';

		$mainMenuDropdown.on('mouseenter focusin', function() {
			if ($(window).width() > 768) {
				showMenu($(this), subMenu);
			}
		});

		$mainMenuDropdown.on('mouseleave focusout', function() {
			if ($(window).width() > 768) {
				hideMenu($(this), subMenu);
			}
		});

		$mainMenuSecondLevelDropdown.on('mouseenter focusin', function() {
			if ($(window).width() > 768) {
				showMenu($(this), secondSubMenu);
			}
		});

		$mainMenuSecondLevelDropdown.on('mouseleave focusout', function() {
			if ($(window).width() > 768) {
				hideMenu($(this), secondSubMenu);
			}
		});

		function showMenu(target, menuname) {
			target.find(menuname).stop().slideDown();
		}

		function hideMenu(target, menuname) {
			target.find(menuname).stop().slideUp();
		}

	})();


	//setup mobile nav
	var mobilenav = (function () {

		var $navbtn = $('#navbtn'),
			$navbar = $('#navbar');

		$navbtn.on('click', function(event) {
			event.preventDefault();
			$navbar.slideToggle();
		});

		$(window).resize(function() {
			if ($(window).width() > 768) {
				$navbar.show();
			} else {
				$navbar.hide();
			}
		});

	})();

});



