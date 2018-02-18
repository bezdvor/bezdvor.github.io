/**
 * Created by Note_Bezdvor on 18.02.2018.
 */
"use strict"
//Преобразовать строку 'list-style-image' в строку 'listStyleImage'. Для преобразования в заглавную букву используйте метод var str = 's'; var capitalS = str.toUpperCase()
//таким образом в переменной capitalS будет большая буква 'S'
//-----------


var str = 'list-style-image';
var getList = str.split('-');
var capitalS = getList[1][0].toUpperCase();
var capitalI = getList[2][0].toUpperCase();
var getS = getList[1].split('');
getS.unshift(capitalS);
delete getS[1];
var str2 = getS.join('');
var getI = getList[2].split('');
getI.unshift(capitalI);
delete getI[1];
var str3 = getI.join('');
var str4 = getList[0];
console.log(str4+str2+str3);


/*есть объект
 var obj = {
 className: 'open menu'
 };
 напишите функцию, которая в качестве первого параметра принимает объект, а в качестве второго параметра имя класса, который нужно удалить. Если такого класса нет, то выдать сообщение, что такого класса нет
 пример использования var newObj = remove(obj, 'open'). В переменной newObj должен быть объект
 var obj = {
 className: 'menu'   (удалить опен вернуть новый обьект без опена)
 };
 необходимо написать функцию remove()*/

//var obj = {
// className: 'open menu'
//};
//
//function New (obj,)

var obj = {
	className: 'open menu'
}
function removeClass(obj, klass) {
	var classes = obj.className.split(' ');

	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == klass) {
			classes.splice(i, 1);
			i--;
		}
		else{console.log('No this class')}
	}
	obj.className = classes.join(' ');

}
removeClass(obj, 'eprogptbm');
removeClass(obj, 'menu')
console.log(obj.className);


//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
var arr1 = [1,2,3,4,5]
var arrSlice = arr1.slice(0,3);
console.log(arrSlice);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
var arr2 = [1,2,3,4,5]
var arrSlice = arr2.slice(3);
console.log(arrSlice);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]

var arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2);
console.log(arr3);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
var arrsp1 = [1,2,3,4,5]
arrsp1 = arrsp1.splice(1,3);
console.log(arrsp1);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
var arrsp2 = [1, 2, 3, 4, 5];
arrsp2.splice(3, 0,'a', 'b','c');
console.log(arrsp2);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

var letterSplice = [1, 2, 3, 4, 5];
letterSplice.splice(1, 0, 'a', 'b');
letterSplice.splice(6, 0, 'c');
letterSplice.splice(8, 0, 'e');
console.log(letterSplice);