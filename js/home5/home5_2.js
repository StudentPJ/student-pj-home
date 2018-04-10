document.addEventListener('DOMContentLoaded', function() {

	// home 5 - task 2;

	var array = [1, 2, 3, 4, 5, 6, {}, '7', 7 ,8];

	function filter(arr, callback) {
		var newArr = [];

		for(var i = 0; i < arr.length; i++) {
			if(callback(arr[i], i, arr) === true) {
				newArr.push(arr[i]);
			}
		}

		return newArr;
	}

	var arr2 = filter(array, function (item) {
		return item > 3 && typeof item === 'number';
	});

	var arr3 = filter(array, function (item) {
		return typeof item === 'number' || typeof item === 'object';
	});

	console.log(arr2);
	console.log(arr3);

});