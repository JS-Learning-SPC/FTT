let QUESTION = localStorage.QUESTION || 'schoo WEB campus';
let types = [];
let timer = null;
let startTime = 0;

function init() {
    document.querySelector('.container').innerHTML = '';

    types = QUESTION.split('').map(function(str) {
        let type = document.createElement('span');
        type.className = 'type';
        type.textContent = str;
        document.querySelector('.container').appendChild(type);
        return type;
    });

    timerEnd();
    document.querySelector('.timer').textContent = '0.000';
}

init();

function timerStart() {
    startTime = new Date().getTime();
    timer = setInterval(function() {
        let time = (new Date().getTime() - startTime) / 1000;
        document.querySelector('.timer').textContent = time.toFixed(3);
    }, 10);
}
function timerEnd() {
    clearInterval(timer);
    timer = null;
}


document.addEventListener('keydown', function(event) {
    let keyCode = event.keyCode;
    if (keyCode === 13) { // enter
        init();
        return;
    }

    let key = '';
    if (keyCode === 32) { // space
        key = ' ';

    } else if (keyCode >= 65 && keyCode <= 90) { // a to z //
        key = String.fromCharCode(keyCode);
        if (event.shiftKey) {
            key = key.toUpperCase();
        } else {
            key = key.toLowerCase();
        }
    }

    if (key) {
        if (timer === null && types.length) {
            timerStart();
        }

        let next = types[0];
        if (next.textContent === key) {
            next.classList.add('ok');
            types.shift();

            if (types.length === 0) {
                timerEnd();
            }

        } else {
            next.classList.add('ng');
        }
    }
});

document.querySelector('.question_button').addEventListener('click', function(event) {
    let text = prompt('問題文を入力して下さい');
    if (text) {
        localStorage.QUESTION = QUESTION = text;
        init();
    }
});
