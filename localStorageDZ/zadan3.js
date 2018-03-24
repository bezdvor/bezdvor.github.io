"use strict"
//Создайте HTML страницу и два варианта оформления, которые размещены в разных css файлах. На странице сделайте переключатель тем оформления. При выборе оформления – происходит подключение соответствующего файла CSS. Запишите в localStorage выбранную тему оформления. При обновлении страницы загружайте ранее выбранную тему.

var but1 = document.getElementById('get1');
but1.onclick = function(){
	var tema1 = '@import "style.css"'
	localStorage.setItem('key3',tema1);
	container.innerHTML = localStorage.getItem('key3')
	};

var but2 = document.getElementById('get2');
but2.onclick = function(){
	var tema2 = '@import "style1.css"'
	localStorage.setItem('key3',tema2);
	//container.innerHTML = '';
	container.innerHTML = localStorage.getItem('key3')};

var container = document.createElement('style');
container.innerHTML += localStorage.getItem('key3');
document.body.appendChild(container);

