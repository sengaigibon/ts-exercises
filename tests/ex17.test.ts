import { find } from "../exercises/medium/excercise-17";

// Implement a binary search algorithm.

describe('Binary search algorithm', () => {
    test('given a list, find a number', () => {
        let list: number[] = [4, 34, 12, 1, 23, 98, 22, 100, 11, 77, 9, 2, 29, 200, 8, 11, 22];

        expect(find(list, 34)).toBe(34);
    });

    test('given a list, dont find a number', () => {
        let list: number[] = [4, 34, 12, 1, 23, 98, 22, 100, 11, 77, 9, 2, 29, 200, 8, 13, 22];

        expect(find(list, 10)).toBeNull();
    });
});