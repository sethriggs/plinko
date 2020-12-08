class plinko 
{
constructor(x,y,radius){
 var options = 
 {
    
    'density':1.0,
    'isStatic' : false
}
 this.radius = radius
this.body = Bodies.circle(x, y, radius, options);
this.colors= color(random(0,255),random(0,255), random(0,255));
World.add(world, this.body);

}

display()
{
fill("red");
ellipseMode(RADIUS);
ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
}





}
