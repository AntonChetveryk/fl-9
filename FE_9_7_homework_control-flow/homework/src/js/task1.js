let login = prompt('Enter your login', ''),
	password,
	d = new Date(),
	n = d.getHours();

if (login === null || login === '') {
	alert('Canceled');
} else if (login.length < 4) {
	alert(' I don t know any users having name length less than 4 symbols')
} else if (login === 'User') {
	password = prompt('Enter yout password');
	/*Password*/
	if (password === null || password === '') {
		alert('Canceled');
	} else if (password === 'SuperUser') {
		if(n >= 20){
			alert('Good evening');
		}else{
			alert('Good day');
		}
	} else {
		alert('Wrong password');
	}
	/*Password*/
} else {
	alert('I don’t know you');
}

