const numOne = 1;
const numFive = 5;
const numTen = 10;

let priceWin = 0;
let startGame = confirm('Do you want to play a game?');

if (!startGame) {
	alert('You did not become a millionaire, but can.');
}

while (startGame) {
	let attempt = 3;
	let n = numFive;
	let number = Math.floor(Math.random() * (n + numOne));
	let priceMax = numTen;
	let price = priceMax;

	while (attempt > 0) {
		let user = prompt(`Enter a number from 0 to ${n}\n` +
			`Attempts left: ${attempt}\n` +
			`Total prize: ${priceWin} $\n` +
			`Possible prize on current attempt: ${price} $`);
		if (!isNaN(user) && parseFloat(user) === parseInt(user) && parseInt(user) === number) {
			priceWin += price;
			console.log(`Congratulation! Your prize is: ${price} $`);
			let newGame = confirm('Do you want to continue?');
			if (newGame) {
				number = Math.floor(Math.random() * (n + numOne));
				attempt = 3;
				priceMax *= 3;
				price = priceMax;
				n *= 2;
			} else {
				console.log(`Thank you for a game. Your prize is: ${priceWin} $`);
				startGame = confirm('Do you want to play again?');
				n = numFive;
				number = Math.floor(Math.random() * (n + numOne));
				priceWin = 0;
			}
		} else {
			attempt--;
			price = Math.floor(price / 2);
			if (attempt < numOne) {
				console.log(`Thank you for a game. Your prize is: ${priceWin} $`);
				startGame = confirm('Do you want to play again?');
				priceWin = 0;
			}
		}
	}
}