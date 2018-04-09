/**
 * Created by Note_Bezdvor on 01.04.2018.
 */
"use strict"
if(localStorage.getItem('card') != null){
    var goodsFromStorage = JSON.parse(localStorage.getItem('card'));

    var goodsOnPage = goodsFromStorage.map(function(item){
        for(var i = 0; i < str.length; i++){
            if(item.name == str[i].name){
                return Object.assign(item,str[i])
            }
        }
    })
    console.log(goodsOnPage);
    var productInPage = document.createElement('div');
    productInPage.setAttribute('class','cardOfGoods');

    var goodInCard = document.createElement('div')
    goodInCard.setAttribute('class','cartGood');
    goodInCard.innerHTML = goodsOnPage[0].name
    //goodInCard.style.float = 'left'

    var cartImage = document.createElement('img');
    cartImage.setAttribute('src',goodsOnPage[0].img);
    cartImage.setAttribute('class','img-fluid');
    //cartImage.setAttribute('class','rounded mx-auto d-block');

    var priceInCart = document.createElement('div')
    priceInCart.setAttribute('class','cartprice')
    priceInCart.innerHTML = goodsOnPage[0].price

    //var inp = document.createElement('input')
    //inp.setAttribute('type', 'number')
    //inp.setAttribute('class','cartInput')
    //inp.value = 1
    //inp.style.float = 'right'

    var closer = document.createElement('div')
    closer.setAttribute('class','closeDiv');
    closer.innerHTML = '<img src="images/times-circle.svg" alt="close"/>';
    closer.style.display = 'block'
    closer.onclick = function(){
        document.body.removeChild(this.parentElement)
        localStorage.removeItem('card')
    }

    //var clearfix = document.createElement('div')
    //clearfix.style.clear = 'both'

    productInPage.appendChild(goodInCard)
    productInPage.appendChild(cartImage)
    productInPage.appendChild(priceInCart)
    productInPage.appendChild(closer)
    //outerCard.appendChild(inp)
    //productInPage.appendChild(clearfix)
    document.body.appendChild(productInPage)

    // for(var i = 0; i < goodsFromStorage.length; i++){
    // 	console.log(goodsFromStorage[i])
    // }
}else{
    var ifNoGood = document.createElement('div');
    ifNoGood.setAttribute('class','noGood');
    ifNoGood.innerHTML ='No goods here';
    document.body.appendChild(ifNoGood);
}
