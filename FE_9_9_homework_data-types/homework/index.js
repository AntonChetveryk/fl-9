/*Task 1*/
function typeOf(param) {
	return typeof param
}

/*Task 2*/
function forEach(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i]);
	}
}

/*Task 3*/

function map(arr, fn) {
	var transformArr = [];

	forEach(arr, function (el) {
		transformArr.push(fn(el));
	});

	return transformArr;
}

/*Task 4*/

function filter(arr, fn) {
	var newArray = [];

	forEach(arr, function (el) {
		if (fn(el)) {
			newArray.push(el);
		}
	});

	return newArray;
}
/*Task 5*/
function getAdultAppleLovers(data) {
	return map(filter(data, function (el) {
		return el.age > 18 && el.favoriteFruit === 'apple';
	}), function (el) {
		return el.name;
	});
}
/*Task 6*/
function keys(obj) {
	var newArr = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			newArr.push(key);
		}
	}
	return newArr;
}
/*Task 7*/
function values(obj) {
	var newArr = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			newArr.push(obj[key]);
		}
	}
	return newArr;
}
/*Task 8*/
function showFormattedDate(date) {
	var shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	return 'It is ' + date.getDate() + ' of ' + shortMonthNames[date.getMonth()] + ', ' + date.getFullYear();
}