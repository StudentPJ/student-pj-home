document.addEventListener('DOMContentLoaded', function() {

	// home 5 - task 3;

	function encrypt(string, shift) {

		var russian_alphabet_arr = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
		var resultArr = [];
		var resultValue = [];
		var resultString = '';

		if(typeof string === 'string' && typeof shift === 'number') {
			string.split('').map(function(value) {
				var idx = russian_alphabet_arr.indexOf(value);
				resultArr.push(idx + shift);
			});
			resultArr.map(function(value) {
				resultValue.push(russian_alphabet_arr[value]);
			});

			resultString = resultValue.join("");

		} else {
			console.warn('Введите корректные данные');
		}

		// return resultArr;
		return resultString;

	}

	console.log(encrypt('синхрофазотрон', 3));

});