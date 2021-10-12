var population;
var count = 0;
var lifeP, fitness, gens;
var target;
var genrations=1;

function setup() {
  createCanvas(500, 500);
  population = new Population();
  lifeP = createP();
  fitness = createP();
  gens = createP();
  target = createVector(width/2, 20);
}

function draw() {
  background(220);
  noStroke();
  fill(0);
  ellipse(target.x, target.y, 50, 50);

  rect(100, 250, 250, 20);

  population.run();
  lifeP.html(`Frames: ${count}`);
  count++;
  if(count>=300) {
    var maxFitness=population.evaluate();
    population.naturalSelection();
    fitness.html(`Maximum Fitness: ${maxFitness}`);
    count=0;
    if(maxFitness!==5000){
    genrations += 1;
    }
  }
  gens.html(`Genrations: ${genrations}`)
}
