# Genetic Algorithm for Rocket Population to Reach a Target with Obstacle Avoidance

This project demonstrates a genetic algorithm that evolves a population of rockets to reach a target while avoiding an obstacle. Each rocket in the population has DNA as vectors of magnitude 0.1. The algorithm starts with a population of 300 rockets and selects the two fittest rockets for the next generation. The new population is formed by performing a crossover between the selected rockets, and a mutation rate of 0.01% is applied to the DNA of the offspring. The fitness of each rocket is calculated based on its distance from the target.

## Getting Started

To run the simulation, clone this repository to your local machine and open the `index.html` file in your web browser. This should launch the simulation, and you should see a population of rockets moving towards a target while avoiding an obstacle.

## Dependencies

This project is implemented in JavaScript and uses the p5.js library for visualization. You don't need to install any additional dependencies to run the simulation.

## How to Use

Once you have opened the simulation, you can watch the rockets evolve and try to reach the target. The simulation will run until one of the rockets reaches the target, or until a maximum number of generations is reached.

You can also modify the simulation parameters by editing the `sketch.js` file. For example, you can change the size and position of the obstacle, the mutation rate, and the fitness function.

## Acknowledgments

This project was inspired by the classic [Smart Rockets](https://www.youtube.com/watch?v=bGz7mv2vD6g) simulation by Daniel Shiffman.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.