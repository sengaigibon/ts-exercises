import { oneFor } from "../exercises/easy/challenge-2";

describe ("Solves challenge 2", () => {
    test("given a name, returns 'One for {name}, one for me'", () => {
        let name: string = 'Javier';
        let result: string = oneFor(name);
        expect(result).toBe(`One for ${name}, one for me`)
    });

    test("given empty name, returns 'One for you, one for me'", () => {
        let name: string = '';
        let result: string = oneFor(name);
        expect(result).toBe(`One for you, one for me`)
    });

    test("given no name, returns 'One for you, one for me'", () => {
        let result: string = oneFor();
        expect(result).toBe(`One for you, one for me`)
    });
});