const price = prompt('amount of money');
const discount = prompt('discount');
const withDiscount = (price - price / 100 * discount).toFixed(2);
const saved = (price / 100 * discount).toFixed(2);
if (price < 0) {
	console.log('Invalid data');
} else {
	console.log('Price with discount: ' + withDiscount, 'Saved: ' + saved, 'Discount: ' + discount + ' %');
}