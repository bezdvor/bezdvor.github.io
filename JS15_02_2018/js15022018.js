/**
 * Created by Note_Bezdvor on 18.02.2018.
 */
"use strict"
//������������� ������ 'list-style-image' � ������ 'listStyleImage'. ��� �������������� � ��������� ����� ����������� ����� var str = 's'; var capitalS = str.toUpperCase()
//����� ������� � ���������� capitalS ����� ������� ����� 'S'
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


/*���� ������
 var obj = {
 className: 'open menu'
 };
 �������� �������, ������� � �������� ������� ��������� ��������� ������, � � �������� ������� ��������� ��� ������, ������� ����� �������. ���� ������ ������ ���, �� ������ ���������, ��� ������ ������ ���
 ������ ������������� var newObj = remove(obj, 'open'). � ���������� newObj ������ ���� ������
 var obj = {
 className: 'menu'   (������� ���� ������� ����� ������ ��� �����)
 };
 ���������� �������� ������� remove()*/

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


//��� ������ [1, 2, 3, 4, 5]. � ������� ������ slice �������� � ����� �������� [1, 2, 3].
var arr1 = [1,2,3,4,5]
var arrSlice = arr1.slice(0,3);
console.log(arrSlice);

//��� ������ [1, 2, 3, 4, 5]. � ������� ������ slice �������� � ����� �������� [4, 5].
var arr2 = [1,2,3,4,5]
var arrSlice = arr2.slice(3);
console.log(arrSlice);

//��� ������ [1, 2, 3, 4, 5]. � ������� ������ splice ������������ ������ � [1, 4, 5]

var arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2);
console.log(arr3);

//��� ������ [1, 2, 3, 4, 5]. � ������� ������ splice �������� � ����� ������ �������� [2, 3, 4].
var arrsp1 = [1,2,3,4,5]
arrsp1 = arrsp1.splice(1,3);
console.log(arrsp1);

//��� ������ [1, 2, 3, 4, 5]. � ������� ������ splice �������� �� ���� ������ [1, 2, 3, 'a', 'b', 'c', 4, 5].
var arrsp2 = [1, 2, 3, 4, 5];
arrsp2.splice(3, 0,'a', 'b','c');
console.log(arrsp2);

//��� ������ [1, 2, 3, 4, 5]. � ������� ������ splice �������� �� ���� ������ [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

var letterSplice = [1, 2, 3, 4, 5];
letterSplice.splice(1, 0, 'a', 'b');
letterSplice.splice(6, 0, 'c');
letterSplice.splice(8, 0, 'e');
console.log(letterSplice);