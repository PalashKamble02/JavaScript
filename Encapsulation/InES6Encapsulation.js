class Circle {
    color; // public field
    #radius; //Private field
    constructor(radius, color) {
        this.color = color;
        this.#radius= radius;
    }
    getArea(){
        return Math.PI*this.#radius*this.#radius;
    }
    get radius () {
        return this.#radius;
    }
    set radius(value){
        if(value >0){
            this.#radius = value;
        }else{
            console.log("Radius must be positive");
        }
    }
}

const circle = new Circle(5,'red')
console.log(circle.getArea());

console.log(circle.color);

console.log(circle.radius);

circle.radius= 10;
console.log(circle.getArea());

circle.radius = -1;