'use strict';
window.addEventListener('DOMContentLoaded', function () {
	console.log('loaded js');
	var bodyEl = document.querySelector('body'),
		h1El = document.createElement('h1'),
		pEl = document.createElement('p'),
		p2El = document.createElement('p'),

		//catText = '< script > alert('
		//hello '); < /script>',


		aEl = document.createElement('a');

	// console.log(bodyEl);
	//	console.dir(bodyEl);

	h1El.innerText = 'Welcome to my page';
	console.log(h1El);
	console.dir(h1El);
	bodyEl.appendChild(h1El);

	pEl.innerText = 'What a greate page. To find other page ';
	bodyEl.appendChild(pEl);

	aEl.innerText = 'click here';
	aEl.setAttribute('href', 'http://www.google.com');
	pEl.appendChild(aEl);

	p2El.innerHTML = 'Another greate page is <a href="http://www.jsforcats.com"> js for cats </a>';
	bodyEl.appendChild(p2El);

});