$(function () {
	$('.bookinfo_main')
		.on('init', function (event, slick) {})
		.slick({
			infinite: true,
			slidesToShow: 1,
			arrows: false,
			fade: true,
			asNavFor: '.bookinfo_thumbnails',
			focusOnSelect: true,
			lazyLoad: 'ondemand',
			variableWidth: false,
			swipeToSlide: true,
			autoplay: false,
			speed: 1000,
			cssEase: 'ease-in-out',
		});

	$('.bookinfo_thumbnails').slick({
		infinite: true,
		slidesToShow: 4,
		asNavFor: '.bookinfo_main',
		vertical: true,
		focusOnSelect: true,
		autoplay: false,
		centerMode: false,
		arrows: false,
		lazyLoad: 'ondemand',
		variableWidth: false,
	});
});
