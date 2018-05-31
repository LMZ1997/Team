function animation(obj,opation,isLinear,fnEnd){
			clearInterval(obj.timer);
			var iSpeed=0;		
				obj.timer=setInterval(function(){
					var isStopAll=true;
					//上边一行写在for循环外且定时器内
					for(attr in opation){
						
						var isStop=false;
						var curr=parseFloat(getComputedStyle(obj,false)[attr]);
						if(attr=='opacity'){
							curr=curr*100;
						}
						if(isLinear){
							if(curr>opation[attr]){
								iSpeed=-10;
							}else{
								iSpeed=10;
							}
							if(Math.abs(opation[attr]-curr)<=Math.abs(iSpeed)){
								isStop=true;
							}else{
								isStopAll=false;
							}
						}
						else{
							curr=Math.round(curr);
							iSpeed=(opation[attr]-curr)/3;
							iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
							if(!iSpeed){
								isStop=true;
							}else{
								isStopAll=false;
							}
						}							
						if(isStop){
							
							if(isLinear){
								if(attr=='opacity'){
									obj.style[attr]=opation[attr]/100;
								}
								else{
									obj.style[attr]=opation[attr]+'px';
								}
							}
			//!!!!!!!!!!!!!!!!!!!传递的函数参数写在此次函数执行要结束的地方
							// if(fnEnd){
							// 	fnEnd();
							// }
						}
						else{
							if(attr=='opacity'){
								obj.style[attr]=(curr+iSpeed)/100;
							}
							else{
								obj.style[attr]=curr+iSpeed+'px';
							}
						}
					}
					if(isStopAll){
						clearInterval(obj.timer);
						if(fnEnd){
								fnEnd();
							}
					}
				},30)
}

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