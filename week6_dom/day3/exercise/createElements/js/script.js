'use strict';
// 1) Wait until the dom content has loaded.
// 2) Collect the unordered list from the page.
// 3) Write a Loop that creates and adds 15 list elements into the unordered list.
// Now the hard part
// 4) Change your code so when you click on a list item it alerts it's 
// index i.e. if I click on the first item alert(0) and the last item (14). Harder than you think!

window.addEventListener('DOMContentLoaded', function () {
	console.log('List from the page');

	var ulEl = document.querySelector('ul');

	function setClick(listItem, num) {
		listItem.addEventListener('click', function () {
			alert(num);
		});
	}

	for (var i = 0; i < 15; i = i + 1) {
		var li = document.createElement('li');
		li.innerText = 'list element: ' + i;

		setClick(li, i);
		ulEl.appendChild(li);

	}
});