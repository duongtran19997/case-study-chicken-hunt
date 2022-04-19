let chickens = [];

let mouse;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let a = new Chicken(1, 2, 3, 4)

function creatChick() {
    for (let i = 0; i < 2; i++) {
        let x = randomNumber(0, 800);
        let y = randomNumber(0, 400);
        let width = randomNumber(50, 200)
        let height = randomNumber(50, 200)
        let speed = randomNumber(5, 15)
        let chicken = new Chicken(x, y, width, height);
        chicken.speedX = speed;
        chicken.speedY = speed;
        chickens.push(chicken);
        console.log(i)
        console.log("x cuar chicken" + chickens[i]._x)
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
    // this._pen.rect(this._x, this._y, this._width, this._height);
    // this._pen.stroke();
    let img = document.getElementById('background1')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// let chicken = new Chicken(80,100,80,50);
// let chicken2 = new Chicken(30,50,20,30);
// chicken.draw();
// chicken2.draw();
creatChick();
showAll();

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //  chicken.move()
    background()
    for (let chicken of chickens) {
        // chicken.move();
        chicken.draw();
        // console.log(chicken._x)
    }
    requestAnimationFrame(main)
}

main()
// chickens.forEach(chicken,)
canvas.addEventListener('click', function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        // console.log(event.offsetX);
        // console.log(event.offsetY);
        for (let i = 0; i < 1/*chickens.length*/; i++) {
            console.log(chickens[i]._x);
            console.log("ddaay laf x"+x);
            console.log(chickens[i]._x+ chickens[i]._width);
            console.log("cy"+chickens[i]._y);
            console.log("day la y "+y);
            console.log("y va height"+(chickens[i]._y + chickens[i]._height));
            console.log((((chickens[i]._x + chickens[i]._width) >= x) && (chickens[i]._x <= x) && (chickens[i]._y <= y) && (chickens[i] + chickens[i]._height) >= y))
            if (((chickens[i]._x + chickens[i]._width) >= x) && (chickens[i]._x <= x) && (chickens[i]._y <= y) && (chickens[i] + chickens[i]._height) >= y) {
                console.log('trung');
                // console.log(chickens[i]._x);
            }
        }
    }
)

