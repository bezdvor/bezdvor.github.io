/**
 * Created by Note_Bezdvor on 07.02.2018.
 */
"use strict"
//Задача. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
var a= 10;
if(a==10){console.log('Верно')}
else{console.log('Неверно')}

//Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
var min= 56;
if(min<=15){console.log('You are in I quater of hour')}
else if(min>15 && min<=30){console.log('You are in II quateer of our')}
else if(min>30 && min<=45) {console.log('You are in III quater of our')}
else {console.log('You are in IV quateer of hour')}

//Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a= -3;
if(a==0){console.log('Верно')}
else{console.log('Неверно')}

//Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a= -3;
if(a>0){console.log('Верно')}
else{console.log('Неверно')}

//Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a= -3;
if(a<0){console.log('Верно')}
else{console.log('Неверно')}

//Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a= -3;
if(a>=0){console.log('Верно')}
else{console.log('Неверно')}

//Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a= -3;
if(a<=0){console.log('Верно')}
else{console.log('Неверно')}

//Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a= -3;
if(a!=0){console.log('Верно')}
else{console.log('Неверно')}

//Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
var a= 'test';
a=='test'?console.log('Верно'):console.log('Неверно')

//Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
var a= '1'
a==='1'?console.log('Верно'):console.log('Неверно')

//Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной внутри скобок if().

var test = true
if(test == true){console.log('Верно')}
else{console.log('Неверно')}

test==true?console.log("Верно"):console.log("Неверно");

//Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

var test = true
if(test!==true){console.log("Верно")}
else{console.log("Неверно")}
test!==true?console.log("Верно"):console.log("Неверно");

//Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = 2
if(a>0 && a<5){console.log("Верно")}
else{console.log("Неверно")}

//Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = 2
if(a==0||a==2){a=a+7}
else{a=a/10}
console.log(a)

//Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
var a = 3
var b = 5
if(a<=1&&b>=3){console.log(a+b)}
else {console.log(a-b)}

//Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
var a = 12
var b = 15
if (a>2&&a<11||b>=6&&b<14){console.log("Верно")}
else{console.log("Неверно")}

//Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case
var num='2'
switch (num){
    case'1':var result = "Зима"
        console.log(result)
        break
    case'2':var result = "Весна"
        console.log(result)
        break
    case'3':var result = "Лето"
        console.log(result)
        break
    case'4': var result = "Осень"
        console.log(result)
}

//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
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
//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
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
//Перепишите код с использованием одной конструкции switch:
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
//    Попробуйте поменять значение переменной на 0,1,2,4 и посмотрите на результат
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

//Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'
var x = 'argtrhye'
switch (x[0]){
    case'a':console.log('Yes')
        break;
    default:console.log('No')
}

//Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'
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
//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
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
//Сделайте функцию, которая возвращает куб числа. Число передается параметром.
function cube(x,y){
    return  Math.pow(x,y);
}
var z= cube(4,3);
console.log(z);
//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function arifm1(x,y,z){
    return x-y/z;
}
var r=arifm1(5,2,7);
console.log(r);
//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function days(x){
    switch (x){
        case 1: return "понедельник";
        case 2: return"вторник";
        case 3: return 'среда';
        case 4: return'четверг';
        case 5: return'пятница';
        case 6: return "суббота";
        case 7: return "воскресенье";
        default: return "Нет такого дня в неделе";
    }
}
console.log(days(10));
//Создайте функцию, в параметр которой будет передаваться возраст. Функция должна возвращать булевое значение. Если возраст менее 18, то false, если от 18, то true. Результат запишите в переменную. Далее законсольте 'доступ разрешен" или "доступ не разрешен" в зависимости от значения(true/false)
function checkAge1 (age){
    if(age<18){return false;}
    return true;
}
var x = checkAge1(19);
if(x){console.log("Доступ запрещен")}
else{console.log("Доступ разрешен")}
//Переделайте предыдущую задачу. Функция должна возвращать 'доступ разрешен" или "доступ не разрешен" в зависимости от переданного возраста
function checkAge (w){
    if (w<18) return "Доступ запрещен";
    else return "Вы проходите";
}
console.log(checkAge(19));


//Задача. Выведите столбец чисел от 1 до 50
for (var y = 1; y<=50; y++){

}console.log('y', y);
//Выведите столбец чисел от 11 до 33.
for (var z = 11; z<=33; z++){

}console.log('z', z);
//Выведите столбец четных чисел в промежутке от 0 до 100
for (var a= 0; a<=100; a+=2){

}console.log('a', a)
//С помощью цикла найдите сумму чисел от 1 до 100.
var Sum=0;
for (var b=1; b<=100; b++){
    Sum=Sum + b;

}console.log('Sum', Sum);

var arr1=['Пункт 1', 'Пункт 2',"Пункт 3"];
for (var i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}
//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
var digits = [2,5,9,15,0,4];
for (var p=0; p<digits.length; p++) {
    if (digits[p]>3 && digits[p]<10){
        console.log(digits[p])
    }
}

//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
for (var n=1000;n>50;n=n/2){

    console.log(n);
}

//Задача. Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
var arr1=["Привет,"," мир","!"]
console.log(arr1[0] + arr1[1] + arr1[2]);
//Задача. Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.
var arr2=["Привет,"," мир","!"]
var text=0;
text = arr2[0] + arr2[1] + arr2[2];
console.log(text);
//Задача. Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').
var arr3=["Привет,"," мир","!"]
arr3[0]='Пока, '
console.log(arr3[0] + arr3[1] + arr3[2]);
//Задача. Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.
var arr4=[1,2,3,4,5]
console.log(arr4);

var arr5=[]
arr5[0]=1;
arr5[1]=2;
arr5[2]=3;
arr5[3]=4;
arr5[4]=5;
console.log(arr5);
//    Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'
var arr6=['a','b','c','d']
console.log(arr6[0] + '+' + arr6[1] + ',' + arr6[2] + '+' + arr6[3])
//    Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
var arr7=[2,5,3,9]
var result = 0;
result = ((arr7[0]*arr7[1])+(arr7[2]*arr7[3]));
console.log(result);
//    Создайте функцию, которая будет принимать один параметр - номер дня недели. Функция должна возвращать название дня (Пн, Вт, Ср...) по введенному параметру (от 1 до 7). Сделать, применяя массив
function getDay (x){
    var arr8=["Понедельник","Вторник","Cреда","Четверг","Пятница","Суббота","Воскресенье"]
    if (x>0 && x<8){
        return arr8[x-1];}
}
console.log(getDay(6));
//    Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
var arr9 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr9[1][0]);
//    Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. Используйте функцию, которая будет принимать, как параметр массив и возвращать сумму положительных элементов массива
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
//    Создайте функцию, которая будет принимать в качестве параметра массив. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла.
function getFour(x){
    var x = [1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < x.length; i++) {
        if (x[i] == 4) {
            console.log('Есть!')
            break
        }
    }return x[i];
}

console.log(getFour())
//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
var arrNew = [10,20,30,50,235,3000]
for (var i = 0; i<arrNew.length; i++){
    var firstletter = ('' + arrNew[i])[0];
    if(firstletter =='1'||firstletter=='2'||firstletter=='5')
        console.log(arrNew[i])
}
    //Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'
var arrString = [1,2,3,4,5,6,7,8,9]
var string = '';
for (var i = 0; i < arrString.length; i++){
    string += '-' + arrString[i];
}console.log(string + '-');
    //даны две переменные var a = 'string1'; var b = 'string2'. Необходимо поменять эти переменные местами, т.е., чтоб переменная а приняла значение переменной b, а переменная b - значение переменной а. Нельзя использовать другие переменные
var a = 2
var b = 3
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function compareDigit (x,y){
    if (x==y){
        return true}
    else {return false}
}
console.log(compareDigit(2,2));
//    Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
function getSumTen (a,b){
    if (a+b>10){
        return true
    }
    else {
        return false
    }
}
console.log(getSumTen(5,4));
//    Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function getPositive (c){
    if(c<0){
        return true
    }
    else {
        return false
    }
}
console.log(getPositive(-3));
//    С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
function getDigitTen () {
    var str = '';
    for (var i = 1; i <= 9; i++) {
        str = str + i;}
    return str;
}
console.log(getDigitTen());
//    С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
function getDigitReverse () {
    var str = '';
    for (var i = 9; i >= 1; i--) {
        str = str + i;}
    return str;
}
console.log(getDigitReverse());
//    Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//
//x
//xx
//xxx
//xxxx
//xxxxx
//т.е. х - это обычный символ
var str = '';
for (var i = 0; i < 20; i++) {
    str = str + 'x';
    console.log(str);
}
//    С помощью двух вложенных циклов нарисуйте следующую пирамидку:
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

//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке
var arr7 = [1, 2, 3, 4, 5];
var obrat = [];

for (var i = arr7.length - 1; i >= 0; i--) {
    obrat.push(arr7[i]);
}

console.log(obrat);
//    Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {

    }console.log(arr[i][j]);
}
//    Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill (a,b){
    var arr=[]
    for (i=0; i<b; i++){
        arr[i]=a;
    }
    return arr;
}console.log(arrayFill('x',5));
//    Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
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

//    Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
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

//    Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
function inArray(slovo, arrIn) {
    for (var i = 0; i < arrIn.length; i++) {
        if (arrIn[i] === slovo) {
            return true;
        }
    }
    return false;
}
var slovo = 'слово';
var arrIn = ['буква', 'слово', 'абзац'];
console.log(inArray(slovo, arrIn));
