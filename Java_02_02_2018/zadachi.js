/**
 * Created by Note_Bezdvor on 07.02.2018.
 */
"use strict"
//������. ���� ���������� a ����� 10, �� �������� '�����', ����� �������� '�������'.
var a= 10;
if(a==10){console.log('�����')}
else{console.log('�������')}

//������. � ���������� min ����� ����� �� 0 �� 59. ���������� � ����� �������� ���� �������� ��� ����� (� ������, ������, ������ ��� ���������).
var min= 56;
if(min<=15){console.log('You are in I quater of hour')}
else if(min>15 && min<=30){console.log('You are in II quateer of our')}
else if(min>30 && min<=45) {console.log('You are in III quater of our')}
else {console.log('You are in IV quateer of hour')}

//���� ���������� a ����� ����, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 1, 0, -3.
var a= -3;
if(a==0){console.log('�����')}
else{console.log('�������')}

//���� ���������� a ������ ����, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 1, 0, -3.
var a= -3;
if(a>0){console.log('�����')}
else{console.log('�������')}

//���� ���������� a ������ ����, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 1, 0, -3.
var a= -3;
if(a<0){console.log('�����')}
else{console.log('�������')}

//���� ���������� a ������ ��� ����� ����, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 1, 0, -3.
var a= -3;
if(a>=0){console.log('�����')}
else{console.log('�������')}

//���� ���������� a ������ ��� ����� ����, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 1, 0, -3.
var a= -3;
if(a<=0){console.log('�����')}
else{console.log('�������')}

//���� ���������� a �� ����� ����, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 1, 0, -3.
var a= -3;
if(a!=0){console.log('�����')}
else{console.log('�������')}

//���� ���������� a ����� 'test', �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 'test', '����', 3.
var a= 'test';
a=='test'?console.log('�����'):console.log('�������')

//���� ���������� a ����� '1' � �� �������� � �� ����, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ '1', 1, 3.
var a= '1'
a==='1'?console.log('�����'):console.log('�������')

//���� ���������� test ����� true, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� test, ������ true, false. �������� ��� �������� ������� - � �������� ������� � � ������� ������ ������ if().

var test = true
if(test == true){console.log('�����')}
else{console.log('�������')}

test==true?console.log("�����"):console.log("�������");

//���� ���������� test �� ����� true, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� test, ������ true, false. �������� ��� �������� ������� - � �������� ������� � � �������.

var test = true
if(test!==true){console.log("�����")}
else{console.log("�������")}
test!==true?console.log("�����"):console.log("�������");

//���� ���������� a ������ ���� � ������ 5-��, �� �������� '�����', ����� �������� '�������'. ��������� ������ ������� ��� a, ������ 5, 0, -3, 2.
var a = 2
if(a>0 && a<5){console.log("�����")}
else{console.log("�������")}

//���� ���������� a ����� ���� ��� ����� ����, �� ��������� � ��� 7, ����� �������� �� �� 10. �������� ����� �������� ���������� �� �����. ��������� ������ ������� ��� a, ������ 5, 0, -3, 2.
var a = 2
if(a==0||a==2){a=a+7}
else{a=a/10}
console.log(a)

//���� ���������� a ����� ��� ������ 1, � ���������� b ������ ��� ����� 3, �� �������� ����� ���� ����������, ����� �������� �� �������� (��������� ���������). ��������� ������ ������� ��� a � b, ������ 1 � 3, 0 � 6, 3 � 5.
var a = 3
var b = 5
if(a<=1&&b>=3){console.log(a+b)}
else {console.log(a-b)}

//���� ���������� a ������ 2-� � ������ 11-��, ��� ���������� b ������ ��� ����� 6-�� � ������ 14-��, �� �������� '�����', � ��������� ������ �������� '�������'.
var a = 12
var b = 15
if (a>2&&a<11||b>=6&&b<14){console.log("�����")}
else{console.log("�������")}

//���������� num ����� ��������� 4 ��������: 1, 2, 3 ��� 4. ���� ��� ����� �������� '1', �� � ���������� result ������� '����', ���� ����� �������� '2' � '�����' � ��� �����. ������ ������ ����� switch-case
var num='2'
switch (num){
    case'1':var result = "����"
        console.log(result)
        break
    case'2':var result = "�����"
        console.log(result)
        break
    case'3':var result = "����"
        console.log(result)
        break
    case'4': var result = "�����"
        console.log(result)
}

//� ���������� day ����� �����-�� ����� �� ��������� �� 1 �� 31. ���������� � ����� ������ ������ �������� ��� ����� (� ������, ������ ��� ������).
var day=24

switch (day) {
    case 1:
        console.log('first')
        break
    case 2:
        console.log('first')
        break
    case 3:
        console.log('first')
        break
    case 4:
        console.log('first')
        break
    case 5:
        console.log('first')
        break
    case 6:
        console.log('first')
        break
    case 7:
        console.log('first')
        break
    case 8:
        console.log('first')
        break
    case 9:
        console.log('first')
        break
    case 10:
        console.log('first')
        break
    case 11:
        console.log('second')
        break
    case 12:
        console.log('second')
        break
    case 13:
        console.log('second')
        break
    case 14:
        console.log('second')
        break
    case 15:
        console.log('second')
        break
    case 16:
        console.log('second')
        break
    case 17:
        console.log('second')
        break
    case 18:
        console.log('second')
        break
    case 19:
        console.log('second')
        break
    case 20:
        console.log('second')
        break
    case 21:
        console.log('third')
        break
    case 22:
        console.log('third')
        break
    case 23:
        console.log('third')
        break
    case 24:
        console.log('third')
        break
    case 25:
        console.log('third')
        break
    case 26:
        console.log('third')
        break
    case 27:
        console.log('third')
        break
    case 28:
        console.log('third')
        break
    case 29:
        console.log('third')
        break
    case 30:
        console.log('third')
        break
    case 31:
        console.log('third')
        break
}
//� ���������� month ����� �����-�� ����� �� ��������� �� 1 �� 12. ���������� � ����� ���� ���� �������� ���� ����� (����, ����, �����, �����).
var month = 6
switch (month) {
    case 1:console.log('zima')
        break;
    case 2:console.log('zima')
        break;
    case 3:console.log('vesna')
        break;
    case 4:console.log('vesna')
        break;
    case 5:console.log('vesna')
        break;
    case 6:console.log('leto')
        break;
    case 7:console.log('leto')
        break;
    case 8:console.log('leto')
        break;
    case 9:console.log('osen')
        break;
    case 10:console.log('osen')
        break;
    case 11:console.log(' osen')
        break;
    case 12:console.log('zima')
        break;
    default:console.log('No valid number')
        break
}
//���������� ��� � �������������� ����� ����������� switch:
//    var a = 3
//
//    if (a == 0) {
//        alert( 0 );
//    }
//    if (a == 1) {
//        alert( 1 );
//    }
//
//    if (a == 2 || a == 3) {
//        alert( '2,3' );
//    }
//    ���������� �������� �������� ���������� �� 0,1,2,4 � ���������� �� ���������
var a = 3
switch (a){
        case 0:console.log(0);
        break
        case 1:console.log(1);
        break
        case 2:console.log(2);
        break
        case 3:console.log(3);
        break
    default: console.log('False')
}

//���� ������, ��������� �� ��������, ��������, 'abcde'. ���������, ��� ������ �������� ���� ������ �������� ����� 'a'. ���� ��� ��� - �������� '��', � ��������� ������ �������� '���'
var x = 'argtrhye'
switch (x[0]){
    case'a':console.log('Yes')
        break;
    default:console.log('No')
}

//���� ������ � �������, ��������, '12345'. ���������, ��� ������ �������� ���� ������ �������� ����� 1, 2 ��� 3. ���� ��� ��� - �������� '��', � ��������� ������ �������� '���'
x = '223456'
switch (x[0]){
    case '1':console.log('Yes')
        break;
    case '2':console.log('Yes')
        break;
    case '3':console.log('Yes')
        break;
    default :console.log('No')
}
//���� ������ �� 6-�� ����. ���������, ��� ����� ������ ���� ���� ��������� ����� ������ ���� ����. ���� ��� ��� - �������� '��', � ��������� ������ �������� '���'.
x = 123321
x = x +''
switch (+x[0] + +x[1] + +x[2] == +x[3] + +x[4] + +x[5]){
    case true:
        console.log('Yes of corse')
        break;
    case false:
        console.log('Not')
        break;
}
//�������� �������, ������� ���������� ��� �����. ����� ���������� ����������.
function cube(x,y){
    return  Math.pow(x,y);
}
var z= cube(4,3);
console.log(z);
//�������� �������, ������� �������� �� ������� ����� ������ � ����� �� ������.
function arifm1(x,y,z){
    return x-y/z;
}
var r=arifm1(5,2,7);
console.log(r);
//�������� �������, ������� ��������� ���������� ����� �� 1 �� 7, � ���������� ���� ������ �� ������� �����.
function days(x){
    switch (x){
        case 1: return "�����������";
        case 2: return"�������";
        case 3: return '�����';
        case 4: return'�������';
        case 5: return'�������';
        case 6: return "�������";
        case 7: return "�����������";
        default: return "��� ������ ��� � ������";
    }
}
console.log(days(10));
//�������� �������, � �������� ������� ����� ������������ �������. ������� ������ ���������� ������� ��������. ���� ������� ����� 18, �� false, ���� �� 18, �� true. ��������� �������� � ����������. ����� ����������� '������ ��������" ��� "������ �� ��������" � ����������� �� ��������(true/false)
function checkAge1 (age){
    if(age<18){return false;}
    return true;
}
var x = checkAge1(19);
if(x){console.log("������ ��������")}
else{console.log("������ ��������")}
//����������� ���������� ������. ������� ������ ���������� '������ ��������" ��� "������ �� ��������" � ����������� �� ����������� ��������
function checkAge (w){
    if (w<18) return "������ ��������";
    else return "�� ���������";
}
console.log(checkAge(19));


//������. �������� ������� ����� �� 1 �� 50
for (var y = 1; y<=50; y++){

}console.log('y', y);
//�������� ������� ����� �� 11 �� 33.
for (var z = 11; z<=33; z++){

}console.log('z', z);
//�������� ������� ������ ����� � ���������� �� 0 �� 100
for (var a= 0; a<=100; a+=2){

}console.log('a', a)
//� ������� ����� ������� ����� ����� �� 1 �� 100.
var Sum=0;
for (var b=1; b<=100; b++){
    Sum=Sum + b;

}console.log('Sum', Sum);

var arr1=['����� 1', '����� 2',"����� 3"];
for (var i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}
//��� ������ � ���������� 2, 5, 9, 15, 0, 4. � ������� ����� for � ��������� if �������� �� ����� ������� ��� ��������� �������, ������� ������ 3-�, �� ������ 10.
var digits = [2,5,9,15,0,4];
for (var p=0; p<digits.length; p++) {
    if (digits[p]>3 && digits[p]<10){
        console.log(digits[p])
    }
}

//���� ����� n=1000. ������ ��� �� 2 ������� ���, ���� ��������� ������� �� ������ ������ 50. ����� ����� ���������? ���������� ���������� ��������, ����������� ��� ����� (�������� - ��� ������ �����), � �������� ��� � ���������� num.
for (var n=1000;n>50;n=n/2){

    console.log(n);
}

//������. ��� ������ � ���������� '������, ', '���' � '!'. ���������� ������� �� ����� ����� '������, ���!'.
var arr1=["������,"," ���","!"]
console.log(arr1[0] + arr1[1] + arr1[2]);
//������. ����� ������� ������ ������: ��� ������ � ���������� '������, ', '���' � '!'. ���������� �������� � ���������� text ����� '������, ���!', � ����� ������� �� ����� ���������� ���� ����������.
var arr2=["������,"," ���","!"]
var text=0;
text = arr2[0] + arr2[1] + arr2[2];
console.log(text);
//������. ��� ������ ['������, ', '���', '!']. ���������� �������� � ������� ������� ����� ������� ����� '����, ' (�� ���� ������ ����� '������, ' ����� '����, ').
var arr3=["������,"," ���","!"]
arr3[0]='����, '
console.log(arr3[0] + arr3[1] + arr3[2]);
//������. �������� ������ arr � ���������� 1, 2, 3, 4, 5 ����� ���������� ���������.
var arr4=[1,2,3,4,5]
console.log(arr4);

var arr5=[]
arr5[0]=1;
arr5[1]=2;
arr5[2]=3;
arr5[3]=4;
arr5[4]=5;
console.log(arr5);
//    �������� ������ arr = ['a', 'b', 'c', 'd'] � � ��� ������� �������� �� ����� ������ 'a+b, c+d'
var arr6=['a','b','c','d']
console.log(arr6[0] + '+' + arr6[1] + ',' + arr6[2] + '+' + arr6[3])
//    �������� ������ arr � ���������� 2, 5, 3, 9. �������� ������ ������� ������� �� ������, � ������ ������� �� ���������. ���������� �������, ��������� ���������� result. �������� �� ����� �������� ���� ����������.
var arr7=[2,5,3,9]
var result = 0;
result = ((arr7[0]*arr7[1])+(arr7[2]*arr7[3]));
console.log(result);
//    �������� �������, ������� ����� ��������� ���� �������� - ����� ��� ������. ������� ������ ���������� �������� ��� (��, ��, ��...) �� ���������� ��������� (�� 1 �� 7). �������, �������� ������
function getDay (x){
    var arr8=["�����������","�������","C����","�������","�������","�������","�����������"]
    if (x>0 && x<8){
        return arr8[x-1];}
}
console.log(getDay(6));
//    ��� ������ [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. �������� �� ����� ����� 4 �� ����� �������.
var arr9 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr9[1][0]);
//    ��� ������ � �������. ����� ����� ���� �������������� � ��������������. ������� ����� ������������� ��������� �������. ����������� �������, ������� ����� ���������, ��� �������� ������ � ���������� ����� ������������� ��������� �������
function getSuma (){
    var sum = 0;
    var arr = [1, 2, 3, -1, -2, -3];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum = sum + arr[i];
        }
    }return sum
}
console.log(getSuma());
//    �������� �������, ������� ����� ��������� � �������� ��������� ������. � ������� ����� for � ��������� if ��������� ���� �� � ������� ������� �� ���������, ������ 4. ���� ���� - �������� �� ����� '����!' � ������� �� �����.
function getFour(x){
    var x = [1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < x.length; i++) {
        if (x[i] == 4) {
            console.log('����!')
            break
        }
    }return x[i];
}

console.log(getFour())
//��� ������ �������, ��������: [10, 20, 30, 50, 235, 3000]. �������� �� ����� ������ �� ����� �� �������, ������� ���������� �� ����� 1, 2 ��� 5.
var arrNew = [10,20,30,50,235,3000]
for (var i = 0; i<arrNew.length; i++){
    var firstletter = ('' + arrNew[i])[0];
    if(firstletter =='1'||firstletter=='2'||firstletter=='5')
        console.log(arrNew[i])
}
    //��� ������ � ���������� 1, 2, 3, 4, 5, 6, 7, 8, 9. � ������� ����� for �������� ������ '-1-2-3-4-5-6-7-8-9-'
var arrString = [1,2,3,4,5,6,7,8,9]
var string = '';
for (var i = 0; i < arrString.length; i++){
    string += '-' + arrString[i];
}console.log(string + '-');
    //���� ��� ���������� var a = 'string1'; var b = 'string2'. ���������� �������� ��� ���������� �������, �.�., ���� ���������� � ������� �������� ���������� b, � ���������� b - �������� ���������� �. ������ ������������ ������ ����������
var a = 2
var b = 3
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
//�������� �������, ������� ����������� ��������� 2 �����. ���� ��� ����� ����� - ����� ������� ������ true, � ���� �� ����� - false.
function compareDigit (x,y){
    if (x==y){
        return true}
    else {return false}
}
console.log(compareDigit(2,2));
//    �������� �������, ������� ����������� ��������� 2 �����. ���� �� ����� ������ 10 - ����� ������� ������ true, � ���� ��� - false.
function getSumTen (a,b){
    if (a+b>10){
        return true
    }
    else {
        return false
    }
}
console.log(getSumTen(5,4));
//    �������� �������, ������� ���������� ��������� ����� � ��������� - ������������� ��� ��� ���. ���� ������������� - ����� ������� ������ true, � ���� ��� - false.
function getPositive (c){
    if(c<0){
        return true
    }
    else {
        return false
    }
}
console.log(getPositive(-3));
//    � ������� ����� for ����������� ������ '123456789' � �������� �� � ���������� str.
function getDigitTen () {
    var str = '';
    for (var i = 1; i <= 9; i++) {
        str = str + i;}
    return str;
}
console.log(getDigitTen());
//    � ������� ����� for ����������� ������ '987654321' � �������� �� � ���������� str.
function getDigitReverse () {
    var str = '';
    for (var i = 9; i >= 1; i--) {
        str = str + i;}
    return str;
}
console.log(getDigitReverse());
//    ��������� ��������, ��� �������� �� �������, ������ � ����� �������� ������ ���� 20 �����, � �� 5:
//
//x
//xx
//xxx
//xxxx
//xxxxx
//�.�. � - ��� ������� ������
var str = '';
for (var i = 0; i < 20; i++) {
    str = str + 'x';
    console.log(str);
}
//    � ������� ���� ��������� ������ ��������� ��������� ���������:
//    1
//22
//333
//4444
//55555
//666666
//7777777
//88888888
//999999999
function getDigitPyram (g){
    for (var i = 1; i <= g; i++) {
        var str = '';
        for (var k = 1; k <= i; k++) {
            var str = str + i;
        }
        console.log(str);}
} console.log(getDigitPyram(12));

//��� ������ � �������. �� ��������� ������ reverse ����������� ��� �������� � �������� �������
var arr7 = [1, 2, 3, 4, 5];
var obrat = [];

for (var i = arr7.length - 1; i >= 0; i--) {
    obrat.push(arr7[i]);
}

console.log(obrat);
//    ��� ���������� ������ � �������, �������� [[1, 2, 3], [4, 5], [6]]. ������� ����� ��������� ����� �������. ������, ������� ��, ����� ���� ������������.
var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {

    }console.log(arr[i][j]);
}
//    �������� ������� arrayFill, ������� ����� ��������� ������ ��������� ����������. ������ ���������� ������� ��������� ��������, ������� ��������� ������, � ������ - ������� ��������� ������ ���� � �������. ������: arrayFill('x', 5) ������� ������ ['x', 'x', 'x', 'x', 'x'].
function arrayFill (a,b){
    var arr=[]
    for (i=0; i<b; i++){
        arr[i]=a;
    }
    return arr;
}console.log(arrayFill('x',5));
//    ��� ������ � �������. ������� ������� ��������� � ������ ������� ���� �������, ����� � ����� ���������� ������ 10-��.
var arrTen = [1, 2, 3, 4, 5, 6, 7, 8];
var count = 0;
var summa = 0;
for (i = 0; i < arrTen.length; i++) {
    summa += arrTen[i];
    count++;
    if (summa > 10) {
        break;
    }
}
console.log(count)

//    ��� ������ � �������. �������� �� ���� ����� ������, ��� ��������� ������ ������ ������������� �����. �������� ��� ����� ��������������� ������� isPositive(), ������� ���������� ����� ��������� ����� � ���������� true, ���� ����� �������������, � false - ���� �������������.
var arrPos = [1, 2, 3, -1, -2, -3];

function isPositive(digit) {
    if (digit >=0) {
        return true;
    } else {
        return false;
    }
}
var arrNew = [];
for (var i = 0; i <= arrPos.length; i++) {
    if (isPositive(arrPos[i])) {
        arrNew.push(arrPos[i]);
    }
}

console.log(arrNew);
console.log(isPositive())

//    �������� ������� inArray, ������� ����������, ���� � ������� ������� � �������� ������� ��� ���. ������� ������ ���������� ������ ��������� ����� ��������, � ������ - ������, � ������� �������� �����. ������� ������ ���������� true ��� false.
function inArray(slovo, arrIn) {
    for (var i = 0; i < arrIn.length; i++) {
        if (arrIn[i] === slovo) {
            return true;
        }
    }
    return false;
}
var slovo = '�����';
var arrIn = ['�����', '�����', '�����'];
console.log(inArray(slovo, arrIn));
