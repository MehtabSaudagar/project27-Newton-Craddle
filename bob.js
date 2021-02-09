class Bob{

    constructor(x){

        var options={
           // isStatic:true,
            density:0.8,
            restitution:1,
            friction:0.3
        }

        this.bob=Bodies.circle(x,400,25,options);
        World.add(world,this.bob);
        
    }

    display(){

        var point=this.bob.position
        ellipseMode(RADIUS);
        fill("pink")
        ellipse(point.x,point.y,25);
    }
}