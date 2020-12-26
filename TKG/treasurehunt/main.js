const c_total = 100000;
const c_prob = [1,10,100,10000];
const c_winMoney = [10000000,100000,10000,300];
const c_1 = [];
const c_2 = [];
const c_3 = [];
const c_4 = [];
const lotteryMoney = 300;

let defaultHtml;
let buyNumber = 0;
let buyCount = Number(0);
let buyMoney = Number(0);
let w1 = Number(0);
let w2 = Number(0);
let w3 = Number(0);
let w4 = Number(0);
let w999 = Number(0);
let buyNumberNow = Number(0);

let allOpenFlg = 0;

// 初期処理
function init() {
  // くじ描画領域の初期値保存
  defaultHtml = document.getElementById("tresure_place").innerHTML;
  // 当選番号抽選
  initLotteryNumbers();
  // 購入回数描画
  viewBuyCount();
  // 当選金額一覧描画
  viewWinMoney();
  // 当選金額描画
  viewBuyWinMoney();
}

function viewWinMoney() {
  let text = "１等： " + c_winMoney[0].toLocaleString() + " 円　　２等： " + c_winMoney[1].toLocaleString() + " 円　　３等： " + c_winMoney[2].toLocaleString() + " 円　　４等： " + c_winMoney[3].toLocaleString() + " 円";
  document.querySelector(".winMoney").textContent = text;
}

function viewBuyWinMoney() {
  let winTotalMoney = w1*c_winMoney[0] + w2*c_winMoney[1] + w3*c_winMoney[2] + w4*c_winMoney[3];
  let text = "１等： " + w1 + " 枚　　２等： " + w2 + " 枚　　３等： " + w3 + " 枚　　４等： " + w4 + " 枚　　はずれ： " + w999 + " 枚" + "　　　　　　　　　　　当選金額　" + winTotalMoney + "　円"
  document.querySelector(".buyWinMoney").textContent = text;
}

function setLotteryImg () {
  for (let i = 0; i < buyNumber; i++) {
    let img = document.createElement('img');
    img.src = "./img/img.jpg";
    img.className = "tresure";
    img.id = "tresure" + (i + 1);
    img.addEventListener("click", {name: i+1, handleEvent: imgOpen});
    document.getElementById('tresure_place').appendChild(img);
  }
}

// 抽選番号割り当て
function initLotteryNumbers () {
  for (let i = 0; i < c_prob[0]; i++) {
    c_1[i] = initLotteryNumber();
  }
  for (let i = 0; i < c_prob[1]; i++) {
    c_2[i] = initLotteryNumber();
  }
  for (let i = 0; i < c_prob[2]; i++) {
    c_3[i] = initLotteryNumber();
  }
  for (let i = 0; i < c_prob[3]; i++) {
    c_4[i] = initLotteryNumber();
  }
}

// 実際の番号抽選（被り制限処理あり）
function initLotteryNumber () {
  let number;
  let result;

  do {
    number = lottery();
    result = false;

    if (c_1.length !== 0) {
      let c_1_result = c_1.find(item => item === number);
      if (c_1_result !== undefined) {
        result = true;
      }
    }
    if (c_2.length !== 0) {
      let c_2_result = c_2.find(item => item === number);
      if (c_2_result !== undefined) {
        result = true;
      }
    }
    if (c_3.length !== 0) {
      let c_3_result = c_3.find(item => item === number);
      if (c_3_result !== undefined) {
        result = true;
      }
    }
    if (c_4.length !== 0) {
      let c_4_result = c_4.find(item => item === number);
      if (c_4_result !== undefined) {
        result = true;
      }
    }

  } while (result);

  return number;
}

init();

// くじ選択処理
function imgOpen() {
  console.log(this.name);
  const openTresure = document.getElementById("tresure" + this.name);
  openTresure.classList.add("open");
  let number = lottery();
  let result = lotteryResult(number);

  // くじを選択してから１秒後にくじ結果のイメージ変更
  waitAndChangeImg(1, this.name,result);
}

function viewBuyCount () {
  document.querySelector('.buyCount').textContent = '購入枚数　' + buyCount + ' 枚';
  document.querySelector('.buyMoney').textContent = '購入金額　' + buyMoney + ' 円';
}

// くじ結果判定
function lotteryResult (num) {
  let c_1_result = c_1.find(item => item === num);
  if (c_1_result !== undefined) {
    return 1;
  }
  let c_2_result = c_2.find(item => item === num);
  if (c_2_result !== undefined) {
    return 2;
  }
  let c_3_result = c_3.find(item => item === num);
  if (c_3_result !== undefined) {
    return 3;
  }
  let c_4_result = c_4.find(item => item === num);
  if (c_4_result !== undefined) {
    return 4;
  }
  return 999;
}

// 引いたくじ番号抽選
function lottery () {
  return Math.floor(Math.random()*c_total);
}

// 非同期関数（""クラスをsec秒後に付与させる）
async function waitAndChangeImg(sec, num, result) {
  await waitByPromise(sec);
  // イメージ変更
  changeImg(num, result);
  // 当選枚数の再描画
  viewBuyWinMoney();
}

// くじ結果毎に描画イメージ変更
function changeImg (num,result) {
  const openTresure = document.getElementById("tresure" + num);
  switch (result) {
    case 1:
      openTresure.src="./img/img1.jpg";
      w1 += 1;
      break;
    case 2:
      openTresure.src="./img/img2.jpg";
      w2 += 1;
      break;
    case 3:
      openTresure.src="./img/img3.jpg";
      w3 += 1;
      break;
    case 4:
      openTresure.src="./img/img4.jpg";
      w4 += 1;
      break;
    default:
      openTresure.src="./img/img999.jpg";
      w999 += 1;
  }
}

// 待機処理
function waitByPromise(sec) {
  return new Promise(resolve => setTimeout(resolve, sec*1000));
}

// 購入ボタン押した時の処理
document.querySelector('.buyButton').addEventListener('click', function(event) {
  // 一時保存領域から再描画
  document.getElementById("tresure_place").innerHTML = defaultHtml;
  buyNumber = document.getElementById("buyText").value;
  // 入力値の数値判定
  if (isNaN(buyNumber)) {
    alert("購入枚数には半角英数で数値を入力してください。");
    return event;
  }
  buyNumberNow = buyNumber;
  // 購入処理
  updateBuyCount(buyNumber);
  // くじ描画
  setLotteryImg();
  allOpenFlg = 0;
});

// 購入処理
function updateBuyCount (num) {
  buyCount = Number(buyCount) + Number(num);
  buyMoney = buyCount*lotteryMoney;
  viewBuyCount();
}

// リセットボタンを押した時の処理
document.querySelector('.resetButton').addEventListener('click', function(event) {
  // ページ再読み込み（本当はローカルストレージからリロードした方がレスポンス〇）
  window.location.reload(true);
});

// 全部めくるボタンを押した時の処理
document.querySelector('.allOpenButton').addEventListener('click', function(event) {
  if (allOpenFlg === 1) {
    return event;
  }
  imgAllOpen();
  allOpenFlg = 1;
});

// くじ選択処理
function imgAllOpen() {
  for (let i = 1; i <= buyNumberNow; i++) {
    const openTresure = document.getElementById("tresure" + i);
    openTresure.classList.add("open");
    let number = lottery();
    let result = lotteryResult(number);

    // くじを選択してから１秒後にくじ結果のイメージ変更
    waitAndChangeImg(1, i, result);
  }
}
