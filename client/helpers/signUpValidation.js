exports.first = function(first) {
	// console.log(first + ': ' + 'first validation function')
	// if(first === "") {
	// 	alert('wrong')
	// }
	// must be letters only
	console.log(/[a-zA-Z\s:]/.test(first));
	// document.prepend() the error to something bellow the text box
}

exports.last = function(last) {
	// console.log(last + ': ' + 'last validation function')
}

exports.email = function(email) {
	// console.log(email + ': ' + 'email validation function')
}

exports.password = function(password) {
	// console.log(password + ': ' + 'password validation funciton')
}
exports.repeatPassword = function(repeatPassword) {
	// console.log(repeatPassword + ': ' + 'repeatPassword validation function')
}
