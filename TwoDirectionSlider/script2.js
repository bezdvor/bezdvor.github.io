function initializeSlider(elem,arrImg,width,height){
	//Переменная нужна для определения напрвления. При клике на кнопку влево leftDirection будет true, направо - false
	var leftDirection = false
	//Создаем внешний контейнер для всех блоков с картинками
	var container = document.createElement('div')
	//задаем стили контейнеру согласно параметрам width,height, которые в нашем случае равны 100(см. внизу)
	container.style = "border:1px solid;width:"+width+"px;height:"+height+"px;margin:auto;position:relative;overflow:hidden;"
	//перебираем массив с названием картинок, который передали в качестве параметра arrImg(см. внизу)
	for(var i = 0; i < arrImg.length; i++){
		//Создаем обертку для картинки на текущей итерации, т.е. для картинки с названием arrImg[i]
		var imgDiv = document.createElement('div')
		//Присваиваем обертке стили для того, чтобы выстроить все картинки в ряд слева направо
		imgDiv.style = "position:absolute;top:0;left:"+ ((i-2)*width)+"px;height:"+height+"px;width:"+ width + "px;transition:1s"
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
		var flag = true
		//назначаем функцию, которая отработает при клике на контейнер и в качестве параметра передаем нативный event(JS сам его подставит)
		container.onclick = function(event){
			//Если мы кликнули по картинке и предыдущее перемещение завершилось, тогда будет работать код внутри условия
			if((event.target.tagName == 'IMG') && flag){
				//Сразу устанавливаем флаг в позицию ложь до тех пор пока не завершиться перемещение картинок, таким образом если в это
				//время мы кликним еще раз, то условие не отработает и перемещение не произойдет
				flag = false
				//Находим все обертки для картинок
				var changePosImg = document.querySelectorAll('.images')
				//Логика для перемещения налево
				if(leftDirection){
					//На каждой итерации смещаем каждую обертку с картинкой влево на заданную величину width
					for(var j = 0; j < changePosImg.length; j++){
						changePosImg[j].style.left = parseInt(changePosImg[j].style.left,10) - width + 'px'
					}
					//После того, как смещение влево произошло клонируем самый крайний левый элемент в переменную prev
					//для того, чтоб потом его поставить последним
					var prev = event.target.parentElement.parentElement.firstElementChild.cloneNode(true);
					//Удаляем крайний левый элемент, который склонировали
					container.removeChild(event.target.parentElement.parentElement.firstElementChild)
					//Назначаем клону крайнюю правую позицию
					prev.style.left = width*(changePosImg.length-1)/2+"px";
					//Вставляем клона в дом дерево последним элементом среди оберток
					container.appendChild(prev);
				}
				//Логика для перемещения направо
				else{
					//На каждой итерации смещаем каждую обертку с картинкой вправо на заданную величину width
					for(var j = 0; j < changePosImg.length; j++){
						changePosImg[j].style.left = parseInt(changePosImg[j].style.left,10) + width + 'px'
					}
					//После того, как смещение вправо произошло клонируем самый крайний правый элемент в переменную prev
					//для того, чтоб потом его поставить первым
					var prev = event.target.parentElement.parentElement.lastElementChild.cloneNode(true);
					//Удаляем крайний правый элемент, который склонировали
					container.removeChild(event.target.parentElement.parentElement.lastElementChild)
					//Назначаем клону крайнюю левую позицию
					prev.style.left = -width*(changePosImg.length-1)/2+"px";
					//Вставляем клона в дом дерево первым элементом среди оберток
					container.insertBefore(prev,container.firstElementChild);
				}
				//Через 1 секунду(т.к. перемещение длится 1с transition:1s) возврашаем флаг в исходную позицию, чтоб перемещение было доступно
				var timer = setTimeout(function(){
					flag = true
					clearTimeout(timer)
				},1000)
			}
		}
	}
	//После всех манипуляцию с контейнером и назначения обработчика клика контейнеру, вставлем его в элемент, которые
	//передали как аргумент в нашу ф-ию initializeSlider. Это <div class="slider"></div>
	elem.appendChild(container)

	var left = document.createElement('button')
	left.innerHTML = 'left'
	left.onclick = function(){
		leftDirection = false
	}
	var right = document.createElement('button')
	right.innerHTML = 'right'
	right.onclick = function(){
		leftDirection = true
	}
	elem.appendChild(left)
	elem.appendChild(right)
	// каждую секунду будет выполняться анонимная функция
	setInterval(function(){
		//создаем искусственное событие клик и устанавливаем режим всплытия {bubbles:true},
		// т.е. так, как по умолчанию происходят все события
		//https://learn.javascript.ru/event-bubbling
		event = new MouseEvent("click",{bubbles:true});
		//находим картинку, которая находится в активной области контейнера и запускаем событие
		// (как будто пользователь сам кликнул)
		container.children[2].firstElementChild.dispatchEvent(event);
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