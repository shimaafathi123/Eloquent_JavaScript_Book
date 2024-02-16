class vec{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    plus (vec2){
        return new vec (this.x+vec2.x, this.y+vec2.y)
    }
    minus (vec2){
        return new vec (this.x-vec2.x, this.y-vec2.y)
    }
    get length(){
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
}
console.log(new vec(1,2).plus(new vec(2,3)))
console.log(new vec(1,2).minus(new vec(2,3)))
console.log(new vec(3,4).length)

