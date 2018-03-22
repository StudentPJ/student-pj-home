window.onload = function() {

	// home 4 - task 3;

	function createStorage() {
		var sum = 0;

		return storage;

		function storage(x) {

			if(x === undefined) {
				return sum = 0;
			}

			return sum = sum + x;
		}
	}

	var storage = createStorage();

	console.log('storage(1) - result', storage(1));
	console.log('Expected result 1');
	console.log('                  ');
	console.log('storage(10) - result', storage(10));
	console.log('Expected result 11');
	console.log('                  ');
	console.log('storage(2) - result', storage(2));
	console.log('Expected result 13');
	console.log('                  ');
	console.log('storage(-5) - result', storage(-5));
	console.log('Expected result 8');
	console.log('                  ');
	console.log('storage(0) - result', storage(0));
	console.log('Expected result 8');
	console.log('                  ');
	console.log('storage() - result', storage());
	console.log('Expected result 0');
	console.log('                  ');
	console.log('storage(2) - result', storage(2));
	console.log('Expected result 2');
	console.log('                  ');
	console.log('storage(-5) - result', storage(-5));
	console.log('Expected result -3');

};