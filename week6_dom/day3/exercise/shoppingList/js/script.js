'use strict';
document.addEventListener('DOMContentLoaded', function () {
	var ul = document.querySelector('ul');
	// Listen to the click event on the span with the id of button
	// when you click on it retrieve the value from the input element and 
	// add it to the unordered list as a "li" element 


	var span = document.querySelector('#button');
	var li = document.createElement('li');
	var input = document.querySelector('text');

	console.log(input);


	ul.appendChild(li);
	li.innerHTML = input;


}, false);