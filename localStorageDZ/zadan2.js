"use strict"
//Создайте окно, которое всплывает через 4 секунды после загрузки страницы. В окне – опция «Согласен». Если пользователь выбирает данную опцию и закрывает окно – то при последующих обновлениях окно не показывается. Если пользователь не выбрал опцию «Согласен», то повторяйте вывод окна после загрузки.
window.onload = function () {
	timeSetting();
}
var flag = true
var store = localStorage.getItem('key2');
//var a = eval(store);
//console.log(a);
if (store !== null) {
	var flag = false;
}
function timeSetting(){
	if(flag == false){
		return;
	}
	var x = setTimeout(function() {
		var oblogka = document.createElement('div');
		oblogka.setAttribute('id','oblogka');
		document.body.appendChild(oblogka);
		var container = document.createElement('div');
		container.style = "width:300px;height:300px;position:absolute;top:400px;border-radius:10px;";
		var escape = document.createElement('button');
		var input = document.createElement('input');
		var text = document.createTextNode('Согласен');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('id', 'remove');
		escape.style = "width:30px;height:30px;background-color:lightgray;float:right;cursor:pointer;"
		escape.innerHTML = 'X';
		oblogka.appendChild(container);
		container.appendChild(escape);
		container.appendChild(input);
		container.appendChild(text);
		setTimeout(function(){
			container.style = "width:300px;height:300px;position:absolute;top:100px;border-radius:10px;";
		},100);
		escape.onclick = function rem(){
			if (document.getElementById('remove').checked){

				container.remove();
				localStorage.setItem('key2', 'chek');
			}
			else {
				container.remove();
				localStorage.removeItem('key2');
			}
		}

	}, 4000);
}

//Создайте HTML страницу и два варианта оформления, которые размещены в разных css файлах. На странице сделайте переключатель тем оформления. При выборе оформления – происходит подключение соответствующего файла CSS. Запишите в localStorage выбранную тему оформления. При обновлении страницы загружайте ранее выбранную тему.
