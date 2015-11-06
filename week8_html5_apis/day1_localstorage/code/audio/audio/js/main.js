'use strict';


localStorage.userName = 'Vital';
var
	l = localStorage.userName;

localStorage.setItem('age', 37);
var age = localStorage.getItem('age');

if (localStorage.password === undefined) {
	console.log('password not set');
} else {
	console.log(localStorage.password);
}

/*
//remove age
localStorage.removeItem('age');
//remove all Item from localStorage.
localStorage.clear();

*/

var myArray = [1, 2, 4, 5, 6, 7, 8];
var myObject = {
	q: 'London',
	a: 'Capital'
};

localStorage.myArray = JSON.stringify(myArray);
localStorage.myObject = JSON.stringify(myObject);

var myNewObject = JSON.parse(localStorage.myObject);
var myNewArray = JSON.parse(localStorage.myArray);