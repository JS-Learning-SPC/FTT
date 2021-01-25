jQuery(document).ready(function($) {
//bxslider
$('#slider ul').bxSlider({
	auto: true,
	mode: 'fade',
	speed: 2000,
	pause: 6000,
	pager: true,
	touchEnabled: true,
	responsive: true
});

//page top scroll
$('.scroll_top').click(function(){
	$('html, body').animate({'scrollTop': 0 }, 1500, 'easeOutQuint');
	return false;
});

//gnav scroll
$('#gnav a').click(function(event){
	event.preventDefault();
	var url = this.href;
	var parts = url.split('#');
	var target = parts[1];
	var target_offset = $('#'+target).offset();
	var target_top = target_offset.top - 60;
	$('html, body').animate({scrollTop:target_top}, 1500, 'easeOutQuint');
});

//rollover fade
/*$('a img').hover(
	function(){
		$(this).stop().fadeTo(200, 0.6);
	},
	function(){
		$(this).stop().fadeTo(200, 1.0);
});
*/

//colorbox
$('#menu a').colorbox({
	maxWidth:'90%',
	maxHeight:'90%'
});


});

 /*var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		var ballRadius = 10;
		var x = canvas.width/2;
		var y = canvas.height-30;
		var dx = 2;
		var dy = -2;

		function drawBall(){
			ctx.beginPath();
			ctx.arc(x, y, ballRadius, 0, Math.PI*2);
			ctx.fillStyle = "red";
			ctx.fill();
			ctx.closePath();
	
		};

		function draw(){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			drawBall();
			if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
			console.log('反転前 dx；' + dx);
			dx = -dx;
			console.log('反転後 dx；' + dx);
			}
			if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
				console.log('反転前 dy；' + dy);
				dy = -dy;
				console.log('反転後 dy；' + dy);
				}
	
			x += dx;
			y += dy;
		}

		setInterval(draw,10);*/
