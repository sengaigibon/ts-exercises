import { isPangram } from "../challenges/challenge-10";

describe("Figure out if a sentence is a pangram", () => {
    test("sentece is a pangram", () => {
        let sentence: string = "AbCdEfghiJKlmnOpqrstuVwxyz";
        let result: boolean = isPangram(sentence);
        expect(result).toBeTruthy();

        sentence = "The quick brown fox jumps over the lazy dog";
        result = isPangram(sentence);
        expect(result).toBeTruthy();
    });

    test("sentece is NOT a pangram", () => {
        let sentence: string = "AbCdEfghiJKlmnOpqrstuVwxy"; // z is missing
        let result: boolean = isPangram(sentence);
        expect(result).toBeFalsy();
    });
});