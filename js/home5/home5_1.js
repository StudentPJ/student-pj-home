document.addEventListener('DOMContentLoaded', function() {

	// home 5 - task 1;

	function flip(string) {

		if (typeof string === 'string') {

			var initialString = string;
			var functionResult = string.split('').reverse().join('');

			return 'Function input string: ' + initialString + '\n' + 'Function result: ' + functionResult;
		}

	}

	console.log(flip('javascript'));

});