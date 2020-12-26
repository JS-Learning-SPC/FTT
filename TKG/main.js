(function(d,b,w){
	let q = d.createElement('div');
	q.id = "sakura";
	q.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.yuki{'+
	'position:absolute;height:0;width:0;'+
	'border: 10px solid white;'+
	'border-radius: 0px;'+
	'border-radius: 50%;}'+
	'.type1{-webkit-animation:v1 6s infinite;animation:v1 6s infinite;}'+
	'.type2{-webkit-animation:v2 6s infinite;animation:v2 6s infinite;}'+
	'.type3{-webkit-animation:v3 5s infinite;animation:v3 5s infinite;}'+
	'.type4{-webkit-animation:v4 5s infinite;animation:v4 5s infinite;}'+
	'.type5{-webkit-animation:v5 4s infinite;animation:v5 4s infinite;}'+
	'.type6{-webkit-animation:v5 4s infinite;animation:v6 4s infinite;}'+
	'@-webkit-keyframes v1{'+
		'from{-webkit-transform: rotate(0deg);}'+
		'50%{-webkit-transform: rotate(270deg);}'+
		'to{-webkit-transform: rotate(1deg);}'+
	'}'+
	'@-webkit-keyframes v2{'+
		'from{-webkit-transform: rotate(-90deg);}'+
		'50%{-webkit-transform: rotate(-360deg);}'+
		'to{-webkit-transform: rotate(-89deg);}'+
	'}'+
	'@-webkit-keyframes v3{'+
		'from{-webkit-transform: rotate(0deg);}'+
		'50%{-webkit-transform: rotate(270deg);}'+
		'to{-webkit-transform: rotate(1deg);}'+
	'}'+
	'@-webkit-keyframes v4{'+
		'from{-webkit-transform: rotate(-90deg);}'+
		'50%{-webkit-transform: rotate(-360deg);}'+
		'to{-webkit-transform: rotate(-89deg);}'+
	'}'+
	'@-webkit-keyframes v5{'+
		'from{-webkit-transform: rotate(0deg);}'+
		'50%{-webkit-transform: rotate(270deg);}'+
		'to{-webkit-transform: rotate(1deg);}'+
	'}'+
	'@-webkit-keyframes v6{'+
		'from{-webkit-transform: rotate(-90deg);}'+
		'50%{-webkit-transform: rotate(-360deg);}'+
		'to{-webkit-transform: rotate(-89deg);}'+
	'}'+
	'@keyframes v1{'+
		'from{transform: rotate(0deg);}'+
		'50%{transform: rotate(270deg);}'+
		'to{transform: rotate(1deg);}'+
	'}'+
	'@keyframes v2{'+
		'from{transform: rotate(-90deg);}'+
		'50%{transform: rotate(-360deg);}'+
		'to{transform: rotate(-89deg);}'+
	'}'+
	'@keyframes v3{'+
		'from{transform: rotate(0deg);}'+
		'50%{transform: rotate(270deg);}'+
		'to{transform: rotate(1deg);}'+
	'}'+
	'@keyframes v4{'+
		'from{transform: rotate(-90deg);}'+
		'50%{transform: rotate(-360deg);}'+
		'to{transform: rotate(-89deg);}'+
	'}'+
	'@keyframes v5{'+
		'from{transform: rotate(0deg);}'+
		'50%{transform: rotate(270deg);}'+
		'to{transform: rotate(1deg);}'+
	'}'+
	'@keyframes v6{'+
		'from{transform: rotate(-90deg);}'+
		'50%{transform: rotate(-360deg);}'+
		'to{transform: rotate(-89deg);}'+
	'}'+
	'</style>';
	b.appendChild(q);

	let h = w.innerHeight;
	let u = d.documentElement.scrollTop || b.scrollTop;
	let z = 9999;
	let t = new Array();
	let l = new Array();
	let y = new Array();
	let s = new Array();
	let g = new Array();
	let c = new Array();
	d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);
	for(let i=0;i<30;i++){
		var m = d.createElement('div');
		m.id = 'yukinko'+i;
		t[i] = Math.random()*-1000+u;
		l[i] = Math.random()*w.innerWidth;
		m.setAttribute('style','z-index:'+(z+i)+';top:'+t[i]+'px;left:'+l[i]+'px;');
		let clss = 'yuki type'+(Math.floor(Math.random()*6)+1);
		m.setAttribute('class',clss);
		q.appendChild(m);
		y[i] = Math.random()*40+5;
		s[i] = Math.random()*5+2;
		g[i] = d.getElementById('yukinko'+i);
		c[i] = 0;
	}
	setInterval(function(){
		for(let i=0;i<30;i++){
			if(t[i]<u+h-40){
				if(y[i]>=c[i]){
					l[i] = l[i]+0.5+Math.random()*0.5;
				}else{
					l[i] = l[i]-0.5-Math.random()*0.5;
				}
				if((y[i]*2)<=c[i]){
					c[i] = 0;
				}
			}else{
				t[i] = u-40;
				l[i] = Math.random()*w.innerWidth;
			}
			t[i] = t[i]+s[i];
			g[i].style.top = t[i]+'px';
			g[i].style.left = l[i]+'px';
			c[i]++;
		}
	},45);
})(window.document,window.document.body,window);
