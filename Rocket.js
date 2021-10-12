class Rocket {
    constructor(child) {
        this.position = createVector(width/2, height);
        this.velocity = createVector();
        this.acceleration = createVector();
        
        this.completed = false;
        this.crashed = false;

        this.fitness = 0;

        if (child){
            this.dna = child;
        }else{
            this.dna = new DNA();
        }

        this.count = 0;

        //target position
        this.target = createVector(width/2, 20);

        //obstical position
        this.rect_height = 20;
        this.rect_width = 250;
        this.pos_x = 100;
        this.pos_y = 250;
    }

    create() {
        push();
        noStroke();
        fill(0);
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode("center");
        rect(0, 0, 50, 10);
        pop();
    }

    update() {
        if (dist(this.target.x, this.target.y, this.position.x, this.position.y)<10){
            this.completed = true;
            this.position = this.target.copy();
        }

        if ((this.position.x>this.pos_x && this.position.x<this.pos_x+this.rect_width) && (this.position.y>this.pos_y && this.position.y<this.pos_y+this.rect_height)) {
            console.log('here');
            this.crashed = true;
        }

        if ((this.position.x<0 || this.position.x>width) || (this.position.y<0 || this.position.y>height)){
            this.crashed = true;
        }

        if (!this.completed && !this.crashed){

            this.applyForce(this.dna.genes[this.count]);
            this.count++;
            this.position.add(this.velocity);
            this.velocity.add(this.acceleration);
            this.acceleration.mult(0);
        }
        
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    calculateFitness() {
        let distance = dist(this.position.x, this.position.y, this.target.x, this.target.y);
        this.fitness = map(distance, 0, width, width, 0);

        if(this.completed) {
            this.fitness *= 10;
        }

        if(this.crashed) {
            this.fitness /= 100;
        }
    }

}