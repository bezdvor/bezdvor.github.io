var store = localStorage.getItem('key1');
console.log(store);
var arr = store.split(',');
arr.forEach(function(item){
	fromStorage.innerHTML += '<div>'+item+'</div>';
});