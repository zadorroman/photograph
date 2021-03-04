'use strict';

(function ($) {
	$(document).ready(function () {
		// Code


		$('.carousel').carousel({
			interval: false
		})

		// Fancybox	start -----------------------------------------

		$('.gallery__photo').fancybox({
			buttons: [ //настройки кнопок 
				"fullScreen",
				"download",
				"thumbs",
				"close",
				"slideShow",
			],
			animationEffect: 'zoom-in-out', //вид анимации
			animationDuration: 800, //задержки
			transitionEffect: 'tube', //когда нажимаешь на стрелочку в галерее ефект тюба
			transitionDuration: 800, //задержка
			loop: true, //повторение
			infobar: true,
			slideShow: {
				autoStart: false,
				speed: 3000
			},

		});

		// Fancybox	end -------------------------------------------

	});
})(jQuery);
