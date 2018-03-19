/**
 * Created by Note_Bezdvor on 18.03.2018.
 */
//"use strict"
var flag = true
function initializeSlider(elem,arrImg,width,height){
	//������� ������� ��������� ��� ���� ������ � ����������
	var container = document.createElement('div')
	//������ ����� ���������� �������� ���������� width,height, ������� � ����� ������ ����� 100(��. �����)
	container.style = "border:1px solid;width:"+width+"px;height:"+height+"px;margin:auto;position:relative; overflow:hidden;"
	//���������� ������ � ��������� ��������, ������� �������� � �������� ��������� arrImg(��. �����)
	for(var i = 0; i < arrImg.length; i++){
		//������� ������� ��� �������� �� ������� ��������, �.�. ��� �������� � ��������� arrImg[i]
		var imgDiv = document.createElement('div')
		//����������� ������� ����� ��� ����, ����� ��������� ��� �������� � ��� ����� �������
		imgDiv.style = "position:absolute;top:0;left:"+ ((i-1)*width)+"px;height:"+height+"px;width:"+ width + "px;transition:1s"
		//����������� ����� .images �������
		imgDiv.setAttribute('class','images')
		//������� �������� � ������������� ����������� ��������, ���� �������� ������������ ���������
		var img = document.createElement('img')
		img.style="height:100%;max-width:"+width+"px;display:block;margin:auto;cursor:pointer;"
		img.setAttribute('src',arrImg[i])
		img.setAttribute('alt',arrImg[i])
		//��������� �������� � �������
		imgDiv.appendChild(img)
		//��������� ������� � ��������� � ���������
		container.appendChild(imgDiv)
		//���� ����� ��� ����, ���� ������� �� ������������, ���� �� ���������� ���������� ����������� ��������
		//��������� �������, ������� ���������� ��� ����� �� ��������� � � �������� ��������� �������� �������� event(JS ��� ��� ���������)
		container.onclick = function(event){
			//���� �� �������� �� �������� � ���������� ����������� �����������, ����� ����� �������� ��� ������ �������
			if((event.target.tagName == 'IMG') && flag){
				//����� ������������� ���� � ������� ���� �� ��� ��� ���� �� ����������� ����������� ��������, ����� ������� ���� � ���
				//����� �� ������� ��� ���, �� ������� �� ���������� � ����������� �� ����������
				flag = false
				//������� ��� ������� ��� ��������
				var changePosImg = document.querySelectorAll('.images')
				//�� ������ �������� ������� ������ ������� � ��������� ����� �� �������� �������� width
				for(var j = 0; j < changePosImg.length; j++){
					changePosImg[j].style.left = parseInt(changePosImg[j].style.left,10) - width + 'px'
				}
				//����� ����, ��� �������� ����� ��������� ��������� ����� ������� ����� ������� � ���������� prev
				//��� ����, ���� ����� ��� ��������� ���������
				var prev = event.target.parentElement.previousElementSibling.cloneNode(true);
				//������� ������� ����� �������, ������� ������������
				container.removeChild(event.target.parentElement.previousElementSibling)
				//��������� ����� ������� ������ �������
				prev.style.left = width*(changePosImg.length-2)+"px";
				//��������� ����� � ��� ������ ��������� ��������� ����� �������
				container.appendChild(prev);
				//����� 1 �������(�.�. ����������� ������ 1� transition:1s) ���������� ���� � �������� �������, ���� ����������� ���� ��������
				var timer = setTimeout(function(){
					flag = true
					clearTimeout(timer)
				},1000)
			}
		}
		//����� ���� ����������� � ����������� � ���������� ����������� ����� ����������, �������� ��� � �������, �������
		//�������� ��� �������� � ���� �-�� initializeSlider. ��� <div class="slider"></div>
		elem.appendChild(container)
	}
	// ������ ������� ����� ����������� ��������� �������
	setInterval(function(){
		//������� ������������� ������� ���� � ������������� ����� �������� {bubbles:true},
		// �.�. ���, ��� �� ��������� ���������� ��� �������
		//https://learn.javascript.ru/event-bubbling
		var event = new MouseEvent("click",{bubbles:true});
		//������� ��������, ������� ��������� � �������� ������� ���������� � ��������� �������
		// (��� ����� ������������ ��� �������)
		container.children[1].firstElementChild.dispatchEvent(event);
	},1000)
}
//�������� ����� ������ ������� �� �������� � ������� slider
var slider = document.getElementsByClassName('slider')[0]
//��������� ������ ��������, ������� ����� �������� �������
var images = ['first.jpg','five.jpg','four.jpg','second.jpg', 'third.jpg']
//��������� �-��, ������� ����������� ����, ��������� 4 ���������:
//-������� � ������� ����� ��������� ��� �������
//-������ ��������
//-������
//-������
initializeSlider(slider,images,100,100);

var moveLeft = document.getElementsByClassName('left');
console.log(moveLeft);
moveLeft.onclick = function(){

}