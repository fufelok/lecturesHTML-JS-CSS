'use strict';

var audio = document.querySelector('audio');
audio.load();
audio.play();
var h1 = document.querySelector('h1');

h1.onclick = function () {
	audio.load();
	audio.play();
};