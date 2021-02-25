class Bird extends BaseClass {
    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadImage("paper.png");
    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        super.display();
    }
}