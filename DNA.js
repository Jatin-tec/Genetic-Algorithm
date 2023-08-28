class DNA {
    constructor(genes) {
        if(genes){
            this.genes=genes
        }else{
            this.lifeSpan = 350;
            this.genes = [];
            for(var i=0; i<this.lifeSpan; i++){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.1);
            }
        }
    }

    crossOver(partner) {
        let new_genes = [];
        let mid = floor(random(this.genes.length));

        for (let i = 0; i < this.genes.length; i++) {
            if (i<mid){
                new_genes.push(this.genes[i]);
            }else{
                new_genes.push(partner.genes[i]);
            }
        }
        return new DNA(new_genes);
    }

    
    mutation() {
        for (let i = 0; i < this.genes.length; i++) { 
            if(random(1)<0.01){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.1);
            }
        }
    }
}