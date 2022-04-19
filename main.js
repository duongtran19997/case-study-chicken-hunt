let chickens = [];

let mouse;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let a = new Chicken(1, 2, 3, 4);
let totalChickens = 10

function creatChick(totalChickens) {
    for (let i = 0; i < totalChickens; i++) {
        let x = randomNumber(0, 800);
        let y = randomNumber(0, 400);
        let width = randomNumber(50, 200)
        let height = randomNumber(50, 200)
        let speed = randomNumber(5, 15)
        let chicken = new Chicken(x, y, width, height);
        chicken.speedX = speed;
        chicken.speedY = speed;
        chickens.push(chicken);
    }
}

function randomNumber(min, max) {
    let rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
}

function showAll() {
    for (let i = 0; i < chickens.length; i++) {
        chickens[i].draw();

    }
}

function background() {
    ctx.beginPath();
    let img = document.getElementById('background1')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

creatChick(totalChickens);
showAll();

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    background()
    for (let chicken of chickens) {
        chicken.move();
    }
    requestAnimationFrame(main)
}

main()
canvas.addEventListener('click', function (event) {
        let x = event.offsetX;
        let y = event.offsetY;

        for (let i = 0; i < chickens.length; i++) {
            let chickensClick = chickens[i];
            if (chickensClick._x <= x && chickensClick._x + chickensClick._width >= x &&
            chickensClick._y <= y && chickensClick._y + chickensClick._height >= y
            ) {
                console.log(1)
                chickensClick._status = false;
            }
        }
    }
)

