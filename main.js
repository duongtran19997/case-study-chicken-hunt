let chickens = [];
let mouse;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let totalChickens = 10
let score = 0;
let time = 20;
let speed = 5;
let gameOver = true;
let count = 0;
let reloadTime = 80;

function creatChick(totalChickens) {
    for (let i = 0; i < totalChickens; i++) {
        let x = randomNumber(0, 800);
        let y = randomNumber(0, 400);
        let width = randomNumber(50, 200)
        // let height = randomNumber(50, 200)
        // let speed = 5
        let chicken = new Chicken(x, y, width, width, speed);
        chicken.speedX = speed;
        chicken.speedY = speed;
        chickens.push(chicken);
    }
}

function randomNumber(min, max) {
    let rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
}

function background() {
    ctx.beginPath();
    let img = document.getElementById('background1')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}



function main() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background();
        checkWin();
        console.log(checkWin());
        countTime();
        for (let chicken of chickens) {
            chicken.move();
        }

    if(checkWin() === true){
        nextLevel();
        time += 10;
    }

    if (!gameOver){
    requestAnimationFrame(main)}
    else{
        drawgameEnd()
    }
}
function drawgameEnd(){
    ctx.textAlign='center';
    ctx.fillStyle='black';
    ctx.font = '50px Consolas'
    ctx.fillText('Game Over:your score is '+ score, canvas.width/2,300)
}
function start() {
    gameOver = false;
    creatChick(totalChickens);
    main();
    document.getElementById('start').hidden = true;
}

function resetChicken() {
    chickens = [];
    creatChick(totalChickens)
}

function resetScore() {
    score = 0;
    scorecount.innerHTML = score;
}

function reset() {
    gameOver = false;
    resetScore();
    resetChicken();
    resetTime();
}

function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function countTime() {
        count++;
        if (count >= reloadTime) {
            time--;
            count = 0;
        }
        timecount.innerHTML = time
        if (time === -1) {
            checkLose();
            time = 0;
        }
}

function resetTime() {
    time = 20;
}

function checkLose() {
    // alert('có một con gà trong một cái vườn')
    // alert('score :'+score)
    gameOver = true;
}

function checkWin() {
    for (let i = 0; i < chickens.length; i++) {
        if (chickens[i]._status === true) {
            return false;
        }
    }
    return  true;
}

function upSpeed() {
    speed += 5;
}

function nextLevel() {
    if (checkWin()) {
        upSpeed();
        resetChicken(10);
        resetTime();
    }
}

canvas.addEventListener('click', function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        for (let i = 0; i < chickens.length; i++) {
            let chickensClick = chickens[i];
            if (chickensClick._status) {
                if (chickensClick._x <= x && chickensClick._x + chickensClick._width >= x &&
                    chickensClick._y <= y && chickensClick._y + chickensClick._height >= y
                ) {
                    // console.log(1)
                    chickens[i]._status = false;
                    console.log(chickens[i]._status);
                    score++;
                    scorecount.innerHTML = score;
                }
            }
        }
    }
)

