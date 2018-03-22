window.onload = function() {

	// home 4 - task 4;

	function createStorage() {

		var sum = 0;

		var storage = {

			add: function (x) {
				return sum = sum + x;
			},
			subtract: function (x) {
				return sum = sum - x;
			},
			multiply: function (x) {
				return sum = sum * x;
			},
			divide: function (x) {
				return sum = sum / x;
			},
			get: function() {
				return sum;
			},
			set: function (x) {
				if(x === undefined) {
					return sum = 0;
				}

				return sum = x;
			}

		};

		return storage;

	}

	var storage = createStorage();

	console.log('storage.add(10) - result', storage.add(10));
	console.log('Expected result 10');
	console.log('                  ');
	console.log('storage.add(8) - result', storage.add(8));
	console.log('Expected result 18');
	console.log('                  ');
	console.log('storage.subtract(3) - result', storage.subtract(3));
	console.log('Expected result 15');
	console.log('                  ');
	console.log('storage.subtract(3) - result', storage.subtract(3));
	console.log('Expected result 12');
	console.log('                  ');
	console.log('storage.multiply(2) - result', storage.multiply(2));
	console.log('Expected result 24');
	console.log('                  ');
	console.log('storage.multiply(3) - result', storage.multiply(3));
	console.log('Expected result 72');
	console.log('                  ');
	console.log('storage.divide(2) - result', storage.divide(2));
	console.log('Expected result 36');
	console.log('                  ');
	console.log('storage.divide(3) - result', storage.divide(3));
	console.log('Expected result 12');
	console.log('                  ');
	console.log('storage.set() - result', storage.set());
	console.log('Expected result 0');
	console.log('                  ');
	console.log('storage.set(98) - result', storage.set(98));
	console.log('Expected result 98');
	console.log('                  ');
	console.log('storage.set(44) - result', storage.set(44));
	console.log('Expected result 44');
	console.log('                  ');
	console.log('storage.get() - result', storage.get());
	console.log('Expected result 44');
	console.log('                  ');
	console.log('storage.set(30) - result', storage.set(30));
	console.log('Expected result 30');
	console.log('                  ');
	console.log('storage.get() - result', storage.get());
	console.log('Expected result 30');
	console.log('                  ');

};