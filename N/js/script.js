// サウンドの変数
var bgmSound;
var bgmSound1;
var bgmSound2;
var bgmSound3;
var bgmSound4;
var bgmSound5;
var bgmSound6;
var bgmSound7;
var bgmSound8;
var bgmSound9;
var bgmSounds = [];
var clapSound;
var clavSound;
var cymbalSound;
var hihatSound;
var clickSound;
var scratchSound;
var scratchSound2;
var scratchSound3;
var scratchSound4;
var windSound;
var bellSound;
var pageSound;
var dropletSound;
var casherSound;
var stoneSound;
var billiardSound;
var tambourineSound;
var snareSound;
var cameraSound;
var tomSound;
var sleighBellSound;
var syntheSound;
var pluckSound;
var rimSound;
var snapSound;
var kickSound;
var keyboardSound1;
var keyboardSound2;
var keyboardSound3;

// 画像の変数
var logoImage;
var logoImageWhite;
var firstImage;
var guideImage;
var guideImageWhite;

// ローディングの変数
var isLoading = true;
var assetNumber = 44;
var assetCounter = 0;
var isTitle = true;

// モードの変数
var soundMode;
var informationMode;
var guidanceMode;
var colorTheme;
var typingMode;

// アニメーションの変数
var animations = [];
var effects = [];

// タイピングゲームの変数
var typingQuestions = [];
var typingCategory = 0;
var typingQuestion = [];
var typingKeys = [];
var typingIndex;
var typingCount;
var typingScore = 0;
var typingAccuracy = 0;
var typingSpacer;
var questionCount = 0;
var questionIndex;
var isCorrect = false;
var correctKeys = [];
var correctTimer = 0;
var correctCount = 0;
var isCombo = false;
var isComboBonus = false;
var comboBonus = 0;
var comboCount = 0;
var comboLevel = 0;
var maxComboCount = 0;
var timer = 0;
var frame = 0;
var playingTime = 0;
var characterIndex = 0;
var missIndex = 0;
var missCount = 0;
var missPenaly;
var wordCount = 0;
var basicWordCount = 0;
var elapsedTime = 0;
var rectSize = 50;
var notificationTimer = 0;
var notificationPosition = 0;
var isFever = false;
var feverCount = 0;
var feverTimer = 0;
var feverGauge = 440;
var lifeBonus;
var lifeGauge;
var maxLifeGauge = 440;
var countDownTimer = 0;
var countDownText = 3;
var bgmText = '';
var textColor = 0;
var textColor2 = 255;
var isDark = false;
var keyColor;
var keyColor2;
var keyColorW;
var keyColorB;
var keySize;
var keyPosX;
var keyPosY;
var stage;
var stageTrial = {};
var stageNature = {};
var stageMusic = {};
var stageDesign = {};
var stageFood = {};
var stageFantasy = {};
var stageTechnology = {};
var stageAll = {};
var isTrial;

var objectColorNumber = 1;

// 色の配列
var backgroundColors = [
  [187, 70, 82],
  [187, 70, 82],
  [36, 100, 100],
  [36, 100, 100],
  [341, 91, 100],
];

//var backgroundColors = [
//  [336, 81, 100], // pink
//  [183, 80, 89], // teal
//  [220, 100, 36], // navy
//  [220, 100, 36], // navy
//  [63, 100, 100], // yellow
//];

var objectColors = [
  [187, 70, 82],
  [187, 70, 82],
  [36, 100, 100],
  [36, 100, 100],
  [341, 91, 100],
];

var objectColorsCyber = [
  [336, 81, 100], // pink
  [183, 80, 89], // teal
  [183, 80, 89], // teal
  [220, 100, 36], // navy
  [0, 0, 100], // white
];

var objectColorsMonotone = [
  [0, 0, 100],
  [0, 0, 100],
  [0, 0, 60],
  [0, 0, 0],
  [0, 0, 0],
];

var objectColorsSnow = [
  [0, 0, 100],
  [0, 0, 100],
  [0, 0, 100],
  [0, 0, 100],
  [0, 0, 85],
];

var objectColorsTropical = [
  [187, 70, 82],
  [187, 70, 82],
  [36, 100, 100],
  [36, 100, 100],
  [341, 91, 100],
];

var objectColorsPastel = [
  [3, 30, 100],
  [24, 24, 100],
  [82, 15, 94],
  [158, 22, 91],
  [228, 14, 91],
];

var objectColorsSky = [
  [224, 91, 32],
  [224, 91, 32],
  [200, 63, 65],
  [200, 63, 65],
  [0, 0, 100],
];

var objectColorsCandy = [
  [330, 1, 98],
  [340, 100, 99],
  [340, 100, 99],
  [56, 40, 100],
  [56, 40, 100],
];

var objectColorsBauhaus = [
  [0, 0, 0],
  [354, 84, 75],
  [51, 91, 100],
  [225, 79, 60],
  [225, 79, 60],
];

var objectColorsBauhaus = [
  [0, 0, 0],
  [354, 84, 75],
  [51, 91, 100],
  [225, 79, 60],
  [225, 79, 60],
];

var objectColorsNature = [
  [256, 63, 16],
  [187, 69, 45],
  [177, 62, 56],
  [36, 21, 95],
  [25, 24, 87],
];

var brightColorSet = [
  [0, 0, 90], // cyber
  [0, 0, 50],
  [223, 90, 23],
  [186, 8, 95],
];

var darkColorSet = [
  [0, 0, 10], // cyber
  [0, 0, 50],
  [223, 90, 23],
  [186, 8, 95],
];

// 解像度調整
var firstImagePos;
var firstImageWidth;
var firstImageHeight;
var guideImageWidth;
var guideImageHeight;
var guideImagePosX;
var guideImagePosY;
var blinkValue;

// 音と画像をロードする
function loadAsset() {
  // 音楽データを読み込み
  bgmSound = loadSound('data/bgm1.mp3', assetLoaded);
  bgmSound1 = loadSound('data/bgm1.mp3', assetLoaded);
  bgmSound2 = loadSound('data/bgm2.mp3', assetLoaded);
  bgmSound3 = loadSound('data/bgm3.mp3', assetLoaded);
  bgmSound4 = loadSound('data/bgm4.mp3', assetLoaded);
  bgmSound5 = loadSound('data/bgm5.mp3', assetLoaded);
  bgmSound6 = loadSound('data/bgm6.mp3', assetLoaded);
  bgmSound7 = loadSound('data/bgm7.mp3', assetLoaded);
  bgmSound8 = loadSound('data/bgm8.mp3', assetLoaded);
  bgmSound9 = loadSound('data/bgm9.mp3', assetLoaded);
  clapSound = loadSound('data/clap.mp3', assetLoaded);
  clavSound = loadSound('data/clav.mp3', assetLoaded);
  cymbalSound = loadSound('data/cymbal.mp3', assetLoaded);
  hihatSound = loadSound('data/hihat.mp3', assetLoaded);
  clickSound = loadSound('data/cow.mp3', assetLoaded);
  scratchSound = loadSound('data/scratch.mp3', assetLoaded);
  scratchSound2 = loadSound('data/scratch2.mp3', assetLoaded);
  scratchSound3 = loadSound('data/scratch3.mp3', assetLoaded);
  scratchSound4 = loadSound('data/scratch4.mp3', assetLoaded);
  stoneSound = loadSound('data/stone.mp3', assetLoaded);
  billiardSound = loadSound('data/billiard.mp3', assetLoaded);
  windSound = loadSound('data/wind.mp3', assetLoaded);
  bellSound = loadSound('data/bell.mp3', assetLoaded);
  pageSound = loadSound('data/page.mp3', assetLoaded);
  dropletSound = loadSound('data/droplet3.mp3', assetLoaded);
  casherSound = loadSound('data/casher.mp3', assetLoaded);
  tambourineSound = loadSound('data/tambourine.mp3', assetLoaded);
  snareSound = loadSound('data/snare.mp3', assetLoaded);
  cameraSound = loadSound('data/camera.mp3', assetLoaded);
  tomSound = loadSound('data/tom.mp3', assetLoaded);
  sleighBellSound = loadSound('data/sleighBell.mp3', assetLoaded);
  syntheSound = loadSound('data/synthe.mp3', assetLoaded);
  pluckSound = loadSound('data/pluck.mp3', assetLoaded);
  rimSound = loadSound('data/rim.mp3', assetLoaded);
  snapSound = loadSound('data/snap2.mp3', assetLoaded);
  kickSound = loadSound('data/kick.mp3', assetLoaded);
  keyboardSound1 = loadSound('data/keyboard1.mp3', assetLoaded);
  keyboardSound2 = loadSound('data/keyboard2.mp3', assetLoaded);
  keyboardSound3 = loadSound('data/keyboard3.mp3', assetLoaded);

  // 画像データを読み込み
  logoImage = loadImage('data/logo.png', assetLoaded);
  logoImageWhite = loadImage('data/logo_white.png', assetLoaded);
  firstImage = loadImage('data/first.png', assetLoaded);
  guideImage = loadImage('data/guide.png', assetLoaded);
  guideImageWhite = loadImage('data/guide_white.png', assetLoaded);

  // 音と画像がロードされたらカウンターを増やす
  function assetLoaded() {
    assetCounter++;
    if (assetCounter == assetNumber) {
      isLoading = false;
    }
  }

  // BGMデータを配列に入れる
  bgmSounds.push(bgmSound1);
  bgmSounds.push(bgmSound2);
  bgmSounds.push(bgmSound3);
  bgmSounds.push(bgmSound4);
  bgmSounds.push(bgmSound5);
  bgmSounds.push(bgmSound6);
  bgmSounds.push(bgmSound7);
  bgmSounds.push(bgmSound8);
  bgmSounds.push(bgmSound9);
}

// 初期化（最初に一回だけ呼ばれる）
function setup() {
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);

  // フォントを変える
  textFont('oswald');

  // 色の計算方法をHSB（色相、彩度、明度、透明度）にする
  colorMode(HSB, 360, 100, 100, 100);

  // 角度の計算方法を「度」にする
  angleMode(DEGREES);

  // 線の端を四角にする
  strokeCap(SQUARE);

  // サウンドをFFT解析する
  fft = new p5.FFT();

  // データをロードする
  loadAsset();

  // タイピング初期化
  typingSetup();
}

// 表示と計算（繰り返し呼ばれる）
function draw() {
  if (isLoading == true) {
    // ローディングアニメーション
    drawLoadingAnimation();

  } else if (isLoading == false) {
    // 背景の表示
    setBackground();

    // アニメーションの表示
    drawAnimation();

    // エフェクトの表示
    drawEffect();

    // インフォメーションの表示
    drawInformation();

    // タイピングの表示
    drawTypingKeys();

    // ガイドの表示
    drawGuide();

    // ゲームモードのセットアップ
    gameMode();
  }
}

// ローディングアニメーションの表示
function drawLoadingAnimation() {
  background(0, 0, 30);
  fill(255);
  textAlign(CENTER);
  text('N O W  L O A D I N G  ( ' + assetCounter + ' / ' + assetNumber + ' )', width / 2, height / 2);
  stroke(255);
  noFill();
  rect(width / 2 - 100, height / 2 + 20, 200, 10);
  noStroke();
  fill(255);
  var rectWidth = 200 * assetCounter / assetNumber;
  rect(width / 2 - 100, height / 2 + 20, rectWidth, 10);
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
    background(0, 0, 90);
  }
}

// アニメーションの表示
function drawAnimation() {
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

// インフォメーションの表示
function drawInformation() {
  // ロゴの表示
  if (informationMode == 'information visible') {
    if (isDark == true) {
      image(logoImageWhite, 120, 42, 180, 36);
    } else {
      image(logoImage, 120, 42, 180, 36);
    }

    // クレジットの表示
    // ダークモードの時は文字の色を白くする
    if (isDark == true) {
      textColor = 255;
      textColor2 = 0;
    } else {
      textColor = 0;
      textColor2 = 255;
    }
    noStroke();
    fill(textColor);
    textStyle(NORMAL);
    textFont('oswald');
    textSize(10);

    textAlign(LEFT);
    text('D E S I G N  &  C O D E  @ D E S I G N L E S S 0          S O U N D  E F F E C T S  @ Y O S A Y S A W A K K U M A', 30, height - 30);
    textAlign(RIGHT);
    text(bgmText, width - 30, height - 30);

    // カラーテーマの表示
    textAlign(CENTER);

    // debug
    //    text(isDark, width - 400, 40);

    if (objectColorNumber == 0) {
      text('C O L O R  :  C Y B E R', width - 164, 40);
    } else if (objectColorNumber == 1) {
      text('C O L O R  :  T R O P I C A L', width - 164, 40);
    } else if (objectColorNumber == 2) {
      text('C O L O R  :  M O N O T O N E', width - 164, 40);
    } else if (objectColorNumber == 3) {
      text('C O L O R  :  P A S T E L', width - 164, 40);
    } else if (objectColorNumber == 4) {
      text('C O L O R  :  S N O W', width - 164, 40);
    } else if (objectColorNumber == 5) {
      text('C O L O R  :  S K Y', width - 164, 40);
    } else if (objectColorNumber == 6) {
      text('C O L O R  :  C A N D Y', width - 164, 40);
    } else if (objectColorNumber == 7) {
      text('C O L O R  :  B A U H A U S', width - 164, 40);
    } else if (objectColorNumber == 8) {
      text('C O L O R  :  E A R T H', width - 164, 40);
    }

    // サウンドモードの表示
    textAlign(RIGHT);
    if (soundMode == 'sound on') {
      if (isDark == true) {
        text('A U D I O  :  O N', width - 30, 40);
      } else {
        text('A U D I O  :  O N', width - 30, 40);
      }
    } else if (soundMode == 'sound off') {
      if (isDark == true) {
        text('A U D I O  :  O F F', width - 30, 40);
      } else {
        text('A U D I O  :  O F F', width - 30, 40);
      }
    }

    // BGMの表示
    textAlign(CENTER);

    if (bgmSound.isPlaying()) {
      if (bgmSound == bgmSound1) {
        bgmText = 'T R A C K  :  1  :  D R U M S  K I T  -  C A P S U N  P R O A U D I O';
      } else if (bgmSound == bgmSound2) {
        bgmText = 'T R A C K  :  2  :  C I T Y  L I G H T Z  -  B L A C K  O C T O P U S';
      } else if (bgmSound == bgmSound3) {
        bgmText = 'T R A C K  :  3  :  L E N N O  -  S P L I C E';
      } else if (bgmSound == bgmSound4) {
        bgmText = 'T R A C K  :  4  :  M A C A R O N  -  K Y O N';
      } else if (bgmSound == bgmSound5) {
        bgmText = 'T R A C K  :  5  :  C O A S T  -  P E T E R  M C L S A A C  M U S I C';
      } else if (bgmSound == bgmSound6) {
        bgmText = "T R A C K  :  6  :  C H A R L I E ' S  M O O D  -  S T U D I O  L E  B U S";
      } else if (bgmSound == bgmSound7) {
        bgmText = 'T R A C K  :  7  :  W O R L D  O F  T E C H N O L O G Y  -  R I C K Y  B O M B I N O';
      } else if (bgmSound == bgmSound8) {
        bgmText = 'T R A C K  :  8  :  M I N I A T U R E  H O U S E  -  K Y O N';
      } else if (bgmSound == bgmSound9) {
        bgmText = 'T R A C K  :  9  :  F L  -  F U N C T I O N  L O O P S';
      }
    } else {
      bgmText = 'T R A C K : N / A';
    }

    if (typingMode == 'game playing' || typingMode == 'game countDown' || typingMode == 'game finished') {
      // コンボカウントの表示
      drawComboEffect();

      // ステージの表示
      noStroke();
      fill(textColor);
      textFont('oswald');
      if (stage == stageTrial) {
        text('S T A G E  :  T R I A L', width - 280, 40);
      } else if (stage == stageNature) {
        text('S T A G E  :  N A T U R E', width - 285, 40);
      } else if (stage == stageMusic) {
        text('S T A G E  :  M U S I C', width - 280, 40);
      } else if (stage == stageDesign) {
        text('S T A G E  :  D E S I G N', width - 280, 40);
      } else if (stage == stageFood) {
        text('S T A G E  :  F O O D', width - 280, 40);
      } else if (stage == stageFantasy) {
        text('S T A G E  :  F A N T A S Y', width - 285, 40);
      } else if (stage == stageTechnology) {
        text('S T A G E  :  T E C H N O L O G Y', width - 300, 40);
      } else if (stage == stageAll) {
        text('S T A G E  :  A L L', width - 275, 40);
      }
    }

    // タイピングプレイ中の表示
    if (typingMode == 'game playing' || typingMode == 'game countDown') {
      // パラメータの表示
      var spacer = 80;
      fill(255, 50);
      noStroke();

      // 時間の表示
      textSize(80);
      textAlign(LEFT);
      text(timer, 30, 280 - spacer);
      textSize(14);
      text('T I M E', 36, 120);

      // ミスの表示
      textAlign(RIGHT);
      textSize(80);
      text(missCount, width - 23, 280 - spacer);
      textSize(14);
      text('M I S S', width - 30, 120);

      // スコアの表示
      textSize(80);
      text(typingScore, width - 23, height - 90);
      textSize(14);
      text('S C O R E', width - 30, height - 248 + spacer);

      // 正解率の表示
      textAlign(LEFT);
      textSize(80);
      if (typingAccuracy == 100) {
        text('100', 30, height - 90);
      } else if (typingAccuracy == 0) {
        text(typingAccuracy.toFixed(0), 30, height - 90);
      } else {
        text(typingAccuracy.toFixed(2), 30, height - 90);
      }
      textSize(14);
      text('A C C U R A C Y', 36, height - 248 + spacer);

      // コンボの通知
      if (isComboBonus == true) {
        notificationTimer++;
        if (notificationTimer > 120) {
          notificationTimer = 0;
          isComboBonus = false;
        }
      }

      // スコア、ライフ、フィーバーの表示
      push();
      translate(width / 2, height / 2);
      fill(255);
      textAlign(CENTER);
      textSize(14);

      if (stage == stageTrial) {
        fill(textColor);
        text('P R E S S  T H E  E N T E R  K E Y  T O  R E T U R N', 0, -100);
      } else {
        text('P R E S S  T H E  E N T E R  K E Y  T O  R E T U R N', 0, 240);
      }

      textAlign(LEFT);
      if (isTrial == false) {
        // ライフの表示
        fill(255);
        var lifeSpacer = 120;
        noStroke();
        text('L I F E', -maxLifeGauge / 2, lifeSpacer - 10);
        rect(-230, lifeSpacer - 5, 2, 20);
        rect(227, lifeSpacer - 5, 2, 20);
        rect(-maxLifeGauge / 2, lifeSpacer, lifeGauge, 10);
        stroke(255);
        strokeWeight(1);
        noFill();
        rect(-maxLifeGauge / 2, lifeSpacer, maxLifeGauge, 10);


        fill(255);
        noStroke();
        var feverSpacer = -120;
        text('F E V E R', -maxLifeGauge / 2, feverSpacer - 10);
        rect(-230, feverSpacer, 2, 20);
        rect(227, feverSpacer, 2, 20);
        if (isFever == false) {
          stroke(255);
          strokeWeight(1);
          noFill();
          for (var i = 0; i < 5; i++) {
            rect(90 * i - 220, feverSpacer + 5, 80, 10);
          }
          // Feverカウントのアクティブ表示
          stroke(255);
          fill(255);
          if (feverCount > 0) {
            for (var i = 0; i < feverCount; i++) {
              rect(90 * i - 220, feverSpacer + 5, 80, 10);
            }
          }
        } else if (isFever == true) {
          // 背景のFEVER
          textSize(280);
          fill(255, (sin(frameCount * 3) + 1.5) / 2 * 15);
          textAlign(CENTER);
          text('F E V E R', 0, 100);

          // Fever中のゲージ表示
          feverTimer++;
          if (feverTimer < 600) {
            feverGauge -= 0.733;
            noFill();
            stroke(255);
            strokeWeight(1);
            rect(-220, feverSpacer + 5, 440, 10);
            fill(255);
            noStroke();
            rect(-220, feverSpacer + 5, feverGauge, 10);
            textAlign(CENTER);

            fill(255);
            textSize(12);
            text('N E V E R  M I N D  T H E  M I S T Y P E S', 0, -150);
          } else {
            feverTimer = 0;
            feverCount = 0;
            feverGauge = 440;
            isFever = false;
            if (isDark == true) {
              isDark = false;
            } else {
              isDark = true;
            }
            setObjectColor();
            animations.push(new AnimationDefault());
          }
        }
      }
      pop();

      // 正解時にボーナス
      textAlign(LEFT);
      fill(255);
      noStroke();
      if (isCorrect) {
        correctTimer++;
        if (correctTimer < 60) {
          var spacer = -40;
          textAlign(CENTER);
          textSize(18);
          text('P E R F E C T !', width / 2, height / 2 + spacer - 10);
          textSize(14);
          if (lifeGauge < maxLifeGauge) {
            text('+ L I F E', width / 2 + lifeGauge - 220, height / 2 + 90 + sin(millis()) * 5);
          }
        } else {
          isCorrect = false;
          correctTimer = 0;
        }
      }

    } else if (typingMode == 'game finished') {
      // ゲーム完了時の表示
      var spacerX = -10;
      var spacerY = 20;
      var lineHeight = 35;

      fill(255);
      noStroke();
      textSize(22);
      textAlign(CENTER);

      if (lifeGauge < 0) {
        text('G A M E O V E R', width / 2, height / 2 - 115 + spacerY - 20);
      } else {
        text('R E S U L T', width / 2, height / 2 - 115 + spacerY - 20);
      }

      textSize(12);
      textAlign(LEFT);

      // ラベル
      text('R A N K', width / 2 - 270 + spacerX, height / 2 - 75 + spacerY);
      text('B E A T S', width / 2 - 80 + spacerX, height / 2 - 75 + spacerY);
      text('M I S S', width / 2 + 65 + spacerX, height / 2 - 75 + spacerY);
      text('A C C U R A C Y', width / 2 + 210 + spacerX, height / 2 - 75 + spacerY);

      text('S C O R E', width / 2 - 270 + spacerX, height / 2 + 50 + spacerY);
      text('M A X  C O M B O', width / 2 - 80 + spacerX, height / 2 + 50 + spacerY);
      text('W O R D S', width / 2 + 65 + spacerX, height / 2 + 50 + spacerY);
      text('B E A T   P E R   S E C O N D', width / 2 + 210 + spacerX, height / 2 + 50 + spacerY);

      // リザルト
      textSize(28);
      if (missCount == 0 && lifeGauge > 0) {
        text('EXCELLENT', width / 2 - 271 + spacerX, height / 2 - 40 + spacerY);
        if ((correctCount / playingTime).toFixed(2) > 4.5) {
          text('MACHINE', width / 2 - 271 + spacerX, height / 2 - 40 + spacerY);
        }
      } else if (lifeGauge < 0 || correctCount < 10) {
        text('POOR', width / 2 - 271 + spacerX, height / 2 - 40 + spacerY);
      } else if (missCount < 4) {
        text('GREAT', width / 2 - 271 + spacerX, height / 2 - 40 + spacerY);
      } else {
        text('GOOD', width / 2 - 271 + spacerX, height / 2 - 40 + spacerY);
      }
      text(correctCount, width / 2 - 81 + spacerX, height / 2 - 40 + spacerY);
      text(missCount, width / 2 + 64 + spacerX, height / 2 - 40 + spacerY);


      if (typingAccuracy == 100) {
        text('100' + '%', width / 2 + 209 + spacerX, height / 2 - 40 + spacerY);
      } else {
        text(typingAccuracy.toFixed(2) + '%', width / 2 + 209 + spacerX, height / 2 - 40 + spacerY);
      }

      textSize(28);
      text(typingScore, width / 2 - 271 + spacerX, height / 2 + 85 + spacerY);
      text(maxComboCount, width / 2 - 81 + spacerX, height / 2 + 85 + spacerY);
      text(wordCount, width / 2 + 64 + spacerX, height / 2 + 85 + spacerY);
      text((correctCount / playingTime).toFixed(2) + '/s', width / 2 + 209 + spacerX, height / 2 + 85 + spacerY);

      textAlign(CENTER);
      textSize(16);
      fill(0, 0, 100, (sin(frameCount * 3) + 1.5) / 2 * 100);
      text('P R E S S  T H E  E N T E R  K E Y', width / 2, height / 2 + 180 + spacerY);

      noFill();
      strokeWeight(1);
      stroke(255);

      line(width / 2,
        height / 2 + 125 + spacerY,
        width / 2,
        height / 2 + 145 + spacerY
      );

      fill(255);
      ellipse(width / 2, height / 2 + 145 + spacerY, 5);
    }
  }
}

// ガイド上にタイピングを表示する
function drawTypingKeysOnGuide() {
  noStroke();
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Source Code Pro');
  rectMode(CENTER);
  var rectSize = 31;
  var keyPositionX = width / 2 - 251;

  if (isTitle && typingMode == 'typing normal') {
    // キーの点滅表示
    noFill();
    if (sin(frameCount * 4) > 0) {
      fill(0);
    }
    rect(keyPositionX, firstImagePos + 84, rectSize - 1, rectSize - 1, 6);


    // 閉じるボタンの表示
    fill(0);
    push();
    translate(width / 2 + 262, height / 2 - 39);
    rotate(45 + frameCount * 1.5);
    rect(0, 0, 15, 3);
    rotate(90);
    rect(0, 0, 15, 3);
    pop();

    // 入力キーの表示
    for (typingIndex = 0; typingIndex < typingKeys.length; typingIndex++) {
      noStroke();
      fill(0);
      rect(keyPositionX + typingIndex * (rectSize + 5.5), firstImagePos + 84, rectSize, rectSize, 6);
      fill(255);
      text(typingKeys[typingIndex], keyPositionX + typingIndex * (rectSize + 5.5), firstImagePos + 88);
      if (typingKeys.length > 10) {
        typingKeys.shift();
      }
    }


  }
  rectMode(CORNER);

}

// タイピングを表示する
function drawTypingKeys() {
  // 通常時のタイピング描画
  noStroke();
  textSize(30);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Source Code Pro');
  rectMode(CENTER);

  if (typingMode == 'game countDown') {
    // 枠の表示
    for (var i = 0; i < 10; i++) {
      noFill();
      stroke(255);
      strokeWeight(1);
      rect(width / 2 - (rectSize * 6 - 30) + i * (rectSize + 10), typingSpacer - (rectSize / 2 - 25), rectSize, rectSize, (rectSize / 5));
    }
  }

  // ゲーム中のタイピング描画
  if (typingMode == 'game playing') {
    textSize(30);
    // 枠の表示
    for (var i = 0; i < 10; i++) {
      noFill();
      stroke(255);
      strokeWeight(1);
      rect(width / 2 - (rectSize * 6 - 30) + i * (rectSize + 10), typingSpacer - (rectSize / 2 - 25), rectSize, rectSize, (rectSize / 5));
    }

    // 問題の表示
    for (questionIndex = 0; questionIndex < typingQuestion.length; questionIndex++) {
      fill(255);
      noStroke();
      rect(width / 2 - (rectSize * 6 - 30) + questionIndex * (rectSize + 10), typingSpacer - (rectSize / 2 - 25), rectSize, rectSize, (rectSize / 5));
      noStroke();
      fill(0);
      text(typingQuestion[questionIndex], width / 2 - (rectSize * 5 + 20) + questionIndex * (rectSize + 10), typingSpacer + 10);
    }

    // 入力キーの表示
    for (typingIndex = 0; typingIndex < characterIndex; typingIndex++) {
      strokeWeight(1);
      fill(0);
      stroke(0);
      rect(width / 2 - (rectSize * 6 - 30) + typingIndex * (rectSize + 10), typingSpacer - (rectSize / 2 - 25), rectSize, rectSize, (rectSize / 5));
      noStroke();
      fill(255);
      text(correctKeys[typingIndex], width / 2 - (rectSize * 5 + 20) + typingIndex * (rectSize + 10), typingSpacer + (rectSize / 5));
    }

    // タイマー処理
    frame++;
    if (frame > 60) {
      timer--;
      playingTime++;
      frame = 0;
    }

    // 時間がなくなったら
    if (timer < 0) {
      timer = 0;
      casherSound.play();
      isDark = true;
      animations.push(new AnimationB());
      typingMode = 'game finished';
    }

    // ライフがへりつづける
    if (isFever == false) {
      if (stage == stageFantasy || stage == stageFood) {
        lifeGauge -= 0.5;
      } else if (stage == stageAll || stage == stageTechnology) {
        lifeGauge -= 1;
      }
    } else {
      if (stage == stageAll) {
        lifeGauge -= 0.5;
      }
    }

    // ライフが０より小さくなったら
    if (lifeGauge < 0) {
      // ゲームを終了する
      pluckSound.play();
      isDark = true;
      animations.push(new AnimationB());
      typingMode = 'game finished';
    }

  }

  rectMode(CORNER);
}

// ゲームモードの管理
function gameMode() {

  switch (typingMode) {
    case 'game selectStageInit':
      // 曲のセレクト
      gameSelectStageInit();
      break;
    case 'game selectStage':
      // 曲のセレクト
      gameSelectStage();
      break;
    case 'game countDown':
      // カウントダウン
      gameCountDown();
      break;
    case 'game initialize':
      // ゲームの初期化
      gameInitialize();
      break;
    case 'typing reset':
      // タイピングモードのリセット
      typingReset();
      break;
  }
}

// タイピングの初期化
function typingSetup() {
  // サウンドモード
  soundMode = 'sound on';

  // ガイダンスモード
  guidanceMode = 'guidance visible';

  // インフォメーションモード
  informationMode = 'information visible';

  // カラーモード
  colorTheme = 'vivid';

  // タイピングモード
  typingMode = 'typing normal';
  //  typingMode = 'game finished';
  //  isTitle = false;

  // タイピング問題の種類
  typingCategory = 0;

  // タイピングガイド
  typingGuide();

  // ステージ
  stageSetup();
}

// ステージ情報
function stageSetup() {
  isTrial = false;
}


// ステージセレクト初期化
function gameSelectStageInit() {
  // 初期化
  soundMode = 'sound on';

  if (bgmSound.isPlaying()) {
    bgmSound.stop();
    bgmSound = bgmSound1;
    bgmSound.loop();
  } else {
    bgmSound = bgmSound1;
    bgmSound.loop();
  }
  typingMode = 'game selectStage';
}


// ステージセレクト描画
function gameSelectStage() {
  // メッセージの表示
  noStroke();
  fill(0);
  var spacer = 300;
  var underSpacer = 100;
  var rectSize = 90;
  textAlign(CENTER);
  textSize(12);
  textFont('oswald');
  fill(textColor);
  text('P R E S S  T H E  N U M B E R  K E Y S', width / 2, height / 2 - spacer + 70);
  text('P R E S S  T H E  E N T E R  K E Y  T O  R E T U R N', width / 2, height / 2 + 250);

  // 選曲 1
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * 3.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * 3.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('T R I A L', width / 2 - rectSize * 3.5 + rectSize / 2, height / 2 - spacer + 150);
  textSize(50);
  fill(255);
  text('1', width / 2 - rectSize * 3.5 + rectSize / 2, height / 2 - spacer + 226);
  fill(textColor);
  textSize(11);
  text('E A S Y', width / 2 - rectSize * 3.5 + rectSize / 2, height / 2 - spacer + 270);

  // 選曲 2
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * 1.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * 1.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('N A T U R E', width / 2 - rectSize * 1.5 + rectSize / 2, height / 2 - spacer + 150);
  textSize(50);
  fill(255);
  text('2', width / 2 - rectSize * 1.5 + rectSize / 2, height / 2 - spacer + 226);
  fill(textColor);
  textSize(11);
  text('E A S Y', width / 2 - rectSize * 1.5 + rectSize / 2, height / 2 - spacer + 270);

  // 選曲 3
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * -0.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * -0.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('M U S I C', width / 2 - rectSize * -0.5 + rectSize / 2, height / 2 - spacer + 150);
  textSize(50);
  fill(255);
  text('3', width / 2 - rectSize * -0.5 + rectSize / 2, height / 2 - spacer + 226);
  fill(textColor);
  textSize(11);
  text('N O R M A L', width / 2 - rectSize * -0.5 + rectSize / 2, height / 2 - spacer + 270);

  // 選曲 4
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * -2.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * -2.5, height / 2 - spacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('D E S I G N', width / 2 - rectSize * -2.5 + rectSize / 2, height / 2 - spacer + 150);
  textSize(50);
  fill(255);
  text('4', width / 2 - rectSize * -2.5 + rectSize / 2, height / 2 - spacer + 226);
  fill(textColor);
  textSize(11);
  text('N O R M A L', width / 2 - rectSize * -2.5 + rectSize / 2, height / 2 - spacer + 270);


  // 選曲 5
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * 3.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * 3.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('F O O D', width / 2 - rectSize * 3.5 + rectSize / 2, height / 2 - underSpacer + 150);
  textSize(50);
  fill(255);
  text('5', width / 2 - rectSize * 3.5 + rectSize / 2, height / 2 - underSpacer + 226);
  fill(textColor);
  textSize(11);
  text('H A R D', width / 2 - rectSize * 3.5 + rectSize / 2, height / 2 - underSpacer + 270);

  // 選曲 6
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * 1.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * 1.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('F A N T A S Y', width / 2 - rectSize * 1.5 + rectSize / 2, height / 2 - underSpacer + 150);
  textSize(50);
  fill(255);
  text('6', width / 2 - rectSize * 1.5 + rectSize / 2, height / 2 - underSpacer + 226);
  fill(textColor);
  textSize(11);
  text('H A R D', width / 2 - rectSize * 1.5 + rectSize / 2, height / 2 - underSpacer + 270);

  // 選曲 7
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * -0.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * -0.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('T E C H N O L O G Y', width / 2 - rectSize * -0.5 + rectSize / 2, height / 2 - underSpacer + 150);
  textSize(50);
  fill(255);
  text('7', width / 2 - rectSize * -0.5 + rectSize / 2, height / 2 - underSpacer + 226);
  fill(textColor);
  textSize(11);
  text('V E R Y  H A R D', width / 2 - rectSize * -0.5 + rectSize / 2, height / 2 - underSpacer + 270);

  // 選曲 8
  fill(textColor, (sin(frameCount * 3) + 1.3) / 2 * 70);
  rect(width / 2 - rectSize * -2.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  stroke(textColor);
  strokeWeight(1);
  noFill();
  rect(width / 2 - rectSize * -2.5, height / 2 - underSpacer + 160, rectSize, rectSize, 15);
  noStroke();
  fill(textColor);
  textSize(18);
  text('A L L', width / 2 - rectSize * -2.5 + rectSize / 2, height / 2 - underSpacer + 150);
  textSize(50);
  fill(255);
  text('8', width / 2 - rectSize * -2.5 + rectSize / 2, height / 2 - underSpacer + 226);
  fill(textColor);
  textSize(11);
  text('H E L L', width / 2 - rectSize * -2.5 + rectSize / 2, height / 2 - underSpacer + 270);

}

// ゲームのカウントダウン
function gameCountDown() {
  // 四角の表示
  noStroke();
  fill(0);
  rect(width / 2 - 155, height / 2 - 145, 300, 300, 30);

  // 数字の表示
  textAlign(CENTER);
  textFont('oswald');
  fill(255);
  textSize(180);
  text(countDownText, width / 2, height / 2 + 80);

  // 設定の初期化
  if (bgmSound.isPlaying()) {
    bgmSound.stop();
  }
  guidanceMode = 'guidance hidden';
  timer = 0;
  typingScore = 0;
  typingAccuracy = 0;
  comboCount = 0;
  comboLevel = 0;
  isComboBonus = false;
  isFever = false;
  feverCount = 0;
  notificationTimer = 0;
  lifeGauge = maxLifeGauge;

  if (stage == stageTrial) {
    bgmSound = bgmSound6;
    objectColorNumber = 1;
    setObjectColor();
    timer = 147;
    typingQuestions = trialQuestions;
    lifeBonus = 200;
    missPenalty = 0;
    isDark = false;
    isTrial = true;
  } else if (stage == stageNature) {
    bgmSound = bgmSound2;
    timer = 84;
    objectColorNumber = 8;
    setObjectColor();
    typingQuestions = natureQuestions;
    lifeBonus = 100;
    missPenalty = 25;
    isDark = true;
    isTrial = false;
  } else if (stage == stageMusic) {
    bgmSound = bgmSound5;
    timer = 82;
    objectColorNumber = 6;
    setObjectColor();
    typingQuestions = musicQuestions;
    lifeBonus = 50;
    missPenalty = 50;
    isDark = false;
    isTrial = false;
  } else if (stage == stageDesign) {
    bgmSound = bgmSound3;
    timer = 70;
    objectColorNumber = 5;
    setObjectColor();
    typingQuestions = designQuestions;
    lifeBonus = 50;
    missPenalty = 50;
    isDark = false;
    isTrial = false;
  } else if (stage == stageFood) {
    bgmSound = bgmSound4;
    timer = 103;
    objectColorNumber = 6;
    setObjectColor();
    typingQuestions = foodQuestions;
    lifeBonus = 60;
    missPenalty = 20;
    isDark = true;
    isTrial = false;
  } else if (stage == stageFantasy) {
    bgmSound = bgmSound8;
    timer = 80;
    objectColorNumber = 3;
    setObjectColor();
    typingQuestions = fantasyQuestions;
    lifeBonus = 60;
    missPenalty = 20;
    isDark = false;
    isTrial = false;
  } else if (stage == stageTechnology) {
    bgmSound = bgmSound7;
    objectColorNumber = 0;
    setObjectColor();
    timer = 65;
    typingQuestions = technologyQuestions;
    lifeBonus = 60;
    missPenalty = 20;
    isDark = true;
    isTrial = false;
  } else if (stage == stageAll) {
    bgmSound = bgmSound9;
    objectColorNumber = 2;
    setObjectColor();
    timer = 83;
    typingQuestions = allQuestions;
    lifeBonus = 60;
    missPenalty = 20;
    isDark = true;
    isTrial = false;
  }

  // カウントダウンの処理
  countDownTimer++;
  if (countDownTimer > 60) {
    countDownText -= 1;
    countDownTimer = 0;
    pluckSound.play();
  } else if (countDownText == 0) {
    typingMode = 'game initialize';
    countDownText = 3;
  }
}

// ゲームの初期化
function gameInitialize() {
  // タイピングゲームの数値を初期化
  animations.length = 0;
  animations.push(new AnimationDefault());
  typingKeys.length = 0;
  correctKeys.length = 0;
  isCorrect = false;
  characterIndex = 0;
  typingScore = 0;
  typingCount = 0;
  typingAccuracy = 0;
  informationMode = 'information visible'
  comboBonus = 0;
  comboCount = 0;
  comboLevel = 0;
  countDownTimer = 0;
  maxComboCount = 0;
  isComboBonus = false;
  isFever = false;
  feverGauge = 440;
  feverTimer = 0;
  feverCount = 0;
  basicWordCount = 0;
  wordCount = 0;
  correctCount = 0;
  missCount = 0;
  playingTime = 0;
  elapsedTime = 0;
  lifeGauge = maxLifeGauge;
  colorTheme = 'vivid';

  if (bgmSound.isPlaying()) {
    bgmSound.stop();
  }

  loadTypingQuestion();
  bgmSound.loop();

  typingMode = 'game playing';
}

// ゲームプレイ中
function gamePlaying() {

}

// ゲーム終了
function gameFinished() {

}

// ゲームのリセット
function typingReset() {
  typingKeys.length = 0;

  if (bgmSound.isPlaying()) {
    bgmSound.stop();
  }

  countDownText = 3;
  countDownTimer = 0;
  guidanceMode = 'guidance visible';
  isDark = false;
  isTitle = true;
  typingKeys = [];
  typingMode = 'typing normal';
}


// 記号キー入力の処理
function keyPressed() {
  // Enterキー
  if (keyCode == 13) {
    // ノーマルモードの時
    if (typingMode == 'typing normal') {
      guidanceMode = 'guidance hidden';
      informationMode = 'information visible';

      syntheSound.play();
      animations.push(new AnimationY());
      animations.push(new AnimationI());
      for (var i = 0; i < 10; i++) {
        animations.push(new AnimationE());
      }
      animations.push(new AnimationF());

      isTitle = false;
      typingMode = 'game selectStageInit';
    }
    // ゲームプレイ中、ゲーム終了、カウントダウンの時
    else if (typingMode == 'game playing' ||
      typingMode == 'game finished' ||
      typingMode == 'game countDown') {
      keyboardSound2.play();
      animations.push(new AnimationY());
      animations.push(new AnimationI());
      typingMode = 'game selectStageInit';
    }
    // ステージセレクトの時
    else if (typingMode == 'game selectStage') {
      keyboardSound2.play();
      animations.push(new AnimationW());
      typingMode = 'typing reset';
    }
  }

  // スラッシュキー
  //  if (keyCode == 191) {
  //    // ノーマルモードの時
  //    if (typingMode == 'typing normal' && guidanceMode == 'guidance visible') {
  //      guidanceMode = 'guidance hidden';
  //    } else if (typingMode == 'typing normal' && guidanceMode == 'guidance hidden') {
  //      guidanceMode = 'guidance visible';
  //    }
  //  }

  // バックスペースキー
  if (keyCode == 8) {
    // ノーマルモードの時
    if (typingMode == 'typing normal') {
      keyboardSound3.play();
      typingKeys.splice(typingKeys.length - 1, 1);
    }
  }

  // 右矢印キー
  if (keyCode == 39) {
    //        comboLevel ++;
    keyboardSound3.play();
    objectColorNumber += 1;
    setObjectColor();
    animations.push(new AnimationRightArrow());
  }

  // 左矢印キー
  if (keyCode == 37) {
    keyboardSound3.play();
    objectColorNumber -= 1;
    setObjectColor();
    animations.push(new AnimationLeftArrow());
  }

  // スペースキー
  if (keyCode == 32) {
    if (typingMode == 'game playing') {
      clapSound.play();
    }
  }
}

// チュートリアルの処理
function drawGuide() {
  // タイトルは最初にだけ表示される
  rectMode(CENTER);
  if (isTitle == true) {
    //タイトル画像
    image(firstImage, width / 2, firstImagePos, firstImageWidth, firstImageHeight);

    // 更新日時
    noStroke();
    fill(0);
    textSize(8);
    textAlign(RIGHT);
    text('last update 1.1.2021', width / 2 + 94, firstImagePos - 104);

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
  }

  if (isTitle == false && typingMode == 'typing normal') {
    noStroke();
    fill(textColor);
    ellipse(mouseX - 12, mouseY - 9, 25);

    textSize(16);
    fill(textColor2);
    text('i', mouseX - 12, mouseY - 4);
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

      // ガイド画像
      imageMode(CENTER);
      if (isDark == true) {
        image(guideImage, guideImagePosX, guideImagePosY, guideImageWidth, guideImageHeight);
      } else {
        image(guideImageWhite, guideImagePosX, guideImagePosY, guideImageWidth, guideImageHeight);
      }

      // タイピング
      drawTypingKeysOnGuide();
    }
  }

  rectMode(CORNER);
}

// 透明度のアニメーション
function blink(speed, phase, min, alpha) {
  return blinkValue = (sin(frameCount * speed + phase) + min) / 2 * alpha;
}

// アルファベットと数字キー入力の処理
function keyTyped() {
  // タイピングモードの管理
  controlTypingMode();

  // アニメーションの設定
  setAnimation();

  // エフェクトの設定
  setEffect();

  // サウンドの設定
  setSound();

  // サウンドモードの設定
  setSoundMode();

  // カラーテーマの設定
  setColorTheme();

  // オブジェクトカラーの設定
  setObjectColor();
}

// タイピングの処理
function controlTypingMode() {
  // タイトルをかくす
  //  isTitle = false;

  // タイピングモードの管理
  if (typingMode == 'game playing') {
    // タイピングを１文字ずつ管理する
    typingKeys.push(key);

    // タイピングが正解の時
    if (typingQuestion[characterIndex] == typingKeys[typingKeys.length - 1]) {
      // １文字進める
      characterIndex++;

      // コンボを増やす
      comboCount++;

      // コンボ数を管理
      if (comboCount % 25 == 0) {
        isComboBonus = true;
        comboBonus += 1;
        comboLevel += 1;
        dropletSound.play();
        animations.push(new comboBonusEffect());
      }

      // 正解の文字数を数える
      correctCount++;

      // 正解率を計算する
      typingAccuracy = correctCount / (correctCount + missCount) * 100;

      // フィーバーモードの時
      if (isFever == true) {
        // タイピングスコアを増やし、コンボをかけあわせる
        typingScore += 100 * 1 * (1 + floor(comboCount / 2));
      }
      // フィーバーモードじゃない時
      else {
        // タイピングスコアを増やし、コンボをかけあわせる
        typingScore += 100 * (1 + floor(comboCount / 2));
      }

      // 最大コンボ数を保存する
      if (comboCount > maxComboCount) {
        maxComboCount = comboCount;
      }

      // 正解となるキーを配列の末尾に追加する
      correctKeys.push(typingKeys[typingKeys.length - 1]);

    }
    // タイピングが不正解の時
    else {
      // Feverモードではミスを無視する
      if (isFever == false) {
        // ミスのエフェクト
        colorTheme = 'vivid';
        animations.push(new EffectMissTyping());
        bellSound.play();

        // 数の管理
        isComboBonus = false;
        comboBonus = 0;
        comboLevel = 0;
        comboCount = 0;
        feverCount = 0;
        missIndex++;
        missCount++;

        // ライフをけずる
        if (lifeGauge > 0) {
          lifeGauge -= missPenalty;
        }

        // 正解率を計算する
        typingAccuracy = correctCount / (correctCount + missCount) * 100;
      }
    }
  } else if (typingMode == 'typing normal') {
    typingKeys.push(key);
  } else if (typingMode == 'game finished') {
    typingKeys.length = 0;
  } else if (typingMode == 'typing reset') {
    typingReset();
  }

  // タイピングの正解判定
  checkTyping();
}

// タイピング問題の読み込み
function loadTypingQuestion() {
  // タイピング問題の配列からランダムに１問とってくる
  typingQuestion = typingQuestions[floor(random(typingQuestions.length))].split('');
}

// タイピング１問ごとの正解処理
function checkTyping() {
  if (typingMode == 'game playing') {

    if (typingQuestion.length == characterIndex) {
      // 正解時にエフェクトを再生
      //      if (stage != stageTrial) {
      //        animations.push(new AnimationD());
      //      }

      // 正解した単語数をカウント
      wordCount++;

      // 問題を読み込む
      loadTypingQuestion();

      // １単語でミスがなかったら
      if (missIndex == 0) {
        isCorrect = true;

        // ライフを増やす
        if (lifeGauge < maxLifeGauge) {
          lifeGauge += lifeBonus;
        }

        if (lifeGauge > maxLifeGauge) {
          lifeGauge = maxLifeGauge;
        }

        // 音を鳴らす
        if (stage == stageAll) {
          keyboardSound2.play();
        } else if (stage == stageNature) {
          clavSound.play();
        } else if (stage == stageFantasy) {
          sleighBellSound.play();
        } else if (stage == stageDesign) {
          keyboardSound2.play();
        } else if (stage == stageTechnology) {
          pluckSound.play();
        } else {
          tambourineSound.play();
        }

        // Feverモード
        if (isTrial == false) {
          // Feverゲージをカウント
          feverCount++;

          // Feverモードに切り替える
          if (feverCount == 5) {
            isFever = true;
            if (isDark == true) {
              animations.push(new AnimationW());
              isDark = false;
            } else {
              animations.push(new AnimationB());
              isDark = true;
            }
            if (stage == stageFood) {
              casherSound.play();
            } else if (stage == stageNature) {
              pageSound.play();
            } else if (stage == stageFantasy) {
              windSound.play();
            } else {
              syntheSound.play();
            }
          }
        }
      } else {
        isCorrect = false;
      }

      // 初期化
      correctKeys.length = 0;
      characterIndex = 0;
      missIndex = 0;
    }
  }
}

// サウンドの設定
function setSound() {
  // 曲セレクト中の時
  if (typingMode == 'game selectStage') {
    if (key == '1') {
      typingMode = 'game countDown';
      stage = stageTrial;
      countDownTimer = 0;
      countDownText = 3;
      bgmSound.stop();
      pluckSound.play();
      animations.push(new AnimationDefault());
    } else if (key == '2') {
      stage = stageNature;
      countDownTimer = 0;
      countDownText = 3;
      typingMode = 'game countDown';
      pluckSound.play();
      animations.push(new AnimationDefault());
    } else if (key == '3') {
      typingMode = 'game countDown';
      stage = stageMusic;
      countDownTimer = 0;
      countDownText = 3;
      pluckSound.play();
      animations.push(new AnimationDefault());
    } else if (key == '4') {
      typingMode = 'game countDown';
      stage = stageDesign;
      countDownTimer = 0;
      countDownText = 3;
      pluckSound.play();
      animations.push(new AnimationDefault());
    } else if (key == '5') {
      typingMode = 'game countDown';
      stage = stageFood;
      countDownTimer = 0;
      countDownText = 3;
      pluckSound.play();
      animations.push(new AnimationDefault());
    } else if (key == '6') {
      typingMode = 'game countDown';
      stage = stageFantasy;
      countDownTimer = 0;
      countDownText = 3;
      pluckSound.play();
      animations.push(new AnimationDefault());
    } else if (key == '7') {
      typingMode = 'game countDown';
      stage = stageTechnology;
      countDownTimer = 0;
      countDownText = 3;
      pluckSound.play();
      animations.push(new AnimationDefault());
    } else if (key == '8') {
      typingMode = 'game countDown';
      stage = stageAll;
      countDownTimer = 0;
      countDownText = 3;
      pluckSound.play();
      animations.push(new AnimationDefault());
    }
  }

  // ノーマルモードの設定
  if (typingMode == 'typing normal' && soundMode == 'sound on') {


    if (key == '1') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound1;
      bgmSound.loop()
    } else if (key == '2') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound2;
      bgmSound.loop()
    } else if (key == '3') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound3;
      bgmSound.loop()
    } else if (key == '4') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound4;
      bgmSound.loop()
    } else if (key == '5') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound5;
      bgmSound.loop()
    } else if (key == '6') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound6;
      bgmSound.loop()
    } else if (key == '7') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound7;
      bgmSound.loop()
    } else if (key == '8') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound8;
      bgmSound.loop()
    } else if (key == '9') {
      if (bgmSound.isPlaying()) {
        bgmSound.stop();
      }
      bgmSound = bgmSound9;
      bgmSound.loop()
    }
  }

  var alphabetPattern = /\w[A-Z]/;

  // タイピングゲームモードのサウンド設定
  if (typingMode == 'game playing' && soundMode == 'sound on') {
    if (alphabetPattern) {
      if (stage == stageNature) {
        billiardSound.play();
      } else if (stage == stageTechnology) {
        clavSound.play();
      } else if (stage == stageDesign) {
        keyboardSound1.play();
      } else if (stage == stageAll) {
        keyboardSound3.play();
      } else {
        clapSound.play();
      }
    }
  }
  // タイピングゲームモード以外のサウンド設定
  else if (typingMode != 'game playing' && soundMode == 'sound on') {
    if (key == 'a' || key == 'A') {
      clavSound.play();
    } else if (key == 's' || key == 'S') {
      hihatSound.play();
    } else if (key == 'd' || key == 'D') {
      kickSound.play();
    } else if (key == 'f' || key == 'F') {
      stoneSound.play();
    } else if (key == 'g' || key == 'G') {
      clickSound.play();
    } else if (key == 'h' || key == 'H') {
      dropletSound.play();
    } else if (key == 'i' || key == 'I') {
      scratchSound3.play();
    } else if (key == 'j' || key == 'J') {
      tomSound.play();
    } else if (key == 'u' || key == 'U') {
      scratchSound2.play();
    } else if (key == 'y' || key == 'Y') {
      scratchSound.play();
    } else if (key == 'k' || key == 'K') {
      cymbalSound.play();
    } else if (key == 'l' || key == 'L') {
      sleighBellSound.play();
    } else if (key == 'm' || key == 'M') {
      windSound.stop();
      windSound.play();
    } else if (key == 'n' || key == 'N') {
      billiardSound.play();
    } else if (key == 'o' || key == 'O') {
      pluckSound.play();
    } else if (key == 'p' || key == 'P') {
      casherSound.play();
    } else if (key == 'z' || key == 'Z') {
      cameraSound.play();
    } else if (key == 'x' || key == 'X') {
      scratchSound4.play();
    } else if (key == 'b' || key == 'B') {
      bellSound.play();
    } else if (key == 'c' || key == 'C') {
      snareSound.play();
    } else if (key == 'v' || key == 'V') {
      pageSound.play();
    } else if (key == 'q' || key == 'Q') {
      syntheSound.play();
    } else if (key == 'w' || key == 'W') {
      snapSound.play();
    } else if (key == 'e' || key == 'E') {
      clapSound.play();
    } else if (key == 'r' || key == 'R') {
      rimSound.play();
    } else if (key == 't' || key == 'T') {
      tambourineSound.play();
    } else {
      keyboardSound1.play();
    }
  }
}

// アニメーションの設定
function setAnimation() {
  // ゲーム中のアニメーション
  if (typingMode == 'game playing' && stage != stageTrial) {
    //    if (isFever == true) {
    if (key == 'a' || key == 'A') {
      animations.push(new AnimationA());
    } else if (key == 's' || key == 'S') {
      animations.push(new AnimationS());
    } else if (key == 'd' || key == 'D') {
      animations.push(new AnimationD());
    } else if (key == 'f' || key == 'F') {
      animations.push(new AnimationF());
    } else if (key == 'g' || key == 'G') {
      //      animations.push(new AnimationG());
      animations.push(new AnimationK());
    } else if (key == 'h' || key == 'H') {
      animations.push(new AnimationH());
    } else if (key == 'i' || key == 'I') {
      animations.push(new AnimationT());
    } else if (key == 'j' || key == 'J') {
      for (var i = 0; i < 15; i++) {
        animations.push(new AnimationJ());
      }
    } else if (key == 'u' || key == 'U') {
      animations.push(new AnimationT());
    } else if (key == 'y' || key == 'Y') {
      animations.push(new AnimationT());
    } else if (key == 'k' || key == 'K') {
      animations.push(new AnimationK());
    } else if (key == 'l' || key == 'L') {
      //      animations.push(new AnimationL());
      animations.push(new AnimationN());
    } else if (key == 'm' || key == 'M') {
      for (var i = 0; i < 5; i++) {
        animations.push(new AnimationE());
      }
    } else if (key == 'n' || key == 'N') {
      animations.push(new AnimationN());
    } else if (key == 'o' || key == 'O') {
      animations.push(new AnimationS());
    } else if (key == 'p' || key == 'P') {
      for (var i = 0; i < 5; i++) {
        animations.push(new AnimationP());
      }
    } else if (key == 'z' || key == 'Z') {
      for (var i = 0; i < 10; i++) {
        animations.push(new AnimationE());
      }
    } else if (key == 'x' || key == 'X') {
      animations.push(new AnimationX());
    } else if (key == 'b' || key == 'B') {
      if (isFever == true) {
        animations.push(new AnimationS());
      } else {
        animations.push(new AnimationT());
      }
    } else if (key == 'c' || key == 'C') {
      animations.push(new AnimationD());
    } else if (key == 'v' || key == 'V') {
      //      animations.push(new AnimationV());
      animations.push(new AnimationH());
    } else if (key == 'q' || key == 'Q') {
      animations.push(new AnimationT());
    } else if (key == 'w' || key == 'W') {
      animations.push(new AnimationH());
    } else if (key == 'e' || key == 'E') {
      for (var i = 0; i < 5; i++) {
        animations.push(new AnimationE());
      }
    } else if (key == 'r' || key == 'R') {
      animations.push(new AnimationT());
      //      animations.push(new AnimationR());
    } else if (key == 't' || key == 'T') {
      animations.push(new AnimationT());
    }
    //    }
    // ゲーム以外のアニメーション
  } else {
    if (key == 'a' || key == 'A') {
      for (var i = 0; i < 5; i++) {
        animations.push(new AnimationA());
      }
    } else if (key == 's' || key == 'S') {
      animations.push(new AnimationS());
    } else if (key == 'd' || key == 'D') {
      animations.push(new AnimationD());
    } else if (key == 'f' || key == 'F') {
      animations.push(new AnimationF());
    } else if (key == 'g' || key == 'G') {
      animations.push(new AnimationG());
    } else if (key == 'h' || key == 'H') {
      for (var i = 0; i < 2; i++) {
        animations.push(new AnimationH());
      }
    } else if (key == 'i' || key == 'I') {
      animations.push(new AnimationI());
    } else if (key == 'j' || key == 'J') {
      for (var i = 0; i < 30; i++) {
        animations.push(new AnimationJ());
      }
    } else if (key == 'u' || key == 'U') {
      animations.push(new AnimationU());
    } else if (key == 'y' || key == 'Y') {
      animations.push(new AnimationY());
    } else if (key == 'k' || key == 'K') {
      animations.push(new AnimationK());
    } else if (key == 'l' || key == 'L') {
      animations.push(new AnimationL());
    } else if (key == 'm' || key == 'M') {
      animations.push(new AnimationM());
    } else if (key == 'n' || key == 'N') {
      animations.push(new AnimationN());
    } else if (key == 'o' || key == 'O') {
      animations.push(new AnimationO());
    } else if (key == 'p' || key == 'P') {
      for (var i = 0; i < 10; i++) {
        animations.push(new AnimationP());
      }
    } else if (key == 'z' || key == 'Z') {
      animations.push(new AnimationZ());
    } else if (key == 'x' || key == 'X') {
      animations.push(new AnimationX());
    } else if (key == 'b' || key == 'B') {
      animations.push(new AnimationB());
      isDark = true;
    } else if (key == 'c' || key == 'C') {
      animations.push(new AnimationC());
    } else if (key == 'v' || key == 'V') {
      animations.push(new AnimationV());
    } else if (key == 'q' || key == 'Q') {
      animations.push(new AnimationQ());
    } else if (key == 'w' || key == 'W') {
      animations.push(new AnimationW());
      isDark = false;
    } else if (key == 'e' || key == 'E') {
      for (var i = 0; i < 10; i++) {
        animations.push(new AnimationE());
      }
    } else if (key == 'r' || key == 'R') {
      animations.push(new AnimationR());
    } else if (key == 't' || key == 'T') {
      animations.push(new AnimationT());
    }
  }
}

// エフェクトの設定
function setEffect() {
  if (typingMode == 'game playing') {
    animations.push(new EffectCorrectTyping());
  }
}

// サウンドモードの設定
function setSoundMode() {
  if (key == '0' && soundMode == 'sound on' && typingMode == 'typing normal') {
    if (bgmSound.isPlaying()) {
      bgmSound.stop();
    }
    soundMode = 'sound off';
  } else if (key == '0' && soundMode == 'sound off' && typingMode == 'typing normal') {
    if (bgmSound.isPlaying()) {
      bgmSound.stop();
    }
    soundMode = 'sound on';
  }
}

// カラーモードの設定
function setColorTheme() {
  if (typingMode == 'game playing') {
    if (isFever == true) {
      colorTheme = 'vivid';
    } else {
      colorTheme = 'vivid';
    }
  } else {
    colorTheme = 'vivid';
  }

  if (isDark == true) {
    keyColor = 255;
    keyColor2 = 0;
  } else {
    keyColor = 0;
    keyColor2 = 255;
  }
}

// オブジェクトの色をセットする
function setObjectColor() {
  // 背景にカラーセットを読み込む
  backgroundColors = objectColors;

  // カラーセットの番号をループさせる
  if (objectColorNumber > 8) {
    objectColorNumber = 0;
  } else if (objectColorNumber < 0) {
    objectColorNumber = 8;
  }

  // カラーセットを番号ごとに切り替える
  if (objectColorNumber == 0) {
    objectColors = objectColorsCyber;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 1) {
    objectColors = objectColorsTropical;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 2) {
    objectColors = objectColorsMonotone;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 3) {
    objectColors = objectColorsPastel;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 4) {
    objectColors = objectColorsSnow;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 5) {
    objectColors = objectColorsSky;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 6) {
    objectColors = objectColorsCandy;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 7) {
    objectColors = objectColorsBauhaus;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  } else if (objectColorNumber == 8) {
    objectColors = objectColorsNature;
    keyColorW = brightColorSet[0];
    keyColorB = darkColorSet[0];
  }
}

// コンボのエフェクト
function drawComboEffect() {
  if (comboLevel >= 0) {
    noStroke();
    fill(255);
    textAlign(CENTER);
    textFont('oswald');
    textSize(30);
    var comboSpacer = height / 2 - 260;
    text(comboCount, width / 2, comboSpacer + 53);
    textSize(10);
    text('C O M B O', width / 2, comboSpacer + 18);
    noFill();
    strokeWeight(1);
    stroke(255);
    ellipse(width / 2, comboSpacer + 30, 80);
    // COMBO LV 1 サークル
    if (comboLevel >= 1) {
      strokeWeight(6);
      stroke(255, (sin(frameCount * 3) + 1.4) / 2 * 100);
      //      stroke(255);
      ellipse(width / 2, comboSpacer + 30, 94);
      // COMBO LV 2 ボリューム
      if (comboLevel >= 2) {
        push();
        translate(width / 2 - 110, comboSpacer - 20);
        strokeWeight(1);
        stroke(255);
        rect(22, 10, 4, 80);
        for (var i = 0; i < 10; i++) {
          line(5, 15 + i * 8, 22, 15 + i * 8);
          line(27, 15 + i * 8, 44, 15 + i * 8);
        }
        noStroke();
        fill(255);
        rect(10, (sin(frameCount * 2) / 2) * 65 + 50, 28, 6);
        pop();

        push();
        translate(width / 2 + 65, comboSpacer - 20);
        strokeWeight(1);
        stroke(255);
        rect(22, 10, 4, 80);
        for (var i = 0; i < 10; i++) {
          line(5, 15 + i * 8, 22, 15 + i * 8);
          line(27, 15 + i * 8, 44, 15 + i * 8);
        }
        noStroke();
        fill(255);
        rect(10, (sin(frameCount * 2 + 100) / 2) * 65 + 50, 28, 6);
        pop();

        // COMBO LV 3 つまみ
        if (comboLevel >= 3) {
          push();
          translate(width / 2 - 140, comboSpacer - 5);
          strokeWeight(1);
          for (var i = 0; i < 3; i++) {
            stroke(255);
            ellipse(0, i * 35, 20);

            noStroke();
            fill(255);
            ellipse(0, 0 + i * 35, 5);

            noFill();
            stroke(255);
            ellipse(sin(frameCount * 2 + i * 100) * 10, cos(frameCount * 2 + i * 100) * 10 + i * 35, 3);
          }
          pop();

          push();
          translate(width / 2 + 140, comboSpacer - 5);
          strokeWeight(1);
          for (var i = 0; i < 3; i++) {
            stroke(255);
            ellipse(0, i * 35, 20);

            noStroke();
            fill(255);
            ellipse(0, 0 + i * 35, 5);

            noFill();
            stroke(255);
            ellipse(sin(frameCount * 2 + i * 100) * 10, cos(frameCount * 2 + i * 100) * 10 + i * 35, 3);
          }
          pop();

          // COMBO LV 4 パネル
          if (comboLevel >= 4) {
            push();
            translate(width / 2 - 270, comboSpacer - 2);
            strokeWeight(1);
            stroke(255);
            for (var i = 0; i < 4; i++) {
              rect(i * 26, 0, 20, 8, 2);
            }

            for (var i = 0; i < 4; i++) {
              stroke(255);
              rect(i * 26, 15, 20, 20, 4);
              rect(i * 26, 40, 20, 20, 4);

              noStroke();
              //              if (frameCount % 50== 0) {
              //                fill(255, 100);
              //
              //              } else {
              //                fill(255, 0)
              //              }
              fill(255, (sin(frameCount * 5 + 100 * i)) / 2 * 100);
              rect(i * 26, 15, 20, 20, 4);
              rect(i * 26, 40, 20, 20, 4);
            }
            pop();

            push();
            translate(width / 2 + 170, comboSpacer - 2);
            strokeWeight(1);
            stroke(255);
            for (var i = 0; i < 4; i++) {
              rect(i * 26, 0, 20, 8, 2);
            }
            for (var i = 0; i < 4; i++) {
              stroke(255);
              rect(i * 26, 15, 20, 20, 4);
              rect(i * 26, 40, 20, 20, 4);

              noStroke();
              fill(255, (sin(-frameCount * 5 + 100 * i)) / 2 * 100);
              rect(i * 26, 15, 20, 20, 4);
              rect(i * 26, 40, 20, 20, 4);
            }
            pop();

            // COMBO LV 5 つまみ
            if (comboLevel >= 5) {
              push();
              translate(width / 2 - 300, comboSpacer + 8);
              strokeWeight(1);

              for (var i = 0; i < 2; i++) {
                noFill();
                stroke(255);
                ellipse(0, i * 40, 30);
                noStroke();
                fill(255, (sin(frameCount * 5 + 100 * i)) / 2 * 100);
                ellipse(0, i * 40, 24);
              }
              pop();

              push();
              translate(width / 2 + 300, comboSpacer + 8);
              strokeWeight(1);

              for (var i = 0; i < 2; i++) {
                noFill();
                stroke(255);
                ellipse(0, i * 40, 30);
                noStroke();
                fill(255, (sin(frameCount * 5 + 100 * i)) / 2 * 100);
                ellipse(0, i * 40, 24);
              }
              pop();

              // COMBO LV 6 スイッチ
              if (comboLevel >= 6) {
                push();
                translate(width / 2 - 410, comboSpacer + 6);
                strokeWeight(1);
                for (var i = 0; i < 3; i++) {
                  noStroke();
                  fill(255, (sin(frameCount * 5 + 100 * i)) / 2 * 100);
                  rect(0, i * 20, 40, 6);

                  noFill();
                  stroke(255);
                  rect(40, i * 20, 40, 6);
                  rect(0, i * 20, 40, 6);
                }
                pop();

                push();
                translate(width / 2 + 330, comboSpacer + 6);
                strokeWeight(1);
                for (var i = 0; i < 3; i++) {
                  noFill();
                  stroke(255);
                  rect(0, i * 20, 40, 6);
                  rect(40, i * 20, 40, 6);

                  noStroke();
                  fill(255, (sin(frameCount * 5 + 100 * i)) / 2 * 100);
                  rect(40, i * 20, 40, 6);
                }
                pop();
              }
            }
          }
        }
      }
    }
  }
}

// マウスクリックの処理
function mousePressed() {
  // インフォメーションの表示と非表示を切り替える
  if (typingMode == 'typing normal') {
    typingKeys = [];

    // タイトル画像の切り替え
    if (isTitle) {
      isTitle = false;
    } else {
      isTitle = true;
    }

    // キーボードガイドの切り替え
    if (guidanceMode == 'guidance visible') {
      guidanceMode = 'guidance hidden';
    } else {
      guidanceMode = 'guidance visible';
    }

    // ロゴと文字情報
    //    if (informationMode == 'information visible') {
    //      informationMode = 'information hidden';
    //    } else {
    //      informationMode = 'information visible';
    //    }

  } else {
    // タイトル画像の切り替え
    if (isTitle) {
      isTitle = false;
    } else {
      isTitle = true;
    }

    // キーボードガイドの切り替え
    if (guidanceMode == 'guidance visible') {
      guidanceMode = 'guidance hidden';
    } else {
      guidanceMode = 'guidance visible';
    }

    // トップに戻る
    typingMode = 'typing normal';
    if (bgmSound.isPlaying()) {
      bgmSound.stop();
    }
    typingKeys = [];
  }
}

// マウスを動かしている時の処理
//function mouseMoved() {
//  if (typingMode == 'typing normal') {
//    fill(255);
//    text('CLICK TO BACK', width / 2, height / 2);
//  }
//}

// ウィンドウリサイズ時にキャンバスをウィンドウに合わせる
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  typingGuide();
  fft = new p5.FFT();
}

// タイピングガイド
function typingGuide() {
  firstImagePos = height / 2 - 135;
  firstImageWidth = 584;
  firstImageHeight = 260;
  guideImageWidth = 772;
  guideImageHeight = 225;
  guideImagePosX = width / 2 + 30;
  guideImagePosY = height - 210;
  typingSpacer = height / 2;

  keyColor = 255;
  keySize = 48;
  keyPosX = guideImagePosX - 333;
  keyPosY = height - 202;


  // 解像度調整
  if (height < 620) {
    firstImagePos = height / 2 - 120;
    //    firstImageWidth = 584 * 0.9;
    //    firstImageHeight = 260 * 0.9;
    guideImagePosY = height - 160;
    keyPosY = height - 152;
  }
}

// アニメーションのクラス
// Animation A
class AnimationA {
  constructor() {
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
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    push();
    translate(width / 2, height / 2);
    strokeCap(ROUND);
    noFill();
    stroke(this.color);

    if (isFever == true) {
      stroke(255);
    }

    strokeWeight(this.arcWeight);
    arc(0, 0, this.arcWidth * this.arcScale, this.arcWidth * this.arcScale, this.arcStart, this.arcEnd);
    pop();

    this.arcStart += this.arcSpeed1;
    this.arcEnd += this.arcSpeed2;


    if (this.arcEnd < this.arcStart) {
      this.lifetime = -1;
    }

    strokeCap(SQUARE);
  }
}

// Animation O
class AnimationO {
  constructor() {
    this.angle = 0;
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 300;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 15 + 6, keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    this.angle -= 2;
    push();
    translate(width / 2, height / 2);
    noStroke();
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(255);
    }
    ellipse(cos(this.angle) * 250, sin(this.angle * 0.8) * 200, 15);
    ellipse(-cos(this.angle) * 300, sin(this.angle) * 300, 15);
    noFill();
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(1);
    line(
      cos(this.angle) * 250,
      sin(this.angle * 0.8) * 200,
      -cos(this.angle) * 300,
      sin(this.angle) * 300
    );
    pop();
    this.lifetime--;
  }
}

// Animation C
class AnimationC {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.diameter = 100;
    this.weight = 500;
    this.lifetime = 40;
    this.color = objectColors[floor(random(objectColors.length))];
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 5 + 2, keyPosY + (keySize * 1 + 4), keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(this.weight)
    noFill();
    ellipse(this.x, this.y, this.diameter);
    if (this.weight > 0) {
      this.weight -= 20;
    }
    this.diameter += 60;
    this.lifetime--;
  }
}

// Animation S
class AnimationS {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.baseX = random(width);
    this.baseY = random(height);
    this.size = random(15, 200);
    this.color = objectColors[floor(random(objectColors.length))];
    this.angle = 900;
    this.lifetime = 120;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + keySize + 5, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    push();
    translate(this.baseX, this.baseY);
    rotate(this.angle);
    noStroke();
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(0, 0, 100, 100);
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.size / 5, this.size);
    rect(this.x, this.y, this.size, this.size / 5);
    rectMode(CORNER);
    if (this.angle > 46) {
      this.angle -= this.angle * 0.02;
    }
    this.lifetime--;
    pop();
  }
}

// Animation D
class AnimationD {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.diameter = 10;
    this.weight = 150;
    this.lifetime = 30;
    this.color = objectColors[floor(random(objectColors.length))];
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize + 5) * 2, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(this.weight);
    noFill();
    ellipse(this.x, this.y, this.diameter);
    if (this.weight > 0) {
      this.weight -= 6;
    }
    this.diameter += 30;
    this.lifetime -= 1;
  }
}

// Animation F
class AnimationF {
  constructor() {
    this.y = 0;
    this.diameter = 1;
    this.angle = 0;
    this.lifetime = 100;
    this.color = objectColors[floor(random(objectColors.length))];
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize + 5) * 3, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    push();
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(5);
    translate(width / 2, height / 2);
    //    rotate(this.angle);
    noFill();
    //    ellipse(0, this.y, this.diameter);

    //    ellipse(sin(frameCount * 5) * 10, cos(frameCount * 5) * 10, this.diameter);
    ellipse(0, 0, this.diameter);

    this.y += 3;
    this.angle += 1.5;
    this.diameter += 15;
    this.lifetime--;
    pop();
  }
}

// Animation G
class AnimationG {
  constructor() {
    this.angle = 0;
    this.size = 1;
    this.weight = 2;
    this.diameter = 12;
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 80;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize + 5) * 4, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(this.weight);
    noFill();
    push();
    translate(width / 2, height / 2);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, this.size, this.size);
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(255);
    }
    noStroke();
    ellipse(this.size / 2, this.size / 2, this.diameter);
    ellipse(this.size / 2, -this.size / 2, this.diameter);
    ellipse(-this.size / 2, this.size / 2, this.diameter);
    ellipse(-this.size / 2, -this.size / 2, this.diameter);
    rectMode(CORNER);
    pop();
    this.angle += 1;
    this.size += 18;
    this.lifetime--;
  }
}

// Animation H
class AnimationH {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 1;
    this.scaler = random(10, 40);
    this.lifetime = 80;
    this.color = objectColors[floor(random(objectColors.length))];
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize + 5) * 5, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    noFill();
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(1);
    ellipse(this.x, this.y, this.diameter);

    this.diameter += this.scaler;
    this.lifetime--;
  }
}

// Animation Y
class AnimationY {
  constructor() {
    this.currentPosition1 = -1200;
    this.currentPosition2 = -1600;
    this.currentPosition3 = -1200;
    this.currentPosition4 = -2000;
    this.rectSpeed1 = random(50, 140);
    this.rectSpeed2 = random(50, 140);
    this.rectSpeed3 = random(50, 140);
    this.rectSpeed4 = random(50, 140);
    this.rectWidth = random(700, 1200);
    this.color = backgroundColors;
    this.colorNumber1 = floor(random(objectColors.length));
    this.colorNumber2 = floor(random(objectColors.length));
    this.colorNumber3 = floor(random(objectColors.length));
    this.colorNumber4 = floor(random(objectColors.length));
    if (this.colorNumber1 == this.colorNumber2) {
      this.colorNumber1 = floor(random(objectColors.length));
    }
    this.lifetime = 90;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 9 + 3, keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    noStroke();
    fill(this.color[this.colorNumber1]);
    rect(this.currentPosition1, 0, this.rectWidth, height / 4 - 100, 200);
    fill(this.color[this.colorNumber2]);
    rect(this.currentPosition2, height - height / 4, this.rectWidth, height / 4 - 100, 200);
    fill(this.color[this.colorNumber3]);
    rect(this.currentPosition3, height / 2, this.rectWidth, height / 4 - 100, 200);
    fill(this.color[this.colorNumber4]);
    rect(this.currentPosition4, height - height / 4 * 3, this.rectWidth, height / 4 - 100, 200);

    this.currentPosition1 += this.rectSpeed1;
    this.currentPosition2 += this.rectSpeed2;
    this.currentPosition3 += this.rectSpeed3;
    this.currentPosition4 += this.rectSpeed4;
    this.rectWidth -= 10;
    this.lifetime--;
  }
}

// Animation U
class AnimationU {
  constructor() {
    this.currentPosition = -height;
    this.rectSpeed = 80;
    this.rectHeight = height;
    this.color = backgroundColors;
    this.colorNumber1 = floor(random(objectColors.length));
    this.colorNumber2 = floor(random(objectColors.length));
    if (this.colorNumber1 == this.colorNumber2) {
      this.colorNumber1 = floor(random(objectColors.length));
    }
    this.lifetime = 60;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 11 + 4, keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    noStroke();

    fill(this.color[this.colorNumber1]);
    rect(0, this.currentPosition, width, this.rectHeight);

    //    fill(this.color[this.colorNumber2]);
    //    rect(width / 2, 0, width / 2, this.currentPosition);

    if (this.currentPosition < height) {
      this.currentPosition += this.rectSpeed;
      //      this.rectHeight -= 10
    }

    this.lifetime--;
    if (this.lifetime < 0) {
      colorTheme = 'vivid';
    }
  }
}

// Animation I
class AnimationI {
  constructor() {
    this.currentPosition1 = width + 200;
    this.currentPosition2 = width + 1200;
    this.currentPosition3 = width + 500;
    this.currentPosition4 = width + 1600;
    this.rectSpeed1 = random(50, 140);
    this.rectSpeed2 = random(50, 140);
    this.rectSpeed3 = random(50, 140);
    this.rectSpeed4 = random(50, 140);
    this.rectWidth = random(700, 1200);
    this.color = backgroundColors;
    this.colorNumber1 = floor(random(objectColors.length));
    this.colorNumber2 = floor(random(objectColors.length));
    this.colorNumber3 = floor(random(objectColors.length));
    this.colorNumber4 = floor(random(objectColors.length));
    if (this.colorNumber1 == this.colorNumber2) {
      this.colorNumber1 = floor(random(objectColors.length));
    }
    this.lifetime = 70;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 13 + 5, keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    noStroke();
    fill(this.color[this.colorNumber1]);
    rect(this.currentPosition1, 100, this.rectWidth, height / 4 - 100, 200);
    fill(this.color[this.colorNumber2]);
    rect(this.currentPosition2, height - height / 4 + 100, this.rectWidth, height / 4 - 100, 200);
    fill(this.color[this.colorNumber3]);
    rect(this.currentPosition3, height / 2 + 100, this.rectWidth, height / 4 - 100, 200);
    fill(this.color[this.colorNumber4]);
    rect(this.currentPosition4, height - height / 4 * 3 + 100, this.rectWidth, height / 4 - 100, 200);

    this.currentPosition1 -= this.rectSpeed1;
    this.currentPosition2 -= this.rectSpeed2;
    this.currentPosition3 -= this.rectSpeed3;
    this.currentPosition4 -= this.rectSpeed4;

    this.rectWidth -= 5;
    this.lifetime--;
  }
}

// Animation J
class AnimationJ {
  constructor() {
    this.position = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.velocity.mult(200);
    this.weight = 1;
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 40;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize + 5) * 6, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    push();
    translate(width / 2, height / 2);
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(this.weight);
    this.position.add(this.velocity);
    line(this.position.x / 4, this.position.y / 4, this.position.x, this.position.y);
    this.lifetime--;
    pop();
  }
}

class AnimationK {
  constructor() {
    this.startX = random(0 - width, width + width);
    while (0 < this.startX && this.startX < width) {
      this.startX = random(0 - width, width + width);
    }
    this.startY = random(0 - height, height + height);
    while (0 < this.startY && this.startY < height) {
      this.startY = random(0 - height, height + height);
    }
    this.targetX = width - this.startX;
    this.targetY = height - this.startY;
    this.distanceX = this.targetX - this.startX;
    this.distanceY = this.targetY - this.startY;
    this.currentX1 = this.startX;
    this.currentY1 = this.startY;
    this.currentX2 = this.startX;
    this.currentY2 = this.startY;
    this.weight = random(1, 2);
    this.color = objectColors[floor(random(objectColors.length))];
    this.counter = 0;
    this.lifetime = 70;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize + 5) * 7, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    noFill();

    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(this.weight);

    this.currentX1 += this.distanceX * 0.05;
    this.currentY1 += this.distanceY * 0.05;
    if (this.counter > 10) {
      this.currentX2 += this.distanceX * 0.05;
      this.currentY2 += this.distanceY * 0.05;
    }
    line(this.currentX2, this.currentY2, this.currentX1, this.currentY1);

    this.counter++;
    this.lifetime--;
  }
}

// Animation L
class AnimationL {
  constructor() {
    this.x = 20;
    this.y = 0;
    this.diameter = 20;
    this.lifetime = 180;
    this.color = objectColors[floor(random(objectColors.length))];
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize + 5) * 8, keyPosY, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }


    noStroke();
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(255);
    }
    for (var i = 0; i < 20; i++) {
      ellipse(this.x + i * 200, this.y + i * -200, this.diameter);
    }

    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    };
    strokeWeight(3);
    noFill();
    for (var i = 0; i < 20; i++) {
      ellipse(this.x - 100 + i * 200, this.y + 100 + i * -200, this.diameter);
    }
    this.y += 15;
    this.lifetime--;
  }
}

// Animation W
class AnimationW {
  constructor() {
    this.brightness = 0;
    this.brightnessPastel = 0;
    this.brightnessDark = 0;
    this.brightnessBright = 0;
    this.brightnessCandy = 0;
    this.brightnessNature = 0;
  }
  draw() {
    if (
      colorTheme == 'vivid' && objectColorNumber == '3'
    ) {
      background(this.brightnessPastel);
      if (this.brightnessPastel < 96) {
        this.brightnessPastel += 2;
      }
    } else if (
      colorTheme == 'vivid' && objectColorNumber == '8'
    ) {
      background(177, 80, this.brightnessNature);
      if (this.brightnessNature < 70) {
        this.brightnessNature += 2;
      }
    } else if (
      colorTheme == 'vivid' && objectColorNumber == '5'
    ) {
      background(187, 100, this.brightnessDark);
      if (this.brightnessDark < 83) {
        this.brightnessDark += 2;
      }
    } else if (
      colorTheme == 'vivid' && objectColorNumber == '6'
    ) {
      background(348, 50, this.brightnessBright);
      if (this.brightnessBright < 100) {
        this.brightnessBright += 2;
      }
    } else if (
      colorTheme == 'vivid' && objectColorNumber == '1' ||
      colorTheme == 'vivid' && objectColorNumber == '7'
    ) {
      background(43, 11, this.brightnessCandy);
      if (this.brightnessCandy < 91) {
        this.brightnessCandy += 2;
      }
    } else {
      background(this.brightness);
      if (this.brightness < 90) {
        this.brightness += 2;
      }
    }

  }
}

// Animation Q
class AnimationQ {
  constructor() {
    this.y = height / 2;
    this.pX = width;
    this.alpha = 100;
    this.lifetime = 100;
    this.color = objectColors[floor(random(objectColors.length))];
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX - (keySize / 2 + 2), keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    noStroke();

    //    if (isDark == false) {
    fill(this.color, 10);
    //    } else {
    //      fill(255);
    //    }
    //
    //    if (isFever == true) {
    //      fill(255);
    //    } else {
    //      
    //    }

    var spectrum = fft.analyze();
    for (var i = 0; i < spectrum.length; i += 8) {
      var positionX = map(i, 0, spectrum.length, 0, this.pX * 1.3);
      var rectHeight = -height + map(spectrum[i], 0, 255, height, 0);
      rect(positionX, height, 3, rectHeight);
    }

    this.lifetime--;
  }
}

// Animation E
class AnimationE {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(3, 25));
    this.diameter = random(1, 60);
    this.opacity = random(100);
    this.randomNumber = random(100);
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 100;
    this.alpha = 80;
  }
  draw() {
    if (this.randomNumber > 50) {
      if (
        colorTheme == 'vivid' && objectColorNumber == '0' ||
        colorTheme == 'vivid' && objectColorNumber == '1' ||
        colorTheme == 'vivid' && objectColorNumber == '2' ||
        colorTheme == 'vivid' && objectColorNumber == '3' ||
        colorTheme == 'vivid' && objectColorNumber == '5' ||
        colorTheme == 'vivid' && objectColorNumber == '6' ||
        colorTheme == 'vivid' && objectColorNumber == '7' ||
        colorTheme == 'vivid' && objectColorNumber == '8'
      ) {
        fill(this.color);
      } else {
        fill(0, 0, 100);
      }
      noStroke();
      ellipse(this.position.x, this.position.y, this.diameter);

      // キー
      if (guidanceMode == 'guidance visible') {
        noStroke();
        fill(keyColor, this.alpha);
        rect(keyPosX + (keySize / 2 * 3 + 7), keyPosY - keySize - 2, keySize, keySize, 10);
        if (this.alpha > 0) {
          this.alpha -= 20;
        }
      }

    } else {
      noFill();
      strokeWeight(7);
      ellipse(this.position.x, this.position.y, this.diameter);

      if (colorTheme == 'vivid') {
        stroke(this.color);
      } else {
        stroke(255);
      }
    }

    this.position.add(this.velocity);
    this.lifetime--;
  }
}

// Animation R
class AnimationR {
  constructor() {
    this.size = 1;
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 60;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 5 + 1, keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);
    rotate(45);
    noFill();
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    strokeWeight(20);
    rect(0, 0, this.size, this.size);
    this.size += 30;
    rectMode(CORNER);
    pop();
    this.lifetime--;
  }
}

// Animation T
class AnimationT {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 30);
    this.size2 = this.size * 1.5;
    this.angle = 0;
    this.velocity = 40;
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 120;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 7 + 2, keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    push();
    translate(this.x, height);
    rotate(-90);
    noStroke();
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(255);
    }
    triangle(
      -this.size + this.velocity * 3.5, this.size,
      this.velocity * 3.5 - this.size, -this.size,
      this.size + this.velocity * 3.5, 0
    );
    noFill();
    strokeWeight(2);
    if (colorTheme == 'vivid') {
      stroke(this.color);
    } else {
      stroke(255);
    }
    triangle(
      this.velocity, this.size2,
      this.velocity, -this.size2,
      this.size2 + this.size2 * 0.9 + this.velocity, 0
    );
    this.velocity += this.velocity * 0.06;
    pop();
    this.lifetime--;
  }
}

//Animation M
class AnimationM {
  constructor() {
    this.diameter = width;
    this.lifetime = 40;
    this.color = objectColors[floor(random(objectColors.length))];
    this.alpha = 100;
  }
  draw() {

    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(255);
    }
    noStroke();

    ellipse(width / 2, height / 2, this.diameter);

    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 13 + 6, keyPosY + (keySize * 1 + 3), keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    this.diameter -= 100;
    this.lifetime--;
  }
}

//Animation N
class AnimationN {
  constructor() {
    this.positionX = random(width);
    this.positionY = height - 200;
    this.velocityY = -60;
    this.gravity = 3;
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 120;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 11 + 5, keyPosY + (keySize * 1 + 3), keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    noStroke();
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(255);
    }
    this.velocityY += this.gravity;
    this.positionY += this.velocityY;
    ellipse(this.positionX, this.positionY, 300);
    this.lifetime--;
  }
}

//Animation B
class AnimationB {
  constructor() {
    this.brightness = 50;
    this.brightnessPastel = 96;
    this.brightnessDark = 60;
    this.brightnessBright = 50;
    this.brightnessNature = 50;
    this.brightnessCandy = 50;
    this.alpha = 100;
  }
  draw() {
    if (
      colorTheme == 'vivid' && objectColorNumber == '3'
    ) {
      background(225, 100, this.brightnessPastel);
      if (this.brightnessPastel > 40) {
        this.brightnessPastel -= 2;
      }
    } else if (
      colorTheme == 'vivid' && objectColorNumber == '8'
    ) {
      background(187, 100, this.brightnessNature);
      if (this.brightnessNature > 30) {
        this.brightnessNature -= 2;
      }
    } else if (
      colorTheme == 'vivid' && objectColorNumber == '5'
    ) {
      background(220, 100, this.brightnessPastel);
      if (this.brightnessPastel > 45) {
        this.brightnessPastel -= 2;
      }

    } else if (
      colorTheme == 'vivid' && objectColorNumber == '6'
    ) {
      background(26, 100, this.brightnessBright);
      if (this.brightnessBright > 30) {
        this.brightnessBright += 2;
      }
    } else if (
      colorTheme == 'vivid' && objectColorNumber == '1' ||
      colorTheme == 'vivid' && objectColorNumber == '7'
    ) {
      background(225, 100, this.brightnessCandy);
      if (this.brightnessCandy > 20) {
        this.brightnessCandy -= 2;
      }
    } else {
      background(this.brightness);
      if (this.brightness > 8) {
        this.brightness -= 2;
      }
    }

  }
}


// Animation P
class AnimationP {
  constructor() {
    this.scalor = random(1);
    this.position = createVector(width / 2, height);
    this.velocity = createVector(random(-3, 3), random(-5, -10));
    this.velocity.mult(random(3, 5));
    this.diameter = 40;
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 80;
    this.alpha = 100;
  }
  draw() {

    noStroke();
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(255);
    }
    ellipse(this.position.x, this.position.y, this.diameter);

    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 17 + 7, keyPosY - keySize - 2, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    this.position.add(this.velocity);
    this.velocity.y += 1;
    this.lifetime--;
  }
}

// Animation X
class AnimationX {
  constructor() {
    this.x1 = width;
    this.x2 = width;
    this.y1 = 0;
    this.y2 = 1;
    this.angle = 1;
    this.maxAngle = 900;
    this.increment = random(10, 100);
    this.color = objectColors[floor(random(objectColors.length))];
    this.lifetime = 60;
    this.flag = random(100);
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 3 + 1, keyPosY + (keySize * 1 + 4), keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    noStroke();
    if (colorTheme == 'vivid') {
      fill(this.color);
    } else {
      fill(0, 0, 100, 100);
    }
    push();
    translate(width / 2, height / 2);

    if (this.flag > 50) {
      rotate(this.angle);
      this.angle += (1.6 + this.angle * 0.05);
      //      this.angle += 9;
      triangle(0, 0, this.x1, this.y1, this.x2, this.y2 + this.increment);
    } else {
      rotate(this.angle);
      this.angle -= (1.6 - this.angle * 0.05);
      //      this.angle -= 9;
      triangle(0, 0, -this.x1, -this.y1, -this.x2, -this.y2 + this.increment);
    }

    this.increment += this.increment * 0.1;
    this.lifetime--;

    pop();
  }
}

// Animation Z
class AnimationZ {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 0;
    this.lifetime = 60;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 1, keyPosY + (keySize * 1 + 4), keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }

    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.diameter);

    fill(0);
    ellipse(this.x, this.y, this.diameter - 5);

    if (this.diameter < width * 2.2) {
      this.diameter += 70;
    }
    this.lifetime--;
  }
}

// Animation V
class AnimationV {
  constructor() {
    this.startX1 = -100;
    this.startY1 = 100;
    this.startX2 = width + 100;
    this.startY2 = 100;
    this.endX1 = width * 2;
    this.endY1 = 0;
    this.endX2 = -width;
    this.endY2 = 0;
    this.weight = 2;
    this.angle = 0;
    this.color1 = objectColors[floor(random(objectColors.length))];
    this.color2 = objectColors[floor(random(objectColors.length))];
    this.lifetime = 50;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 7 + 2, keyPosY + (keySize * 1 + 4), keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    if (colorTheme == 'vivid') {
      stroke(this.color1);
    } else {
      stroke(255);
    }
    strokeWeight(this.weight);
    noFill();

    push();
    translate(0, height);
    for (var i = 0; i < 6; i++) {
      line(this.startX1, this.startY1, this.endX1 + i * 100, this.endY1 + i * 140);
    }
    for (var i = 0; i < 6; i++) {
      line(this.startX2, this.startY2, this.endX2 - i * 100, this.endY2 + i * 140);
    }
    pop();

    this.endX1 -= sin(this.angle) * 100;
    this.endY1 -= sin(this.angle) * 100;
    this.endX2 += sin(this.angle) * 100;
    this.endY2 -= sin(this.angle) * 100;
    this.angle += 3;
    this.lifetime--;
  }
}

// Background Black
class BackgroundBlack {
  constructor() {
    this.brightness = 0;
  }
  draw() {
    background(this.brightness);
  }
}

// Background White
class BackgroundWhite {
  constructor() {
    this.brightness = 90;
  }
  draw() {
    background(this.brightness);
  }
}

// タイピング正解のエフェクトのクラス
class EffectCorrectTyping {
  constructor() {
    this.x = width / 2 - (rectSize * 4 + 10) + (typingIndex - 1) * (rectSize + 10);
    this.y = height / 2 - (rectSize / 2 - 25), rectSize, rectSize, 10;
    this.size = 50;
    this.radius = 20;
    this.angle = 0;
    this.weight = 1;
    this.lifetime = 25;
    this.opacity = 50;
  }
  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    rectMode(CENTER);
    noFill();
    stroke(255);
    strokeWeight(this.weight);
    rect(0, 0, this.size, this.size, this.radius);

    this.size += 14;
    this.lifetime -= 1.3;
    this.angle -= 5;
    rectMode(CORNER);
    pop();
  }
}

// タイピングミスのエフェクトのクラス
class EffectMissTyping {
  constructor() {
    this.brightness = 100;
    this.x = width / 2 - (rectSize * 4 - 60) + (typingIndex - 1) * (rectSize + 10);
    this.y = height / 2 - (rectSize / 2 + 20) + 40, rectSize, rectSize, 10;
    this.size = 50;
    this.radius = 6;
    this.angle = 0;
    this.opacity = 100;
    this.lifetime = 20;
  }
  draw() {
    noStroke();
    fill(336, 81, this.brightness, this.opacity);
    rect(0, 0, width, height);
    this.brightness -= 1;

    fill(255);
    noStroke();
    textAlign(CENTER);
    textFont('oswald');
    textSize(18);
    text('M I S S !', width / 2 + sin(millis()) * 1, height / 2 - 50);

    this.lifetime--;
  }
}


// コンボボーナスのエフェクト
class comboBonusEffect {
  constructor() {
    this.weight = 15;
    this.count = 1;
    this.life = 120;
  }
  draw() {
    noFill();
    if (this.weight > 0) {
      strokeWeight(this.weight - this.count * 0.5);
    }
    stroke(255, 100 - this.count * 1.2);
    ellipse(width / 2, height / 2 - 230, 50 + this.count * 10);

    noStroke();
    fill(255, 80 - this.count * 1.5);
    ellipse(width / 2, height / 2 - 230, 80);

    this.count++;
    this.life--;
  }
}

// 背景をデフォルトに戻すアニメーション
class AnimationDefault {
  constructor() {
    this.randomNumber = random(100);
    this.brightness = 0;
    this.brightnessPastel = 0;
    this.brightnessBright = 60;
    this.brightnessCandy = 0;
    this.brightnessDark = 50;
    this.brightnessNature = 50;
  }
  draw() {
    if (isDark == false) {
      if (
        objectColorNumber == '3'
      ) {
        background(this.brightnessBright);
        if (this.brightnessBright < 96) {
          this.brightnessBright += 2;
        }
      } else if (
        objectColorNumber == '5'
      ) {
        background(187, 100, this.brightnessBright);
        if (this.brightnessBright < 83) {
          this.brightnessBright += 2;
        }
      } else if (
        objectColorNumber == '6'
      ) {
        background(348, 50, this.brightnessBright);
        if (this.brightnessBright < 100) {
          this.brightnessBright += 2;
        }
      } else if (
        objectColorNumber == '1' ||
        objectColorNumber == '7'
      ) {
        background(43, 11, this.brightnessBright);
        if (this.brightnessBright < 91) {
          this.brightnessBright += 2;
        }
      } else if (
        objectColorNumber == '8'
      ) {
        background(177, 80, this.brightnessNature);
        if (this.brightnessNature < 70) {
          this.brightnessNature += 2;
        }
      } else {
        background(this.brightnessBright);
        if (this.brightness < 50) {
          this.brightness += 2;
        }
      }
    } else {
      if (objectColorNumber == '0') {
        background(225, 100, this.brightnessDark);
        if (this.brightnessDark > 20) {
          this.brightnessDark -= 1;
        }
      } else if (
        objectColorNumber == '6') {
        background(26, 100, this.brightnessBright);
        if (this.brightnessBright > 30) {
          this.brightnessBright += 2;
        }
      } else if (
        objectColorNumber == '8') {
        background(187, 100, this.brightnessNature);
        if (this.brightnessNature > 30) {
          this.brightnessNature -= 1;
        }
      } else {
        background(this.brightnessDark);
        if (this.brightnessDark > 3) {
          this.brightnessDark -= 1;
        }
      }
    }
  }
}

// 画面遷移のアニメーション（暗転）
class AnimationEnd {
  constructor() {
    this.brightness = 50;
  }
  draw() {
    background(this.brightness);
    if (this.brightness > 10) {
      this.brightness -= 2;
    }
  }
}

// ゲーム用の背景
class gameBackground {
  constructor() {
    this.brightness = 50;
  }
  draw() {
    background(43, 11, this.brightness);
    if (this.brightness < 91) {
      this.brightness += 2;
    }
  }
}

// →アニメーション
class AnimationRightArrow {
  constructor() {
    this.lifetime = 60;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 22 + 34, keyPosY - keySize + 99, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    this.lifetime--;
  }
}

// 左アニメーション
class AnimationLeftArrow {
  constructor() {
    this.lifetime = 60;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 20 + 34, keyPosY - keySize + 99, keySize, keySize, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
    this.lifetime--;
  }
}

class AnimationWkey {
  constructor() {
    this.lifetime = 60;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor2, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 1 + 1, keyPosY - keySize - 2, keySize - 2, keySize - 1, 10);
      this.lifetime--;

    }
  }
}

class AnimationBkey {
  constructor() {
    this.lifetime = 60;
    this.alpha = 100;
  }
  draw() {
    if (guidanceMode == 'guidance visible') {
      noStroke();
      fill(keyColor2, this.alpha);
      rect(keyPosX + (keySize / 2 + 2) * 1 + 1, keyPosY - keySize - 2, keySize - 2, keySize - 1, 10);
      if (this.alpha > 0) {
        this.alpha -= 20;
      }
    }
  }
}