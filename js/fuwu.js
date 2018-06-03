handleCart();
handleBox();
handleNav();
handleSearch();
handleCarousel();
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
function handleCarousel(){
	function Carousel(option){
		this.oBox=document.getElementById(option.id);
		this.oUl=null;
		this.now=0;
		this.aImg=option.aImg;
		this.width=option.width;
		this.height=option.height;
		// this.oLi=null;
		// this.oImg=null;
		this.oLeft=null;
		this.oRight=null;
		this.init();//此处要放在最后，所有声明属性的后边
		this.bindEvent();
		this.playDuration=option.playDuration;
		if(option.playDuration){
			this.move();
		}
	}
	Carousel.prototype.init=function(){
		this.oBox.style.width=this.width+'px';
		this.oBox.style.height=this.height+'px';
		this.oBox.style.position='relative';
		this.oUl=document.createElement('ul');
		this.botUl=document.createElement('ul');
		this.botUl.className='botUl';
		for (var i = 0; i < this.aImg.length; i++) {
			var oLi=document.createElement('li');
			var botLi=document.createElement('li');
			var oImg=document.createElement('img');
			oLi.style.position='absolute';
			if(i==0){
				oLi.style.opacity=1;
				oLi.style.zIndex=50;
				botLi.className='active';
			}else{
				oLi.style.opacity=0.5;
				oLi.style.zIndex=0;
				botLi.className='';
			}			
			oImg.src=this.aImg[i];
			oImg.style.width=this.width+'px';
			oImg.style.height=this.height+'px';			
			this.oUl.appendChild(oLi);
			oLi.appendChild(oImg);				
			this.botUl.appendChild(botLi);			
		}

		this.oLeft=document.createElement('span');
		this.oRight=document.createElement('span');
		this.oLeft.className='oLeft';
		this.oRight.className='oRight';
		this.oLeft.innerHTML='&lt;';		
		this.oRight.innerHTML='&gt;';
		this.oBox.appendChild(this.oLeft);
		this.oBox.appendChild(this.oRight);	
		this.oBox.appendChild(this.botUl);
		this.oBox.appendChild(this.oUl);
		this.oLeft.style.display='none';
		this.oRight.style.display='none';
	}
	Carousel.prototype.bindEvent=function(){
		this.oRight.onclick=function(){
			this.now++;
			this.Tab();
		}.bind(this);
		this.oLeft.onclick=function(){
			this.now--;
			this.Tab();
		}.bind(this);
		this.botUl.addEventListener('click',function(ev){
				var oEvent=ev||event;
				// this.botUl.children.className='';
				for(var j=0;j<this.botUl.children.length;j++){
					this.botUl.children[j].className='';
				}
				oEvent.target.className='active';
				for(k=0;k<this.botUl.children.length;k++){
					if(this.botUl.children[k].className=='active'){
						this.now=k;
						console.log(this.now)
					}
				}
				this.Tab();
		}.bind(this),false)
	}
	Carousel.prototype.Tab=function(){
		for (var i = 0; i < this.oUl.children.length; i++) {
				this.oUl.children[i].style.zIndex=0;
				this.oUl.children[i].style.opacity=0;
				this.botUl.children[i].className='';
			}
			if(this.now>=this.oUl.children.length){
				this.now=0;
			}else if(this.now<0){
				this.now=this.oUl.children.length-1;
			}
			this.oUl.children[this.now].style.zIndex=50;
			// this.oUl.children[this.now].style.opacity=1;
			animation(this.oUl.children[this.now],{opacity:100});
			this.botUl.children[this.now].className='active';
	}
	Carousel.prototype.move=function(){
		var Timer=null;
		// Timer=setInterval(function(){
		// 	this.now++;
		// 	if(this.now>=this.oUl.children.length){
		// 		this.now=0;
		// 	}
		// 	console.log(this);
		// 	this.Tab();
		// }.bind(this),1000)

		//等同于
		Timer=setInterval(this.oRight.onclick,this.playDuration);
		this.oBox.onmouseover=function(){
			clearInterval(Timer);
		}
		this.oBox.onmouseout=function(){
			Timer=setInterval(this.oRight.onclick,this.playDuration);
		}.bind(this);
	}
	new Carousel({
		id:'carousel',
		aImg:[
			'images/shouye2.jpg','images/shouye1.jpg'
		],
		width:1230,
		height:250,
		playDuration:2000
	})
}
	
