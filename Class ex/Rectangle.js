class Rectangle {
    constructor(w, h, c){
        this.recWidth = w;
        this.recHeight = h;
        this.recColor = c;
    }

    get width(){
        return this.recWidth;
    }

    get height(){
        return this.recHeight;
    }

    get color(){
        return this.recColor;
    }

    calcArea = () => this.recWidth * this.recHeight;
}

let rect = new Rectangle(4, 5, 'Red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());