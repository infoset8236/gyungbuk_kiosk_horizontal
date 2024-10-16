$(document).ready(function () {
	$('.navigation_wrapper').click(function () {
		$('.navigation_menu, .navigation_caption').removeClass('active');

		$('.navigation_divider').css('display', 'none');

		$('.navigation_icon').each(function () {
			const src = $(this).attr('src').replace('active_', '');
			$(this).attr('src', src);
		});

		$(this).find('.navigation_menu, .navigation_caption').addClass('active');

		$(this).find('.navigation_divider').css('display', 'block');

		const clickedIcon = $(this).find('.navigation_icon');
		const src = clickedIcon.attr('src');
		clickedIcon.attr('src', src.replace(/(.*\/)([^\/]+)$/, '$1active_$2'));
	});
});
