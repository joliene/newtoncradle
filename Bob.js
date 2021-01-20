/*class Bob{
    constructor(x,y,r,color){
        var options={
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.color = color;
        World.add(world, this.body)
    }
    display(){
       // var paperpos=this.body.position
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
       // this.body.x = mouse.x;
       // this.body.y = mouse.y;
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        noStroke();
        //strokeWeight(3);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}*/


































































class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8,
           // inertia:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world, this.body)
    }
    display(){
        var paperpos=this.body.position

        push()
     //   this.body.x = mouse.x;
       // this.body.y = mouse.y;
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        pop()
    }
}