// Randomly generate Dungeons & Dragons characters.

// Your character's initial hitpoints are 10 + your character's constitution modifier. 
// You find your character's constitution modifier by subtracting 10 from your character's constitution, 
// divide by 2 and round down.

// Write a random character generator that follows the above rules.
// For example, the six throws of four dice may look like:
// 5, 3, 1, 6: You discard the 1 and sum 5 + 3 + 6 = 14, which you assign to strength.
// 3, 2, 5, 3: You discard the 2 and sum 3 + 5 + 3 = 11, which you assign to dexterity.
// 1, 1, 1, 1: You discard the 1 and sum 1 + 1 + 1 = 3, which you assign to constitution.
// 2, 1, 6, 6: You discard the 1 and sum 2 + 6 + 6 = 14, which you assign to intelligence.
// 3, 5, 3, 4: You discard the 3 and sum 5 + 3 + 4 = 12, which you assign to wisdom.
// 6, 6, 6, 6: You discard the 6 and sum 6 + 6 + 6 = 18, which you assign to charisma.
// Because constitution is 3, the constitution modifier is -4 and the hitpoints are 6.

const listOfAbilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

export function generateCharacter(): Record<string, number> {
    let abilities: Record<string, number> = {};

    listOfAbilities.forEach(name => { 
        abilities[name] = calculateScore();
    });

    abilities['constitution'] = Math.floor((abilities['constitution'] - 10) / 2);

    return abilities;
}

export const calculateScore = (): number => {
    let results = [];
    for (let times = 1; times <= 4; times++) {
        results.push(throwDice());
    }

    results.sort((a, b) => b - a); // sort descending
    results.pop();
    return results.reduce((previousVal, currentVal) =>  previousVal + currentVal, 0);
}

export const throwDice = (): number => {
    return Math.floor(Math.random() * 7);
}