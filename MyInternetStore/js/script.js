var korzina = document.getElementsByClassName('korzina')[0];
var cardBlock = document.getElementsByClassName('card-container')[0];
var popup = document.getElementsByClassName('popup')[0];
str.forEach(showGoods);
var btns = document.getElementsByClassName('btns');
var arr = [];
for(var i = 0;i < btns.length;i++){arr[i] = btns[i]}
//console.log(arr);
arr.forEach(function(item){
	item.onclick = function(){
		var currentGoodName = this.getAttribute('ddd');
		var goods = cardBlock.children
		//console.log(goods);
		for(var i = 0; i < goods.length; i++){
			if(goods[i].getAttribute('ddd') == currentGoodName){
				goods[i].children[2].value = parseInt(goods[i].children[2].value,10) + 1;
				var tempFromStorage = JSON.parse(localStorage.getItem('card'));
				var tempToStorage = tempFromStorage.map(function(item){
					if(item.name == currentGoodName){
						item.quant = item.quant + 1
						return item
					}
					return item
				})
				var tempStrToStorage = JSON.stringify(tempToStorage);
				localStorage.setItem('card',tempStrToStorage);
				return
			}
		}
		console.log(goods);
		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		})
		var outerCard = document.createElement('div')
		//outerCard.setAttribute('ddd',currentGoodName)
		//console.log(outerCard);

		var goodInCard = document.createElement('div')
		goodInCard.setAttribute('class','cartGood');
		goodInCard.innerHTML = currentGood[0].name
		goodInCard.style.float = 'left'

		var cartImage = document.createElement('img');
		cartImage.setAttribute('src',currentGood[0].img);
		cartImage.setAttribute('class','img-thumbnail');

		var cartPrice = document.createElement('div')
		cartPrice.setAttribute('class','cartGood')
		cartPrice.innerHTML = currentGood[0].price;
		cartPrice.style.float = 'left'

		var inp = document.createElement('input')
		inp.setAttribute('type', 'number')
		inp.setAttribute('class','cartInput')
		inp.value = 1
		inp.style.float = 'right'

		var closer = document.createElement('div')
		closer.setAttribute('class','closeDiv');
		closer.innerHTML = '<img src="images/times-circle.svg" alt="close"/>';
		closer.style.float = 'right'
		closer.onclick = function(){
			cardBlock.removeChild(this.parentElement)
			localStorage.removeItem('card')
		}

		var clearfix = document.createElement('div')
		clearfix.style.clear = 'both'

		var chekoutButton = document.createElement('button')
		chekoutButton.className = ('btns')
		chekoutButton.innerHTML = 'Оформить заказ'
		chekoutButton.onclick = function(){
			document.location.href = 'cart.html'
		}


		outerCard.appendChild(goodInCard)
		outerCard.appendChild(cartImage)
		outerCard.appendChild(closer)
		outerCard.appendChild(cartPrice)
		outerCard.appendChild(inp)
		outerCard.appendChild(clearfix)
		outerCard.appendChild(chekoutButton)
		cardBlock.appendChild(outerCard)
		var objToStorage = {
			name: currentGoodName,
			quant: 1
		}
		var arrToStorage = []
		if(localStorage.getItem('card') != null){
			arrToStorage = JSON.parse(localStorage.getItem('card'))
		}
		arrToStorage.push(objToStorage)
		var strToStorage = JSON.stringify(arrToStorage)
		localStorage.setItem('card',strToStorage)
	}
});


btn.onclick = btnHandler;
btn2.onclick = btn2Handler;
inp3.oninput  = inp3Handler;
btn3.onclick = btn3Handler;
btn4.onclick = btn4Handler;
korzina.onclick = korzinaHandler;
popup.onclick = popupHandler;
