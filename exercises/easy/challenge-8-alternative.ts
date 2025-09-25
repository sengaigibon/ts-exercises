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

export class DnDCharacter {

    private strength: number;
    private dexterity: number;
    private constitution: number;
    private intelligence: number;
    private wisdom: number;
    private charisma: number;
    private hitpoints: number;

    public constructor() {
        this.strength = DnDCharacter.calculateScore();
        this.dexterity = DnDCharacter.calculateScore();
        this.constitution = Math.floor((DnDCharacter.calculateScore() - 10) / 2);;
        this.intelligence = DnDCharacter.calculateScore();
        this.wisdom = DnDCharacter.calculateScore();
        this.charisma = DnDCharacter.calculateScore();
        this.hitpoints = 10 + this.constitution;
    }

    public static calculateScore = (): number => {
        let results = [];
        for (let times = 1; times <= 4; times++) {
            results.push(this.throwDice());
        }

        results.sort((a, b) => b - a); // sort descending
        results.pop();
        return results.reduce((previousVal, currentVal) =>  previousVal + currentVal, 0);
    }

    public static throwDice = (): number => {
        return Math.floor(Math.random() * 7);
    }

    public getStrength(): number {
        return this.strength;
    }

    public getDexterity(): number {
        return this.dexterity;
    }

    public getConstitution(): number {
        return this.constitution;
    }

    public getIntelligence(): number {
        return this.intelligence;
    }

    public getWisdom(): number {
        return this.wisdom;
    }

    public getCharisma(): number {
        return this.charisma;
    }

    public getHitpoints(): number {
        return this.hitpoints;
    }
}