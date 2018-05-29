handleCart();
handleBox();
handleNav();
handleSearch();
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
function handleBox(){
	var aBoxLi=document.querySelectorAll('.art_art_top_left li');
	var oBox=document.querySelector('.Box');
	var oBoxUl=document.querySelector('.Box ul');
	var Items=[
		[
			{
				img:'images/shouji1.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji1.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji1.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji1.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji1.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji3.png',
				name:'小米mix2s'
			},
			{
				img:'images/shouji1.png',
				name:'小米mix2s'	
			},
			{
				img:'images/shouji2.png',
				name:'小米mix2s'	
			}
		],
		[
			{
				img:'images/hongmi1.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi2.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi3.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi1.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi2.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi1.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi2.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi3.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi1.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi2.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi1.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi2.png',
				name:'红米note3'	
			},
			{
				img:'images/shouji3.png',
				name:'红米note3'
			},
			{
				img:'images/shouji1.png',
				name:'红米note3'	
			},
			{
				img:'images/hongmi2.png',
				name:'红米note3'	
			}
		],
		[
		]
	]
	var index=0;
	for(var i=0;i<aBoxLi.length;i++){
		aBoxLi[i].index=i;
		aBoxLi[i].onmouseenter=function(){
			oBoxUl.innerHTML='';
			oBox.style.display='block';
			loadingData(this.index);
			for (var j = 0; j < aBoxLi.length; j++) {
				aBoxLi[j].style.background='';
			}			
			this.style.background='#ff6700'			
		}
	}
	function loadingData(index){
		var adata=Items[index];
		if(!adata){
			return;
		}	
		for (var i = 0; i < adata.length; i++) {
			var oLi=document.createElement('li');
			var oImg=document.createElement('img');
			var oSpan=document.createElement('span');
			oImg.src=adata[i].img;
			oSpan.innerHTML=adata[i].name;
			oBoxUl.appendChild(oLi);
			oLi.appendChild(oImg);
			oLi.appendChild(oSpan);
		}
	}
}
function handleNav(){
	var aNavLi=document.querySelectorAll('.header .nav_second li');
	var oNav=document.querySelector('.header .nav_second');
	var oUl=document.querySelector('.nav_content ul');
	var oNavBox=document.querySelector('.nav_content');
	var index=1;
	var timer=null;
	var timerBox=null;
	var oDiv=document.querySelector('.art_art_top_left');
	var oBox=document.querySelector('.Box');
	var aBoxLi=document.querySelectorAll('.art_art_top_left li');
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
	for (var i = 1; i < aNavLi.length-2; i++) {
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
			oNavBox.style.borderTop='none';
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
			oNavBox.style.borderTop='none';
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
	aNavLi[0].onmouseenter=function(){
		clearTimeout(timerBox);
		oDiv.style.display='block';
	}
	aNavLi[0].onmouseleave=function(){
		timerBox=setTimeout(function(){
			oDiv.style.display='none';
			oBox.style.display='none';
			for (var i=0;i<aBoxLi.length;i++) {
				aBoxLi[i].style.background=''
			}
		},500)
	}
	oDiv.onmouseover=function(){
		clearTimeout(timerBox);
		oDiv.style.display='block';
	}
	oDiv.onmouseout=function(){
		timerBox=setTimeout(function(){
			oDiv.style.display='none';
			oBox.style.display='none';
			for (var i=0;i<aBoxLi.length;i++) {
				aBoxLi[i].style.background=''
			}
		},200)
	}
	oBox.onmouseenter=function(){
		clearTimeout(timerBox);
		oBox.style.display='block';
	}
	oBox.onmouseleave=function(){
		timerBox=setTimeout(function(){
			oDiv.style.display='none';
			oBox.style.display='none';
			for (var i=0;i<aBoxLi.length;i++) {
				aBoxLi[i].style.background=''
			}
		},200)
	}
}
function handleSearch(){
	var oInput=document.querySelector('.search input');
	var oSearchBox=document.querySelector('.fangdajing');
	var oContent=document.querySelector('.search_content');
	var oFDJ=document.querySelector('.header .fangdajing');
	var aSearchLi=document.querySelectorAll('.search_content li');
	var oSearchContent=document.querySelector('.search_content');
	var aSpan=document.querySelectorAll('.search span');
	oInput.onfocus=function(){
		oContent.style.display='block';
		oInput.style.border='1px solid #ff6700';
		oFDJ.style.border='1px solid #ff6700';
		aSpan[0].style.display='none';
		aSpan[1].style.display='none';
	}
	oInput.onblur=function(){
		oContent.style.display='none';
		oInput.style.border='1px solid #b0b0b0';
		oFDJ.style.border='1px solid #b0b0b0';
		aSpan[0].style.display='block';
		aSpan[1].style.display='block';
	}
	oSearchContent.onmouseenter=function(){
		for (var i = 0; i < aSearchLi.length; i++) {
			aSearchLi[i].onmouseover=function(){
				for(var j=0;j<aSearchLi.length;j++){
					aSearchLi[j].style.background='';
				}
				this.style.background='#ccc'
			}
		}
	}
	oSearchContent.onmouseleave=function(){
		for (var i = 0; i < aSearchLi.length; i++) {
			aSearchLi[i].style.background='';
		}
	}
}
	
