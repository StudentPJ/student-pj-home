document.addEventListener('DOMContentLoaded', function () {

	// home 4 - task 2;

	function sum(x) {
		return function (y) {
			return x + y;
		}
	}

	var setX = +prompt('Введите первое число', 5);
	var setY = +prompt('Введите второе число', 7);

	alert(sum(setX)(setY));

});