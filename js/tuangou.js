//
//alert('a');
handleCart();
handleSearch();
handleLink();
handleScroll();
function handleCart(){
	var oCartBox = document.querySelector('.cart-box');
	var oCart = document.querySelector('.cart-box .cart');
	var oCartA = oCart.getElementsByTagName('a')[0];
	var oCartLoader = document.querySelector('.cart-content .loader');
	var oCartContent = document.querySelector('.cart-content');
	var oEmptySpan = document.querySelector('.cart-box .empty-cart');

	oCartBox.onmouseenter = function(){	
	    oCart.style.background = '#fff';
		oCartA.style.color = '#ff6700';
		
		oCartLoader.style.display = 'block';
		// oCartContent.style.height = '100px';
		animation(oCartContent,{height:100},false,function(){
			oCartLoader.style.display = 'none';
			oEmptySpan.style.display = 'block';
		});
	}
	oCartBox.onmouseleave = function(){
		oCart.style.background = '#424242';
		oCartA.style.color = '#b0b0b0';
		oEmptySpan.style.display = 'none';
		animation(oCartContent,{height:0});	
		//oCartLoader.style.display = 'none';

	}
}
function handleSearch(){
	var oInput = document.querySelector('.header .search .inputer input');
	//console.log(oInput);
	var oInputer = document.querySelector('.header .search .inputer');
	var oSearchBtn = document.querySelector('.header .search .search-btn');
	oInput.onfocus = function(){
		oInputer.style.borderColor = '#ff6700';
		oSearchBtn.style.borderColor = '#ff6700';
	}
	oInput.onblur = function(){
		oInputer.style.borderColor = '#e0e0e0';
		oSearchBtn.style.borderColor = '#e0e0e0';
	}	
}
function handleLink(){
	var oA = document.querySelector('.hot .xia a');
	//console.log(oA);
	var oMask = document.querySelector('#mask');
	var oMaskBox = document.querySelector('#mask-box');
	//console.log(oMaskBox);
	oA.onclick = function(ev){
		var oEvent = ev || event;
		oMask.style.display = 'block';
		oMaskBox.style.display = 'block';
		//document.body.style.overflow = 'hidden';
		oEvent.stopPropagation();
		animation(oMaskBox,{'top':400},true);
	}
	document.onclick = function(){
		oMask.style.display = 'none';
		oMaskBox.style.display = 'none';
	}
    oMaskBox.onclick = function(ev){
	    var oEvent = ev || event;
	    oEvent.stopPropagation();
    }
}

function handleScroll(){
  var oHeadContainer = document.getElementById('');
 }






