// Смещение
$('#click1').on('click', function () {
	if ($('#click2').hasClass('click3')) { // если класса нет
		$('#click2').removeClass('click3');
		$('.table2').slideUp(300);
		$('#click2').addClass('click4_1');
	}
	if (!$('#click1').hasClass('click1')) {
	$('#click1').removeClass('click2_1');
		$('#click1').addClass('click1');
		$('.table1').slideDown(300);
		$('#click1').removeClass('click2');
	}
	else {
		$('#click1').addClass('click2');
		$('#click1').removeClass('click1');
		$('.table1').slideUp(300);
	}
});
$('#click2').on('click', function () {
	if ($('#click1').hasClass('click1')) { // если класса нет
		$('#click1').removeClass('click1');
		$('#click1').addClass('click2_1');
		$('.table1').slideUp(300);
	}
	if (!$('#click2').hasClass('click3')) {
	$('#click2').removeClass('click4_1');
		$('#click2').addClass('click3');
		$('.table2').slideDown(300);
		$('#click2').removeClass('click4');
	}
	else {
		$('#click2').addClass('click4');
		$('#click2').removeClass('click3');
		$('.table2').slideUp(300);
	}

});
// Лампочка
$('#click1').on('click', function () {
	if ($('#green2').hasClass('clickled3')) { // если класса нет
		$('#green2').removeClass('clickled3');
		// $('#click2').addClass('click4');
	}
	if (!$('#green1').hasClass('clickled1')) {
		$('#green1').addClass('clickled1');
		$('#green1').removeClass('clickled2');
	}
	else {
		$('#green1').addClass('clickled2');
		$('#green1').removeClass('clickled1');
	}
});
$('#click2').on('click', function () {
	if ($('#green1').hasClass('clickled1')) { // если класса нет
		$('#green1').removeClass('clickled1');
		// $('#click1').addClass('click2');
	}
	if (!$('#green2').hasClass('clickled3')) {
		$('#green2').addClass('clickled3');
		$('#green2').removeClass('clickled4');
	}
	else {
		$('#green2').addClass('clickled4');
		$('#green2').removeClass('clickled3');
	}
});