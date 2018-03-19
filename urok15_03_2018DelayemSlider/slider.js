/**
 * Created by Note_Bezdvor on 18.03.2018.
 */
//"use strict"
var flag = true
function initializeSlider(elem,arrImg,width,height){
	//Создаем внешний контейнер для всех блоков с картинками
	var container = document.createElement('div')
	//задаем стили контейнеру согласно параметрам width,height, которые в нашем случае равны 100(см. внизу)
	container.style = "border:1px solid;width:"+width+"px;height:"+height+"px;margin:auto;position:relative; overflow:hidden;"
	//перебираем массив с названием картинок, который передали в качестве параметра arrImg(см. внизу)
	for(var i = 0; i < arrImg.length; i++){
		//Создаем обертку для картинки на текущей итерации, т.е. для картинки с названием arrImg[i]
		var imgDiv = document.createElement('div')
		//Присваиваем обертке стили для того, чтобы выстроить все картинки в ряд слева направо
		imgDiv.style = "position:absolute;top:0;left:"+ ((i-1)*width)+"px;height:"+height+"px;width:"+ width + "px;transition:1s"
		//присваиваем класс .images обертке
		imgDiv.setAttribute('class','images')
		//Создаем картинку и устанавливаем необходимые атрибуты, чтоб картинка отображалась корректно
		var img = document.createElement('img')
		img.style="height:100%;max-width:"+width+"px;display:block;margin:auto;cursor:pointer;"
		img.setAttribute('src',arrImg[i])
		img.setAttribute('alt',arrImg[i])
		//Вставляем картинку в обертку
		imgDiv.appendChild(img)
		//Вставляем обертку с картинкой в контейнер
		container.appendChild(imgDiv)
		//Флаг нужен для того, чтоб функция не отрабатывала, пока не завершится предыдущее перемещение картинок
		//назначаем функцию, которая отработает при клике на контейнер и в качестве параметра передаем нативный event(JS сам его подставит)
		container.onclick = function(event){
			//Если мы кликнули по картинке и предыдущее перемещение завершилось, тогда будет работать код внутри условия
			if((event.target.tagName == 'IMG') && flag){
				//Сразу устанавливаем флаг в позицию ложь до тех пор пока не завершиться перемещение картинок, таким образом если в это
				//время мы кликним еще раз, то условие не отработает и перемещение не произойдет
				flag = false
				//Находим все обертки для картинок
				var changePosImg = document.querySelectorAll('.images')
				//На каждой итерации смещаем каждую обертку с картинкой влево на заданную величину width
				for(var j = 0; j < changePosImg.length; j++){
					changePosImg[j].style.left = parseInt(changePosImg[j].style.left,10) - width + 'px'
				}
				//После того, как смещение влево произошло клонируем самый крайний левый элемент в переменную prev
				//для того, чтоб потом его поставить последним
				var prev = event.target.parentElement.previousElementSibling.cloneNode(true);
				//Удаляем крайний левый элемент, который склонировали
				container.removeChild(event.target.parentElement.previousElementSibling)
				//Назначаем клону крайнюю правую позицию
				prev.style.left = width*(changePosImg.length-2)+"px";
				//Вставляем клона в дом дерево последним элементом среди оберток
				container.appendChild(prev);
				//Через 1 секунду(т.к. перемещение длится 1с transition:1s) возврашаем флаг в исходную позицию, чтоб перемещение было доступно
				var timer = setTimeout(function(){
					flag = true
					clearTimeout(timer)
				},1000)
			}
		}
		//После всех манипуляцию с контейнером и назначения обработчика клика контейнеру, вставлем его в элемент, которые
		//передали как аргумент в нашу ф-ию initializeSlider. Это <div class="slider"></div>
		elem.appendChild(container)
	}
	// каждую секунду будет выполняться анонимная функция
	setInterval(function(){
		//создаем искусственное событие клик и устанавливаем режим всплытия {bubbles:true},
		// т.е. так, как по умолчанию происходят все события
		//https://learn.javascript.ru/event-bubbling
		var event = new MouseEvent("click",{bubbles:true});
		//находим картинку, которая находится в активной области контейнера и запускаем событие
		// (как будто пользователь сам кликнул)
		container.children[1].firstElementChild.dispatchEvent(event);
	},1000)
}
//Получаем самый первый элемент на странице с классом slider
var slider = document.getElementsByClassName('slider')[0]
//Формируем массив картинок, который потом передаем функции
var images = ['first.jpg','five.jpg','four.jpg','second.jpg', 'third.jpg']
//Запускаем ф-ию, которая описывалась выше, передавая 4 параметра:
//-элемент в котором будет находится наш слайдер
//-массив картинок
//-ширина
//-высота
initializeSlider(slider,images,100,100);

var moveLeft = document.getElementsByClassName('left');
console.log(moveLeft);
moveLeft.onclick = function(){

}