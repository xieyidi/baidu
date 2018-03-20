function getd(va){
	var uart=document.getElementById("alrt");
	uart.innerHTML="";
	var k=0;
	va.s.forEach(function(el){
		if(k<4){			
		var oli=document.createElement("li");
		uart.style.visibility="visible";
		oli.className="ldis";
		oli.innerHTML="<a href='https://www.baidu.com/s?wd="+el+"&rsv_spt=1&rsv_iqid=0xc32384f0000053b0&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=87048150_dg&ch=1&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100'>"+el+"</a>";
        uart.appendChild(oli);
        k++;
		}//k
	})
}

window.onload=function(){	
	
	var inp=document.getElementsByTagName("input")[1];	
	var bts=document.getElementsByClassName("skin")[0];
	var bs=document.getElementsByClassName("sb")[0];
	var tags=document.getElementsByClassName("tags")[0];
	var sopo=document.getElementsByClassName("b-r-img")[0];
	var bodyerl=document.getElementsByClassName("bodyer-l")[0];
	var onof=false;
	var bg=document.getElementsByClassName("bg")[0];
//	window.onresize=function(){
//	bg.style.width=window.innerWidth+'px';
//	bg.style.height=window.innerHeight+'px';}
	
	inp.oninput=function(){
	var jp=document.createElement("script");
	jp.type="text/javascript";
	var val=inp.value;
	if(val){
	jp.src="http://suggestion.baidu.com/su?cb=getd&wd="+val+"&sc=hao123&_=1427618279165";
	document.body.appendChild(jp);}
	}//oninput
	inp.onblur=function(){
		var uart=document.getElementsByTagName("ul")[0];
		uart.style.visibility="hidden";
	}//oninput
	bts.onclick=function(){
		bs.className="from-t";
		onof=true;
	}
	
//	var s11='https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/skin_plus/887.jpg';
//	var s12='https://ss2.bdstatic.com/lfoZeXSm1A5BphGlnYG/skin_plus/877.jpg';
//	var s13='https://ss0.bdstatic.com/l4oZeXSm1A5BphGlnYG/skin_plus/883.jpg';
//	var s14='https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/skin_plus/881.jpg';
//	var s15='https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin_plus/880.jpg';
//	var s16='https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/skin_plus/879.jpg';
//	var s17='https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin_plus/878.jpg';
//	var s18='https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin_plus/876.jpg';
//	var s19='https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/skin_plus/874.jpg';
	

	
	tags.addEventListener("mouseenter",function(e){/*皮肤种类标签*/
		var target=e.target;
		var bl=document.getElementsByClassName("bodyer-l");
		var imgl=document.getElementsByTagName("img");
		var skin1=[s11,s12,s13,s14,s15,s16,s17,s18,s19];
		if(target.nodeName.toLowerCase()=="li"){/*lowercase别忘了加括号 是一个方法*/
			target.childNodes[0].style.color="#fff";
			var inde=[].indexOf.call(target.parentNode.querySelectorAll('li'),target);
			switch(inde)
			{
			case 1:(function(){
				for(var pi=0;pi<skin1.length;pi++)
					{
					imgl[pi].src=skin1[pi];
					console.log(imgl[pi]+skin1[pi]);
					}}
			)()
			break;
			}//switch
		}
	},true);

	tags.addEventListener("mouseleave",function(e){
		var target=e.target;
		if(target.nodeName.toLowerCase()=="li"){/*lowercase别忘了加括号 是一个方法*/
			target.childNodes[0].style.color="#666";
		}
	},true);
	var ai=document.getElementsByClassName("as")[0];
	var ae=document.getElementById("ae");
	var ac=document.getElementsByClassName("ac")[0];
	var bg=document.getElementsByClassName("bg")[0];
	
	ai.addEventListener("click",function(e){/*改变透明度效果*/
		var mx=e.clientX;
		var dis=mx-886;
		console.log(dis+":");
		if(dis>100){dis=100;}else if(dis<0){dis=0;}
		ae.innerHTML=dis+'%';
		ac.style.left=dis+'px';
		var edis=dis+'px';
		ae.style.left=edis+'px';
		var ause=(dis/100).toFixed(1);
		console.log(ause);
		sopo.style.opacity=ause;
	},true)
	bodyerl.addEventListener("click",function(e){/*背景更换效果*/
		var target=e.target;
		if(target.nodeName.toLowerCase()=="img")
			{
			sopo.src=target.src;
			}
	},true)
	bg.addEventListener("click",function(e){
		var target=e.target;
		if(e.clientY>300){
			bs.className="to-t";
			console.log(sopo.src);
			var ins=sopo.src.lastIndexOf('/img');/*取得的是完整路径：http://localhost:8080/liulan/img/sma3.jpg*/
			var str=sopo.src.substring(ins+1);
			console.log("++"+str);
			
			this.style='background: url('+str+') no-repeat;b ackground-size:100% auto' ;
			console.log(this);
		};
	},true)
}