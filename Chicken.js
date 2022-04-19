class Chicken {//tạo lớp con gà
    constructor(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._speedX = 5;
        this._speedY = 5;
        this._status = true;
        this._width = width;
        this._height = height;
        this._canvas = document.getElementById('canvas')
        this._pen = this._canvas.getContext('2d')
    }

    draw() { //vẽ gà
        if (this._status) {
            this._pen.beginPath();
            let img = document.getElementById('duck1')
            this._pen.drawImage(img,this._x,this._y,this._width,this._height);
        }

    }
    
    move() {  //tạo phương thức di chuyển
        this._x += this._speedX;
        this._y += this._speedY;
        this.draw();
        this.collision();
    }

    collision() {
        if (this._x + this._width >= this._canvas.width) {
            this._speedX = -this._speedX
        }
        if (this._x <= 0) {
            this._speedX= -this._speedX
        }
        if (this._y + this._height >= this._canvas.height) {
            this._speedY = -this._speedY
        }
        if (this._y <= 0) {
            this._speedY = -this._speedY
        }
    }

}

