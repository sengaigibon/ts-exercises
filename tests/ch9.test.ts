import { calculateScore } from '../exercises/easy/challenge-9';

describe('Calculate the points scored in a single toss of a Darts game, given an x,y point in the target', () => {
    test('dart lands outside the target', () => {
        let score: number = calculateScore(10, 5);
        expect(score).toBe(0);

        score = calculateScore(0, 11);
        expect(score).toBe(0);

        score = calculateScore(-8, 8);
        expect(score).toBe(0);

        score = calculateScore(12, 0);
        expect(score).toBe(0);
    });

    test('dart lands in the outer circle of the target', () => {
        let score: number = calculateScore(6, 0);
        expect(score).toBe(1);

        score = calculateScore(4, 4);
        expect(score).toBe(1);

        score = calculateScore(-3, 6);
        expect(score).toBe(1);

        score = calculateScore(7, 2);
        expect(score).toBe(1);
    });

    test('dart lands in the middle circle of the target', () => {
        let score: number = calculateScore(2, 0);
        expect(score).toBe(5);

        score = calculateScore(1, 2);
        expect(score).toBe(5);

        score = calculateScore(-1.5, 2);
        expect(score).toBe(5);

        score = calculateScore(3, 1);
        expect(score).toBe(5);
    });

    test('dart lands in the inner circle of the target', () => {
        let score: number = calculateScore(0, 0);
        expect(score).toBe(10);

        score = calculateScore(0.5, 0.5);
        expect(score).toBe(10);
        
        score = calculateScore(-0.3, 0.4);
        expect(score).toBe(10);

        score = calculateScore(0.6, -0.6);
        expect(score).toBe(10);

        score = calculateScore(0, 1);
        expect(score).toBe(10);

        score = calculateScore(-1, 0);
        expect(score).toBe(10);
    });
});