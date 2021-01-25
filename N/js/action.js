var animations = [];
var guidanceMode;
guidanceMode = 'guidance visible';
var keyColor;
var isFever = false;
var keySize;
var keyPosX;
var keyPosY;
var guideImagePosX;
var stage;
var stageTrial = {};
var effects = [];
// モードの変数
var soundMode;
var informationMode;
var guidanceMode;
var colorTheme;
var typingMode = 'typing normal';
// 解像度調整
var firstImagePos;
var firstImageWidth;
var firstImageHeight;
var guideImageWidth;
var guideImageHeight;
var guideImagePosX;
var guideImagePosY;
var blinkValue;
// ローディングの変数
var isLoading = true;
var assetNumber = 44;
var assetCounter = 0;
var isTitle = false;
var textColor = 0;
var textColor2 = 255;

// アニメーションの変数
var animations = [];
var effects = [];

//ラインカラー
var objectColors = [
    [187, 70, 82],
    [187, 70, 82],
    [36, 100, 100],
    [36, 100, 100],
    [341, 91, 100],
  ];

　//一度しか呼ばれないセットアップ
  function setup(){
    var bodyNode = document.getElementsByTagName('body').item(0);
    var e = document.getElementById('menu');
    let canvas = createCanvas(e.offsetWidth,e.offsetHeight+5);

    // 解像度調整
    if (height < 620) {
        firstImagePos = height / 2 - 120;
        //    firstImageWidth = 584 * 0.9;
        //    firstImageHeight = 260 * 0.9;
        guideImagePosY = height - 160;
        keyPosY = height - 152;
    }	
          
    canvas.position(0,1500);
    canvas.style('z-index','-1');
    firstImagePos = height / 2 - 135;
    guideImagePosX = width / 2 + 30;
    keySize = 48;
    keyPosX = guideImagePosX - 333;
    keyPosY = height - 202;
    keyColor = 255;
    // 色の計算方法をHSB（色相、彩度、明度、透明度）にする
    colorMode(HSB, 360, 100, 100, 100);
    // 角度の計算方法を「度」にする
    angleMode(DEGREES);
    // 線の端を四角にする
    strokeCap(SQUARE);
    // フォントを変える
    textFont('oswald');

  }
　//常に繰り返されるドロウ
  function draw(){
        // 背景の表示
        setBackground();
        //アニメーションの表示
      　drawAnimation();
        // エフェクトの表示
        //drawEffect();
        // ガイドの表示
        //drawGuide();
    }
 
//キーダウンイベント
document.addEventListener('keydown', 
event => {
    if (event.key == 'a' || event.key == 'A') {
      Changeimage();

        for (var i = 0; i < 5; i++) {
          animations.push(new AnimationA());
        }
    }
});


//シャオヘイの画像をGIFへ変える
function Changeimage() {
      var elem = document.getElementById("syaohei");
      syaohei.setAttribute('src', 'GIF_syao.gif');
    }
//シャオヘイの画像を元に戻す
function imageReset(){
      var elem = document.getElementById("syaohei");
      syaohei.setAttribute('src', 'Syao1.jpg');
    }
    
// アニメーションのクラス
// Animation A
class AnimationA {
constructor() {
//ランダムにカラーをセット
this.color = objectColors[floor(random(objectColors.length))];
this.startPosition = 0;
this.endPosition = 0;
this.arcWidth = 120;
this.arcScale = floor(random(20));
this.arcWeight = 25;
this.arcStart = random(0, 180);
this.arcEnd = random(180, 360);
this.arcSpeed1 = 7;
this.arcSpeed2 = 3;
this.lifetime = 100;
this.alpha = 100;
}

draw() {
if (guidanceMode == 'guidance visible') {
//線や図形の輪郭線を描かなくする
noStroke();
//図形の塗りつぶしに使用する色を設定
fill(keyColor, this.alpha);
//rect(keyPosX, keyPosY, keySize, keySize, 10);
if (this.alpha > 0) {
  this.alpha -= 20;
}
}
//現在の座標システムのコピーを保存して、新しい描画状態を開始
push();
translate(width / 2, height / 2);
strokeCap(ROUND);
noFill();
//線や図形の輪郭線の色を指定する
stroke(this.color);

if (isFever == true) {
stroke(255);
}

strokeWeight(this.arcWeight);
arc(0, 0, this.arcWidth * this.arcScale, this.arcWidth * this.arcScale, this.arcStart, this.arcEnd);
//保存した座標システムに戻すことで、元の状態に戻す
pop();

this.arcStart += this.arcSpeed1;
this.arcEnd += this.arcSpeed2;


if (this.arcEnd < this.arcStart) {
this.lifetime = -1;
}
}
}




function drawAnimation() {
  if (animations.length <= 0) {
    imageReset();
  }
// アニメーションを呼び出す
if (animations.length > 0) {
//アニメーションの数だけくりかえす
for (var i = 0; i < animations.length; i++) {
//アニメーションの配列から順番に描く
animations[i].draw();

// アニメーションの寿命がきたら
if (animations[i].lifetime < 0) {
  // アニメーションを配列から消す
  animations.splice(i--, 1);

}
}
}
}
// エフェクトの表示
function drawEffect() {
// タイピングゲームの時は半透明の黒をひく
if (typingMode == 'game playing' || typingMode == 'game countDown') {
if (stage != stageTrial) {
fill(0, 10);
} else {
fill(0, 5);

}
noStroke();
rect(0, 0, width, height);
}
// エフェクトを呼び出す
if (effects.length > 0) {
//エフェクトの数だけくりかえす
for (var i = 0; i < effects.length; i++) {
//エフェクトの配列から順番に描く
effects[i].draw();

// エフェクトの寿命がきたら
if (effects[i].lifetime < 0) {
  // エフェクトを配列から消す
  effects.splice(i--, 1);
}
}
}
}
// 背景のセット
function setBackground() {
// 背景をぬりつぶす
if (
colorTheme == 'vivid' && objectColorNumber == '3'
) {
background(0, 0, 96);
} else if (
colorTheme == 'vivid' && objectColorNumber == '5'
) {
background(187, 100, 83);
} else if (
colorTheme == 'vivid' && objectColorNumber == '6'
) {
background(348, 50, 100);
} else if (
colorTheme == 'vivid' && objectColorNumber == '8'
) {
background(177, 80, 70);
} else if (
colorTheme == 'vivid' && objectColorNumber == '1' ||
colorTheme == 'vivid' && objectColorNumber == '7'
) {
background(43, 11, 91);
} else {
background('#83c5d8');
}
}

// チュートリアルの処理
function drawGuide() {
// タイトルは最初にだけ表示される
rectMode(CENTER);

// サウンドバー
if (soundMode == 'sound on') {
for (var i = 0; i < 5; i++) {
  rect(width / 2 + 23 + i * 4, firstImagePos + 8, 2, blink(-8, i * 40, 0, 30));
}
} else {
for (var i = 0; i < 5; i++) {
  rect(width / 2 + 23 + i * 4, firstImagePos + 7, 1, 1);
}
}

// キーボードガイドの表示
if (typingMode == 'typing normal') {
if (guidanceMode == 'guidance visible') {
// GAME
textAlign(CENTER);
noStroke();
fill(textColor, blink(3, 0, 1, 80));
rectMode(CORNER);
rect(guideImagePosX + 170, guideImagePosY - 41, 150, 45, 9);

fill(255);
textSize(15);
textFont('oswald');
text('G A M E  S T A R T', guideImagePosX + 248, guideImagePosY - 12);




}
}


rectMode(CORNER);
}

// 透明度のアニメーション
function blink(speed, phase, min, alpha) {
return blinkValue = (sin(frameCount * speed + phase) + min) / 2 * alpha;
}
