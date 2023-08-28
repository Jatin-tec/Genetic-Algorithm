var population;
var count = 0;
var lifeP, fitness, gens;
var target;
var genrations=1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  population = new Population();
  target = createVector(width/2, 40);
}

var maxFitness = 0;

function draw() {
  background(220);
  noStroke();
  fill(0);
  ellipse(target.x, target.y, 50, 50);

  rect(100, 250, 250, 20);

  fill(255);

  rect(10, 10, 250, 80)
  fill(0);
  textSize(16);

  population.run();

  // Display text inside the box
  text("Frames: " + count, 20, 50);
  count++;
  text("Generation: " + genrations, 20, 30);
  text("Fitness: " + maxFitness, 20, 70);
  
  if(count>=350) {    
    maxFitness= population.evaluate();
    population.naturalSelection();
    count=0;
    if(maxFitness!==5000){
    genrations += 1;
    }
  }
}
