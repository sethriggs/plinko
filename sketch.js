var particles = [];
var plinkos = [];
var division = [];
var divisionH = 300;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  for(var k = 0; k <=width; k = k + 80)
  {
  division.push(new Division(k, height-divisionH/2,10,divisionH));
  }
  
  for ( var j = 40; j <=width; j=j+50)
  {
  
    plinkos.push(new plinko(j,75));
  }
  
  for (var j = 15; j <=width-10; j=j+50)
  {
  
    plinkos.push(new plinko(j,175));
  }

  for (var j = 0; j <particles.length;j++)
  {

    particles[j].display();
  }

  for (var k = 0; k < division.length; k++)
  {

    division[k].display();
  }

if (frameCount%60===0)
{
  particles.push(new Particles(random(width/2-10, width/2+10), 10,10));
}





  drawSprites();
}