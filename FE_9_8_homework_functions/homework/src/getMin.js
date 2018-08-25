function getMin() {
	let argumentsLenght = arguments.length,
		minArgument = arguments[0],
		i = 0;
	for (; i < argumentsLenght; i++) {
		if (arguments[i] < minArgument) {
			minArgument = arguments[i];
		}
	}
	return minArgument;
}