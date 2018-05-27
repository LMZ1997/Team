//2018.05.18

handleCarousel();
handleNav();
function handleCarousel(){
	new Carousel({
			id:'carousel',
			aImg:[
			'images/lun01.jpg',
			'images/lun02.jpg',
			'images/lun03.jpg',
			'images/lun04.jpg',
			'images/lun05.jpg'],
			width:1080,
			height:450,
			playDuration:1000
		});
}
function handlesearch(){
	var oInput = document.querySelector('.hot .inputer input');
	var oInputer = document.querySelector('.hot .sou .inputer');

	oInputer.onfocus = function(){
		oInputer.style.borderColor = 'black';
		//value placeholder = 'none'
	}
}
function handleNav(){
	var oNavcontent = document.querySelector('.hot .nav-content');
	var oNavA = document.querySelectorAll('.hot .hd a');
	var oNavUl = oNavcontent.getElementsByTagName('ul')[0];
	var oNavloader = document.querySelector('.nav-content .loader');
	var timer = null;
	for(var i = 0;i<oNavA.length;i++){
		oNavA[i].index = i;
		oNavA[i].onmouseenter = function(){
			clearTimeout(timer);
			oNavUl.innerHTML = '';
			//oNavcontent.style.display = 'block';
			oNavcontent.style.borderTop = '1px solid #ccc'
			animation(oNavcontent,{height:200},false);
			oNavloader.style.display = 'block';
			var index = this.index;
			setTimeout(function(){
				loadData(index);
				oNavloader.style.display = 'none';
			},1000);
		}
		oNavA[i].onmouseleave = function(){
			timer = setTimeout(function(){
				oNavcontent.style.borderTop = 'none';
				animation(oNavcontent,{height:0},false);
				oNavloader.style.display = 'none';
				oNavUl.innerHTML = '';
			},600)
		oNavcontent.onmouseenter =function(){
			clearTimeout(timer);
		}
		oNavcontent.onmouseleave = function(){
			timer = setTimeout(function(){
				oNavcontent.style.borderTop = 'none';
				animation(oNavcontent,{height:0},false);
			},600)
		}	
		}
		function loadData(index){
			//console.log(index)
			oNavUl.innerHTML = '';//清空
			var Datas = aNavItems[index];
			if(!Datas){
				return;
			}
			for(var i =0; i<Datas.length;i++){
				var oLi = document.createElement('li');
				var oDiv = document.createElement('div');
				oDiv.className = 'img-box';
				var oImg = document.createElement('img');
				oImg.src = Datas[i].img;
				var oP1 = document.createElement('p');
				oP1.className = "pro-nam";
				oP1.innerHTML = Datas[i].name;
				var oP2 = document.createElement('p');
				oP2.className = "pro-pri";
				oP2.innerHTML = Datas[i].price + "元起";
				if(Datas[i].tag){
					var oSpan = document.createElement('span');
					oSpan.className = "tag";
					oSpan.innerHTML = Datas[i].tag;
					oLi.appendChild(oSpan)
				}
				oDiv.appendChild(oImg);
				oLi.appendChild(oDiv);
				oLi.appendChild(oP1);
				oLi.appendChild(oP2);
				oNavUl.appendChild(oLi);
			}
		}
	}	
}