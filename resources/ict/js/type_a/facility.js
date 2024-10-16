$(document).ready(function () {
	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical', // 세로 슬라이드 설정
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var initialFloor = '1F';
	$('.selected_floors').text(initialFloor);

	setTimeout(() => {
		$('.selected_floors').addClass('show');
	}, 10); // 아주 짧은 시간 후에 실행

	$('.floors.selected img').attr('src', '../../../../../resources/ict/img/type_a/facility/yellow_divider.svg');

	$('.floors').on('click', function () {
		var selectedFloor = $(this).children('div').text();

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
