

/*

何敏

*/

window.onload = function(){

// function just(){
// 	alert('hhhhh');
// var back = document.getElementById("maxback");
// back.style.background ='red';
// }

// function next(){

// }
var oshop = document.getElementById("shop");
var ocart = document.getElementById("cart");
ocart.onmouseover =function(){
	ocart.style.color ='#ff6700';
	ocart.style.background ='#fff';
	oshop.style.display ='block';
}
oshop.onmouseover =function(){
	
	oshop.style.display ='block';
	ocart.style.color ='#ff6700';
	ocart.style.background ='#fff';

}
ocart.onmouseout =function(){
	ocart.style.color ='#b0b0b0';
	ocart.style.background ='#424242';
	oshop.style.display ='none';
}
oshop.onmouseout =function(){
	
	oshop.style.display ='none';
	ocart.style.color ='#b0b0b0';
	ocart.style.background ='#424242';

}












var oa1 = document.getElementById("a1");
var offf = document.getElementById("f1");


oa1.onmouseover = function(){
	//alert('sss')
	//offf.style.display = 'block';
	
}

oa1.onmouseout = function(){
	//offf.style.display='none';
}








// -----------------------------------------

var olist1 = document.getElementById("list1");
var olist2 = document.getElementById("list2");
var olist3 = document.getElementById("list3");
var olist4 = document.getElementById("list4");
var olist5 = document.getElementById("list5");
var olist6 = document.getElementById("list6");
var olist7 = document.getElementById("list7");
var olist8 = document.getElementById("list8");
var olist9 = document.getElementById("list9");
var olist10 = document.getElementById("list10");

var oitem = document.getElementById("item");
var oitem1 = document.getElementById("item1");
var oitem2 = document.getElementById("item2");
var oitem3 = document.getElementById("item3");
var oitem4 = document.getElementById("item4");
var oitem5 = document.getElementById("item5");
var oitem6 = document.getElementById("item6");

oitem1.style.display='none';
	oitem2.style.display='none';
	oitem3.style.display='none';
	oitem4.style.display='none';
	oitem5.style.display='none';
	oitem6.style.display='none';

olist1.onmouseover =function(){
	
	omax1.style.display='none';
	oitem1.style.display='block';
}
oitem1.onmouseover =function(){
	
	oitem1.style.display='block';
	omax1.style.display='none';
}
olist1.onmouseout =function(){
	omax1.style.display='block';
	oitem1.style.display="none";
	
}
oitem1.onmouseout =function(){
	omax1.style.display='block';
	oitem1.style.display="none";
	
}




olist2.onmouseover =function(){
	omax1.style.display='none';
	oitem2.style.display='block';
}
oitem2.onmouseover =function(){
	omax1.style.display='none';
	oitem2.style.display='block';
}
olist2.onmouseout =function(){
	omax1.style.display='block';
	oitem2.style.display="none";
}
oitem2.onmouseout =function(){
	omax1.style.display='block';
	oitem2.style.display="none";
}


olist3.onmouseover =function(){
	omax1.style.display='none';
	oitem4.style.display='block';
}
oitem3.onmouseover =function(){
	omax1.style.display='none';
	oitem4.style.display='block';
}
olist3.onmouseout =function(){
	omax1.style.display='block';
	oitem4.style.display="none";
}
oitem3.onmouseout =function(){
	omax1.style.display='block';
	oitem4.style.display="none";
}

olist4.onmouseover =function(){
	omax1.style.display='none';
	oitem4.style.display='block';
}
oitem4.onmouseover =function(){
	omax1.style.display='none';
	oitem4.style.display='block';
}
olist4.onmouseout =function(){
	omax1.style.display='block';
	oitem4.style.display="none";
}
oitem4.onmouseout =function(){
	omax1.style.display='block';
	oitem4.style.display="none";
}

olist5.onmouseover =function(){
	omax1.style.display='none';
	oitem5.style.display='block';
}
oitem5.onmouseover =function(){
	omax1.style.display='none';
	oitem5.style.display='block';
}
olist5.onmouseout =function(){
	omax1.style.display='block';
	oitem5.style.display="none";
}
oitem5.onmouseout =function(){
	omax1.style.display='block';
	oitem5.style.display="none";
}

olist6.onmouseover =function(){
	omax1.style.display='none';
	oitem6.style.display='block';
}
oitem6.onmouseover =function(){
	omax1.style.display='none';
	oitem6.style.display='block';
}
olist6.onmouseout =function(){
	omax1.style.display='block';
	oitem6.style.display="none";
}
oitem6.onmouseout =function(){
	omax1.style.display='block';
	oitem6.style.display="none";
}




// function onmouseout(){
// 	alert('sss');
// }
// function onmouseover(){
// 	alert('hhhh');
// }


// -----------------------主视图------------------------
var omax1 = document.getElementById("maxbtn1");
var omax2 = document.getElementById("maxbtn2");
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");


omax1.onclick = function(){
var back = document.getElementById("maxback");
if (back.className=='pic') {

 back.className ='pic';}
 else if (back.className=='pic1') {
 back.className ='pic';}
  else if (back.className=='pic2') {
 back.className ='pic1';}
 // omax1.style.border  ='0px solid #000' ;

}
omax2.onclick = function(){
var back = document.getElementById("maxback");
 if (back.className=='pic2') {

 back.className ='pic2';}
 else if (back.className=='pic1') {
 back.className ='pic2';}
  else if (back.className=='pic') {
 back.className ='pic1';}
}

 r1.onclick = function(){
 	var back = document.getElementById("maxback");
 back.className ='pic';
} 
r2.onclick = function(){
	var back = document.getElementById("maxback");

 back.className ='pic1';
} 
r3.onclick = function(){
	var back = document.getElementById("maxback");
 back.className ='pic2';
}






	// ------------------图书-------------------------
		var odiv1 = document.getElementById("one");
var odiv2 = document.getElementById("two");
var odiv3 = document.getElementById("three");



var shu1 = document.getElementById('btnshu1');
var shu2 = document.getElementById('btnshu2');
var shu3 = document.getElementById('btnshu3');


	odiv1.style.display ='block';
	odiv2.style.display ='none';
	odiv3.style.display ='none';



	
shu1.onclick = function(){
	odiv2.style.display='none';
	odiv1.style.display ='block';
	odiv3.style.display ='none';
	
}
shu2.onclick = function(){
	odiv1.style.display='none';
	odiv2.style.display ='block';
	odiv3.style.display='none';
}
shu3.onclick = function(){
	odiv1.style.display='none';
	odiv3.style.display ='block';
	odiv2.style.display='none';
}

var odiv11 = document.getElementById("one1");
var odiv21 = document.getElementById("two1");
var odiv31 = document.getElementById("three1");

	odiv11.style.display ='block';
	odiv21.style.display ='none';
	odiv31.style.display ='none';

	var shu11 = document.getElementById('btnshu11');
var shu21 = document.getElementById('btnshu21');
var shu31 = document.getElementById('btnshu31');

shu11.onclick = function(){
	odiv11.style.display ='block';
	odiv21.style.display='none';
	odiv31.style.display ='none';
	
}
shu21.onclick = function(){
	odiv11.style.display='none';
	odiv21.style.display ='block';
	odiv31.style.display='none';
}
shu31.onclick = function(){
	odiv11.style.display='none';
	odiv21.style.display='none';
	odiv31.style.display ='block';
}

var odiv12 = document.getElementById("one2");
var odiv22 = document.getElementById("two2");
var odiv32 = document.getElementById("three2");

	odiv12.style.display ='block';
	odiv22.style.display ='none';
	odiv32.style.display ='none';

	var shu12 = document.getElementById('btnshu12');
var shu22 = document.getElementById('btnshu22');
var shu32 = document.getElementById('btnshu32');

shu12.onclick = function(){
	odiv12.style.display ='block';
	odiv22.style.display='none';
	odiv32.style.display ='none';
	
}
shu22.onclick = function(){
	odiv12.style.display='none';
	odiv22.style.display ='block';
	odiv32.style.display='none';
}
shu32.onclick = function(){
	odiv12.style.display='none';
	odiv22.style.display='none';
	odiv32.style.display ='block';
}


var odiv13 = document.getElementById("one3");
var odiv23 = document.getElementById("two3");
var odiv33 = document.getElementById("three3");

	odiv13.style.display ='block';
	odiv23.style.display ='none';
	odiv33.style.display ='none';

	var shu13 = document.getElementById('btnshu13');
	var shu23 = document.getElementById('btnshu23');
	var shu33 = document.getElementById('btnshu33');

shu13.onclick = function(){
	odiv13.style.display ='block';
	odiv23.style.display='none';
	odiv33.style.display ='none';
	
}
shu23.onclick = function(){
	odiv13.style.display='none';
	odiv23.style.display ='block';
	odiv33.style.display='none';
}
shu33.onclick = function(){
	odiv13.style.display='none';
	odiv23.style.display='none';
	odiv33.style.display ='block';
}
// ---------------------图书------------------------



}





		





