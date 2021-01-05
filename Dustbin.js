class Dustbin{
constructor(x,y,width,height){
    var options = {
        isStatic: false,
        restitution: 0.9,
        friction: 1
    }
    this.body = Bodies.rectangle(x, y,width,height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/dustbinImage.png");
}
display(){
    var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);

}
}