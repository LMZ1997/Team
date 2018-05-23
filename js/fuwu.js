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
	var oNav=document.querySelector('.header .nav_second');
	var oUl=document.querySelector('.nav_content ul');
	var oNavBox=document.querySelector('.nav_content');
	var index=0;
	var timer=null;
	var aItems=[
		[
			{
				img:'images/shouji1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/hongmi1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/shouji1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/hongmi1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/shouji1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/hongmi1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/shouji1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/hongmi1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/hongmi3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
		[
			{
				img:'images/shouji1.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2',
				price:3229,
				tag:'热卖'
			}
		],
	]
	for (var i = 0; i < aNavLi.length-2; i++) {
		aNavLi[i].index=i;
		aNavLi[i].onmouseenter=function(){
			clearTimeout(timer)
			oUl.innerHTML='';	
			animation(oNavBox,{height:200});
			loadData(this.index);
			oNavBox.style.borderTop='1px solid #ccc';
		}
	}
	oNav.onmouseleave=function(){
		timer=setTimeout(function(){
			oUl.innerHTML='';
			animation(oNavBox,{height:0});
		},500)	
	}
	oNavBox.onmouseenter=function(){
		clearTimeout(timer);
		oNavBox.style.borderTop='1px solid #ccc';
		oNavBox.style.height='200px';
	}
	oNavBox.onmouseleave=function(){
		timer=setTimeout(function(){
			oUl.innerHTML='';
			animation(oNavBox,{height:0});
		},500)
	}
	function loadData(index){
		var aData=aItems[index];
		if(!aData){
			return;
		}
		for (var i = 0; i < aData.length; i++) {
			var oLi=document.createElement('li');
			oLi.className='right_line hot';
			var oImg=document.createElement('img');
			var oDiv=document.createElement('div');
			var oName=document.createElement('span');
			var oPrice=document.createElement('span');
			var oTag=document.createElement('span');
			oTag.innerHTML=aData[i].tag;
			oPrice.innerHTML=aData[i].price+'元起';
			oPrice.className='product_price';
			oName.className='product_name';
			oName.innerHTML=aData[i].name;
			oDiv.appendChild(oImg);
			oDiv.className='img_box';
			oImg.src=aData[i].img;
			oUl.appendChild(oLi);
			oLi.appendChild(oDiv);
			oLi.appendChild(oName);
			oLi.appendChild(oPrice);
		}
	}
}
function handle	
