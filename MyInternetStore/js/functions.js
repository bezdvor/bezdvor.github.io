function showGoods(item){
	var otdelniyDiv = '<div class="cardOfGoods">' +
		'<h2 class="cartname">' + item.name + '</h2>' +
		'<h6 class="cartWrite">' + item.description + '</h6>' + '<br>' + '<div class="img-container">' +
		'<img class="img-fluid" src="' + item.img + '"/>' + '</div>' + '<br>' +
		'<div class="cartprice">' + item.price + '$</div>' + '<br>' +
		'<h5>' + item.present + '</h5>' +
		'<button class="btn btn-warning btns" ddd = "'+item.name+'">' + item.add + '</button>';
	data.innerHTML += otdelniyDiv
}
// function fun1() {
// 	var rng=document.getElementById('r1');
// 	var p=document.getElementById('one');
// 	p.innerHTML=rng.value;
// }

function btnHandler(){
	var min = parseInt(inp1.value,10);
	var max = parseInt(inp2.value,10);
	if(max<min){
		max = Infinity
	}
	var arr = str.filter(function(item){
		return (item.price>=min && item.price <= max)
	});
	data.innerHTML = '';
	arr.forEach(showGoods)
}
function btn2Handler(){
	data.innerHTML = '';
	str.sort(function(a,b){
		if(a.name > b.name){
			return 1
		}else{
			return -1
		}
	});
	str.forEach(showGoods)
}
function inp3Handler(){
	var searchReq = this.value;
	data.innerHTML = '';
	otherStr = str.filter(function(item){
		return item.name.toUpperCase().indexOf(searchReq.toUpperCase()) >-1
	});
	otherStr.forEach(showGoods)
}
function btn3Handler(){
	data.innerHTML = '';
	str.sort(function(y,n){
		if(n.presence > y.presence){
			return 1
		}else{
			return -1
		}
	});
	str.forEach(showGoods)
}
function btn4Handler(){
	data.innerHTML = '';
	str.sort(function(n,y){
		if(n.presence > y.presence){
			return 1
		}else{
			return -1
		}
	});
	str.forEach(showGoods)
}
function korzinaHandler(){
	if(cardBlock.style.display === 'none'){
		cardBlock.style.display = 'block';
		popup.style.display = 'block';
	}
}
function popupHandler(){
	cardBlock.style.display = 'none';
	popup.style.display = 'none';
}