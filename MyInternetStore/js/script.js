var korzina = document.getElementsByClassName('korzina')[0];
var cardBlock = document.getElementsByClassName('card-container')[0];
var popup = document.getElementsByClassName('popup')[0];
str.forEach(showGoods);
var btns = document.getElementsByClassName('btns');
var arr = [];
for(var i = 0;i < btns.length;i++){
	arr[i] = btns[i]
}
arr.forEach(function(item){
	item.onclick = function(){
		var currentGoodName = this.getAttribute('ddd');
		var goods = cardBlock.children;

		for(var i = 0; i < goods.length; i++){
			if(goods[i].getAttribute('ddd') == currentGoodName){
				goods[i].children[2].value = parseInt(goods[i].children[2].value,10) + 1;
				return
			}
		}

		var currentGood = str.filter(function(item){
			return item.name == currentGoodName
		});
		var outerCard = document.createElement('div');
		outerCard.setAttribute('ddd',currentGoodName);

		var goodInCard = document.createElement('div');
		goodInCard.setAttribute('class','cartGood');
		goodInCard.innerHTML = currentGood[0].name;
		goodInCard.style.float = 'left';

		var inp = document.createElement('input');
		inp.setAttribute('type', 'number');
		inp.setAttribute('class','cartInput')
		inp.value = 1;
		inp.style.float = 'right';

		var closer = document.createElement('div');
		closer.setAttribute('class','closeDiv');
		closer.innerHTML = '<img src="images/times-circle.svg" alt="close"/>';
		closer.style.float = 'right';
		closer.onclick = function(){
			cardBlock.removeChild(this.parentElement)
		};

		var clearfix = document.createElement('div');
		clearfix.style.clear = 'both';

		outerCard.appendChild(goodInCard);
		outerCard.appendChild(closer);
		outerCard.appendChild(inp);
		outerCard.appendChild(clearfix);


		cardBlock.appendChild(outerCard);
		// cardBlock.innerHTML += '<div class = "good-in-card" ' +
		// 	'ddd="'+currentGood[0].name+'">'+currentGood[0].name+'</div>'
	}
});
cardBlock.onclick = function(event){
	if(event.target.classList.contains('good-in-card')){
		var goodInCard = document.getElementsByClassName('good-in-card');
		var temp = [];
		for(var k = 0; k < goodInCard.length; k++){
			temp[k] = goodInCard[k]
		}
		cardBlock.innerHTML = '';
		for (var j = 0; j < temp.length; j++){
			if(temp[j].getAttribute('ddd')!=event.target.getAttribute('ddd')){
				cardBlock.innerHTML += temp[j].outerHTML
			}
		}
	}
};

btn.onclick = btnHandler;
btn2.onclick = btn2Handler;
inp3.oninput  = inp3Handler;
btn3.onclick = btn3Handler;
btn4.onclick = btn4Handler;
korzina.onclick = korzinaHandler;
popup.onclick = popupHandler;
