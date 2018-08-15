const sideA = +prompt('First side of triangle'),
	sideB = +prompt('Second side of triangle'),
	angle = +prompt('Angle between A & B');
//	SIDE C
const angleSum = 180;
const angleRad = Math.PI / angleSum * parseFloat(angle);
const sideC = +Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(angleRad)).toFixed(2);

//	perimeter
const perimeter = sideA + sideB + sideC;
//	square
const halfP = (sideA + sideB + sideC) / 2;
const square = Math.round(Math.sqrt(halfP * (halfP - sideA) * (halfP - sideB) * (halfP - sideC)));


if (sideA < 0 || sideB < 0) {
	console.log('Invalid data');
} else {
	console.log('c length: ' + sideC, 'perimeter: ' + perimeter, 'Triangle square: ' + Math.round(square));
}