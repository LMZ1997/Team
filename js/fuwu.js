handleCart();
handleNav();
function handleCart(){
	var oCart=document.querySelector('.head_first .shopping-car');
	var oCartBox=document.querySelector('.head_first  .cart_box');
	var oSpan=document.querySelector('.head_first  .cart_box span');
	var timer=null;
	var oDiv=document.createElement('div');
	oCart.onmouseenter=function(){
		clearTimeout(timer);
		oCartBox.appendChild(oDiv);
		oDiv.className='loader'
		animation(oCartBox,{height:100},false,function(){
			
			oDiv.className='';
			oSpan.style.display='block';
		});
	}
	oCart.onmouseleave=function(){
		timer=setTimeout(function(){
			animation(oCartBox,{height:0});
		},500)
		
	}
	oCartBox.onmouseenter=function(){
		clearTimeout(timer);
		oCartBox.style.height='100px';
	}
	oCartBox.onmouseleave=function(){
		timer=setTimeout(function(){
			animation(oCartBox,{height:0});
		},500)
	}
}
function handleNav(){
	var aNavLi=document.querySelectorAll('.header .nav_second li');
	console.log(aNavLi)
	var oUl=document.querySelector('.nav_content ul');
	var oNavBox=document.querySelector('.nav_content');
	var index=0;
	for (var i = 0; i < aNavLi.length; i++) {
		aNavLi[i].onmouseenter=function(){
			aNavLi[i].index=i;
			animation(oNavBox,{height:200});
			loadData(this.index)
		}
	}
	function loadData(index){
		var aData=aItems(index);
		for (var i = 0; i < aData.length; i++) {
			var oLi=document.createElement('li');
			oLi.className='right_line hot';
			var oImg=document.createElement('img');
			oImg.src=aData[i].img;
			oLi.appendChild(oImg);
			oUl.appendChild(oLi);
		}
	}
	var aItems=[
		[
			{
				img:'images/shouji1.png',
			},
			{
				img:'images/shouji2.png',
			},
			{
				img:'images/shouji3.png',
			}
		]
	]
}	
