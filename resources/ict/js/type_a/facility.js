$(document).ready(function () {
	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var initialFloor = '1F';
	$('.selected_floors').text(initialFloor);

	$('.map img').attr('src', '../../../../../resources/ict/img/type_a/facility/map_1.png');

	setTimeout(() => {
		$('.selected_floors').addClass('show');
	}, 10);

	$('.floors.selected img').attr('src', '../../../../../resources/ict/img/type_a/facility/yellow_divider.svg');

	$('.floors').on('click', function () {
		var selectedFloor = $(this).children('div').text();

		var mapImageSrc = '';
		if (selectedFloor === '1F') {
			mapImageSrc = '../../../../../resources/ict/img/type_a/facility/map_1.png';
		} else if (selectedFloor === '2F') {
			mapImageSrc = '../../../../../resources/ict/img/type_a/facility/map_2.svg';
		} else if (selectedFloor === '3F') {
			mapImageSrc = '../../../../../resources/ict/img/type_a/facility/map_3.png';
		}

		$('.map img').attr('src', mapImageSrc);

		$('.selected_floors').removeClass('show');
		setTimeout(() => {
			$('.selected_floors').text(selectedFloor).addClass('show');
		}, 100);

		$('.floors').removeClass('selected');
		$('.floors img').attr('src', '../../../../../resources/ict/img/type_a/facility/divider.svg');

		$(this).addClass('selected');
		$(this).find('img').attr('src', '../../../../../resources/ict/img/type_a/facility/yellow_divider.svg');
	});
});

$(document).ready(function () {
	$('.slide-item').click(function () {
		$('#modal').fadeIn(300);
	});

	$('.close').click(function () {
		$('#modal').fadeOut(300);
	});

	$(window).click(function (event) {
		if ($(event.target).is('#modal')) {
			$('#modal').fadeOut(300);
		}
	});
});
