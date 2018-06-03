handleCarbox();
handleNavbox();
handleSearch();
handleFirst();
handleCate();
handleCarousel1();
handleCarousel2();
handleCarousel3();
function handleFirst(){
	function animation(obj,attr,target){
		clearInterval(obj.timer);	
		obj.timer=setInterval(function(){
			var speed=0;
			var timer=null;
			var curr=parseFloat(getComputedStyle(obj,false)[attr]);//获取的是一个字符串,parsetFloat转换成整数和小数
			if(curr=="opacity"){
				curr=curr*100;
			}
			if(curr>target){
				speed=-20;
			}else{
				speed=20;
			}
			if(Math.abs(target-curr)<=Math.abs(speed)){
				clearInterval(timer);
				if(attr=="opacity"){
					obj.style[attr]=target/100;
				}else{
					obj.style[attr]=target+"px";
				}
			}else{
				if(attr=="opacity"){
					obj.style[attr]=(curr+speed)/100;
				}else{
					obj.style[attr]=curr+speed+"px";
				}
			}
		
		},30)
	}
	window.onscroll=function(){
		var otopnav=document.getElementById("topnav");
		var top=document.body.scrollTop || document.documentElement.scrollTop;
		if(top>=140){
			animation(otopnav,"height",60);
		}else{
			animation(otopnav,"height",0);
		}
	}
}
function handleCarbox(){
	var oCarbox=document.querySelector('.top .car-box');
	var oCar=document.querySelector('.top .car-box .car');
	var oCarcontent=document.querySelector('.top .car-box .car-content');
	var oLoading=document.querySelector('.top .car-box  .car-content .loader');
	var oEmptyBox=document.querySelector('.top .car-box  .car-content .empty-box');
	var aCarA=oCar.getElementsByTagName('a')[0];
	oCarbox.onmouseenter=function(){
		animation(oCarcontent,{height:100},false,function(){
			oLoading.style.display='none';			
			oEmptyBox.style.display='block';
		});	
		aCarA.style.color='#ff6700';
		oCar.style.background='#fff';
		oCarcontent.style.display='block';
		
	}
	oCarbox.onmouseleave=function(){
		aCarA.style.color='#b0b0b0';
		oCar.style.background='#424242';
		animation(oCarcontent,{height:0});	
		oEmptyBox.style.display='none';
		oLoading.style.display='block';
				
	}
}
function handleNavbox(){
	var aNavA=document.querySelectorAll('.nav .zhongjian li a');
	var oDropBox=document.querySelector('.nav .drop-box');
	var oLoading=document.querySelector('.nav .loader');
	var oUl=document.querySelector('.nav .drop-box ul');
	var timer=null;
	var timer1=null;
	for(var i=0;i<aNavA.length-2;i++){
		aNavA[i].index=i;
		aNavA[i].onmouseenter=function(){
			clearTimeout(timer);
			clearTimeout(timer1);
			oUl.style.display='none';
			animation(oDropBox,{height:230},false,function(){
				oLoading.style.display='block';			
			});
			timer1=setTimeout(function(){
				oUl.style.display='block';
				oLoading.style.display='none';	
			},1000)
			loadData(this.index);			
		}
		 aNavA[i].onmouseleave=function(){
		 	timer=setTimeout(function(){
		 		animation(oDropBox,{height:0},false,function(){
					oLoading.style.display='none';			
				});
		 	},500)	
		}
		oDropBox.onmouseenter=function(){
			clearTimeout(timer);
		}
		oDropBox.onmouseleave=function(){
			timer=setTimeout(function(){
		 		animation(oDropBox,{height:0},false,function(){
					oLoading.style.display='none';			
				});
		 	},500)	
		}
		var index=this.index;
		function loadData(index){
			var data=aNavItems[index];
			oUl.innerHTML='';
			if(!data){
				return false;
			}
			for(var i=0;i<data.length;i++){
				var oLi=document.createElement('li');
				if(data[i].tag){
					var oSpan=document.createElement('span');
					oSpan.className='tag';
					oSpan.innerHTML=data[i].tag;
					oLi.appendChild(oSpan);
				}
				oUl.appendChild(oLi);								
				var oDiv=document.createElement('div');
				oDiv.className='img';
				oLi.appendChild(oDiv);
				var oImg=document.createElement('img');
				oImg.src=data[i].img;
				oDiv.appendChild(oImg);
				var p1=document.createElement('p');
				p1.innerHTML=data[i].intro;
				oLi.appendChild(p1);
				var p2=document.createElement('p');
				p2.innerHTML=data[i].price+'元起';
				oLi.appendChild(p2);
				
				
				
				
			}
				
		}
		
	}
}
function handleSearch(){
	var oInput=document.querySelector('.nav .search .search-left input');
	var oSearch=document.querySelector('.nav .search');
	var oSearchLeft=document.querySelector('.nav .search .search-left');
	var oSearchBtn=document.querySelector('.nav .search .search-btn');
	var oSearchContent=document.querySelector('.nav .search .search-content');
	var aSearchA=document.querySelectorAll('.nav .search .search-left a');
	oInput.onfocus=function(){
		oSearchLeft.style.borderColor='#ff6700';
		oSearchBtn.style.borderColor='#ff6700';
		oSearchContent.style.display='block';
		oSearchContent.style.borderColor='#ff6700';
		aSearchA[0].style.display='none';
	}
	oInput.onblur=function(){
		oSearchLeft.style.borderColor='#e0e0e0';
		oSearchBtn.style.borderColor='#e0e0e0';
		oSearchContent.style.display='none';
		aSearchA[0].style.display='block';
	}
}
function handleCate(){
	var oNavLi=document.querySelector('.nav .list');
	var oListContent=document.querySelector('.jianjie .list-content');
	var oList=document.querySelector('.jianjie .list');	
	var aListA=document.querySelectorAll('.jianjie .list li a');
	var oUl=document.querySelector('.jianjie .list-content ul');
	var timer=null;	
	var timer1=null;
	oNavLi.onmouseenter=function(){
		clearTimeout(timer1);
		oList.style.display='block';					
	}
	oNavLi.onmouseleave=function(){
		timer1=setTimeout(function(){
			oList.style.display='none';	
		},500)						
	}
	oList.onmouseenter=function(){
		clearTimeout(timer1);
		clearTimeout(timer);
	}
	oList.onmouseleave=function(){
		oList.style.display='none';
		oListContent.style.display='none';	
	}
	for(var i=0;i<aListA.length;i++){
		aListA[i].index=i;
		aListA[i].onmouseenter=function(){
			for(var j=0;j<aListA.length;j++){
				aListA[j].className="";
			}
			this.className="active";
			oListContent.style.display='block';
			loadData(this.index);
		}
	}
	oListContent.onmouseenter=function(){
		oListContent.style.display='block';
		oList.style.display='block';
	}
	oListContent.onmouseleave=function(){
		timer=setTimeout(function(){
			oListContent.style.display='none';
			oList.style.display='none';
		},200)		
	}
	var index=this.index;
	function loadData(index){
		var data=aCateItems[index];
		oUl.innerHTML='';		
		if(!data){
			return false;
		}
		for(var i=0;i<data.length;i++){
			var oLi=document.createElement('li');
			var oImg=document.createElement('img');
			oImg.src=data[i].img;
			var oA=document.createElement('a');
			oA.innerHTML=data[i].intro;
			oLi.appendChild(oA);
			oLi.appendChild(oImg);
			oUl.appendChild(oLi);
		}
	}
}
function handleCarousel1(){
	new Carousel({
		id:'container1',
		aImg:[
			'./images/1.jpg.gif',
			'./images/2.jpg.gif',
			'./images/2.jpg',
		],
		width:'1600',
		height:'742',
		playDuration:3000
	})
}
function handleCarousel2(){
	new Carousel2({
		id:'container2',
		aImg:[
			'./images/xiaojiejie.gif',
			'./images/2.jpg.gif',
			'./images/2.jpg',
		],
		content:['AI 梦境虚化，人像模式新玩法,',
		'添加多款如梦境般的动态光斑效果，不仅为人像照片带',
		'来神奇的旋转、闪烁效果，更能一键分享朋友圈.'
		],
		width:'1226',
		height:'718',
		playDuration:3000
	})
}
function handleCarousel3(){
	new Carousel({
		id:'container3',
		aImg:[
			'./images/p4.gif',
			'./images/2.jpg.gif',
			'./images/2.jpg',
		],
		width:'1600',
		height:'742',
		playDuration:3000,
		
	})	
}
