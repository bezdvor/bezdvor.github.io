var btns = document.getElementsByTagName('button')
var arr = []
for(var i = 0; i < btns.length; i++){
	btns[i].onclick = function(){
		arr.push(this.innerHTML)
		localStorage.setItem('goods', arr)
		localStorage.setItem('key2', this.innerHTML)
	}
}
clear.onclick = function () {
	localStorage.clear()
}
remove.onclick = function(){
	localStorage.removeItem('key2')
}