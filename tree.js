class Tree{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.treewidth = 420;
        this.treeheight = 300;
        this.wallthickness = 0;
    
        this.bottombody = Bodies.rectangle(this.x, this.y, this.treewidth, this.wallthickness, {isStatic: true});
        this.leftwallbody = Bodies.rectangle(this.x-this.treewidth/2, this.y-this.treeheight/2, this.wallthickness, this.treeheight, {isStatic: true});
       this.rightwallbody = Bodies.rectangle(this.x+this.treewidth/2, this.y-this.treeheight/2, this.wallthickness, this.treeheight, {isStatic: true});
       
       this.image = loadImage("tree.png");
        World.add(world, this.bottombody);
        World.add(world, this.leftwallbody);
        World.add(world, this.rightwallbody);
    }
    
        display(){
            var posbottom = this.bottombody.position;

          push()
          translate(posbottom.x, posbottom.y-15);
          rectMode(CENTER)
          angleMode(RADIANS)
          fill(255)
          //stroke(255)
          imageMode(CENTER);
          image(this.image, 0, -this.treeheight/2, this.treewidth, this.treeheight*2)
          pop()
        }
    }