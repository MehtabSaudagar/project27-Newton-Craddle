class Roof{

    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.roof=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.roof);
        this.width=width;
        this.height=height;
    }

    display(){

        var point=this.roof.position
        rectMode(CENTER);
        fill("white")
        rect(point.x,point.y,this.width,this.height);
    }
}