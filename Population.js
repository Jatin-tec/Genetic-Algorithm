class Population {
    constructor() {
        this.rockets = [];
        this.populationSize = 50;
        
        for (var i=0; i<this.populationSize; i++){
            this.rockets[i] = new Rocket();
        }
    }

    run () {
        for (var i=0; i<this.populationSize; i++){
            this.rockets[i].create();
            this.rockets[i].update();
        }
    }

    evaluate() {
        let maxFitness=0;

        for (let j = 0; j < this.rockets.length; j++) {
            this.rockets[j].calculateFitness();
            if (this.rockets[j].fitness>maxFitness) {
                maxFitness = this.rockets[j].fitness;
            }
        }

        for (let i = 0; i < this.rockets.length; i++) {
            this.rockets[i].fitness /= maxFitness; 
        }

        
        this.matingPool = [];
        for (let i = 0; i < this.rockets.length; i++) {
            let num = this.rockets[i].fitness*100;
            for (let j = 0; j < num; j++) {
                this.matingPool.push(this.rockets[i]);
            }
        }
        return maxFitness;
    }

    naturalSelection() {
        let new_rockets = [];

        for (let i = 0; i < this.rockets.length; i++) {
            let parentA = random(this.matingPool).dna;
            let parentB = random(this.matingPool).dna;
    
            let child = parentA.crossOver(parentB);
            child.mutation();
            new_rockets[i] = new Rocket(child);
        }
        this.rockets = new_rockets;
    }

}