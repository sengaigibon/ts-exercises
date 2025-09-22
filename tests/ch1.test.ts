import type { HelloWorld } from "../challenges/challenge-1"


describe ('Challenge 1 - type check', () => {
    test('should pass if type is string', () => {
        const value: HelloWorld = 'hi world!';
        expect(typeof value).toBe('string');
    });
});