// Calculate the points scored in a single toss of a Darts game.

// Darts is a game where players throw darts at a target.

// In our particular instance of the game, the target rewards 4 different amounts of 
// points, depending on where the dart lands:

// Our dart scoreboard with values from a complete miss to a bullseye

// If the dart lands outside the target, player earns no points (0 points).
// If the dart lands in the outer circle of the target, player earns 1 point.
// If the dart lands in the middle circle of the target, player earns 5 points.
// If the dart lands in the inner circle of the target, player earns 10 points.
// The outer circle has a radius of 10 units (this is equivalent to the total 
// radius for the entire target), the middle circle a radius of 5 units, and the 
// inner circle a radius of 1. Of course, they are all centered at the same point — 
// that is, the circles are concentric defined by the coordinates (0, 0).

// Given a point in the target (defined by its Cartesian coordinates x and y, 
// where x and y are real), calculate the correct score earned by a dart landing 
// at that point.

export function calculateScore(x: number, y: number): number {
    let radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    switch(true) {
        case radius <= 1:
            return 10;
        case radius <= 5:
            return 5;
        case radius <= 10:
            return 1;
    }

    return 0;
}