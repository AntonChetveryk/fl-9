function getClosestToZero() {
	let currentNumber = arguments[0],
		num = 0,
		diff = Math.abs(num - currentNumber);

	for (var i = 0; i < arguments.length; i++) {
		var newdiff = Math.abs(num - arguments[i]);
		if (newdiff < diff) {
			diff = newdiff;
			currentNumber = arguments[i];
		}
	}
	return currentNumber;
}

