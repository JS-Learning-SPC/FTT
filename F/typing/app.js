var QUESTION = 'Vamos a matar Companeros';
//一文字ずつmapで以下の処理を実行
var types = QUESTION.split('').map(function(str) {
	
	//spanタグを作成
	var type = document.createElement('span');
	//spanタグの設定
	type.className = 'type';
	type.textContent = str;　//引数をtextContentへ格納
	//htmlのclass「container」を指定し、span要素を入れる
	document.querySelector('.container').appendChild(type);
	return type;
});

var timer = null;
var startTime = 0;
//タイマースタート処理
function timerStart() {
	startTime = new Date().getTime();
	timer = setInterval(function() {
			//経過時間を算出
			var time = (new Date().getTime() - startTime) / 1000;
			document.querySelector('.timer').textContent = time.toFixed(3);
		}, 10) // 1/100秒
}

//タイマー終了処理
function timerEnd() {
	clearInterval(timer);
	timer = null;
}

let direct = 0; // 移動方向。0以外なら右へ、0なら左へ
let animCnt = 0; //奇数：Downアニメ実行
var x, y; // オブジェクト の座標
//文字移動  direct: 0=左, 1=右, 2=上, 3=下
function move(direct) {
	//エレメントを取得
	//const objMoji = document.querySelector('.timer');
	const objMoji = document.getElementById("image");
	const cssStyle = window.getComputedStyle(objMoji);
	var clientRect = objMoji.getBoundingClientRect() ;
	x = clientRect.left ;  // オブジェクトの現在位置を得る
	y = clientRect.top ;
	objMoji.style.transform = '';    // 前回移動アニメのtransform を消す
	
	let anim = '';
	switch(direct) {
		case 0: if (x >= 200) { anim = 'moveLeft'; } break;
		case 1: if (x <= 200) { anim = 'moveRight'; } break;
		case 2: if (y >= 0) { anim = 'moveUp'; } break;
		case 3: if (y <= 500) { anim = 'moveDown'; } break;
	}
	if (anim !== '') {
	    objMoji.style.animationName = anim;  // アニメ開始
	//    btnsDisabled(true); // ボタン無効化
	}
	animCnt++;
}
// animation 終了時の処理
document.addEventListener('animationend', () => {
	//エレメントを取得
	const objMoji = document.getElementById("image");
	const cssStyle = window.getComputedStyle(objMoji);
	const arr = cssStyle.transform.match(/\((.*)\)/)[1].split(",");   // 文字列 matrix(a, b, c, d, cx, cy) を分解
	x += parseInt(arr[4]);  // transform.x の値を加える
	y += parseInt(arr[5]);  // transform.y の値を加える

	objMoji.style.transform = '';    // アニメした transform を消す
	objMoji.style.left = x + 'px';   // 消した transform の影響を加味した位置を設定
	objMoji.style.top = y + 'px';
	objMoji.style.animationName = '';  // animationName を消す。こうしないと、次回に同じ方向のアニメが効かない。

	//実行が奇数回ならDownアニメ実行
	if (animCnt % 2 === 1) {
		move(3);
	}
	
	//btnsDisabled(false);  // ボタン有効化
});

//判定処理
document.addEventListener('keydown', function(event) {
	var keyCode = event.keyCode;
	//console.log(keyCode);
	if (keyCode === 13) { //enter key
		return ;
	}
	var key = '';
	if (keyCode === 32) { //space key
		key = ' ';
	}else if (keyCode >= 65 && keyCode < 90) { // a to z
		key = String.fromCharCode(keyCode);
		
		//大文字小文字判定
		if (event.shiftKey) {
			key = key.toUpperCase();
		}else{
			key = key.toLowerCase();
		}
	}
	
	if (key) {
		if (timer === null) {
			timerStart();
		}
		var next = types[0];
		if (next.textContent === key) {
			//クラスを付与
			next.classList.add('ok');
			//UPアニメーション
			move(2);
			types.shift(); //0番目の要素を削除
			if (types.length === 0) {
				alert('やったね♪');
				timerEnd();
			}
		}else{
			next.classList.add('ng');
		}
	}
});



//イコールは２つでも動くと思うが、３つの方が２つよりも厳密な判定になる
