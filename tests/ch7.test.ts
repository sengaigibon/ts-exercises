import { getAge, getAge2, secondsInEarthYear } from "../exercises/easy/challenge-7";

describe ("Determine the age of an earthling on other planets.", () => {
    test("Given an age in seconds, calculate the age on a given planet", () => {

        expect(getAge(2 * secondsInEarthYear, 'Earth')).toBe(2);
        expect(getAge(2 * secondsInEarthYear, 'Mercury')).toBe(8.30);

        expect(getAge(40 * secondsInEarthYear, 'Earth')).toBe(40);
        expect(getAge(40 * secondsInEarthYear, 'Mercury')).toBe(166.08);
        expect(getAge(40 * secondsInEarthYear, 'Venus')).toBe(65.02);
        expect(getAge(40 * secondsInEarthYear, 'Mars')).toBe(21.27);
        expect(getAge(40 * secondsInEarthYear, 'Jupiter')).toBe(3.37);
        expect(getAge(40 * secondsInEarthYear, 'Saturn')).toBe(1.36);
        expect(getAge(40 * secondsInEarthYear, 'Uranus')).toBe(0.48);
        expect(getAge(40 * secondsInEarthYear, 'Neptune')).toBe(0.24);

        expect(getAge2(2 * secondsInEarthYear, 'earth')).toBe(2);
        expect(getAge2(2 * secondsInEarthYear, 'mercury')).toBe(8.30);

        expect(getAge2(40 * secondsInEarthYear, 'earth')).toBe(40);
        expect(getAge2(40 * secondsInEarthYear, 'mercury')).toBe(166.08);
        expect(getAge2(40 * secondsInEarthYear, 'venus')).toBe(65.02);
        expect(getAge2(40 * secondsInEarthYear, 'mars')).toBe(21.27);
        expect(getAge2(40 * secondsInEarthYear, 'jupiter')).toBe(3.37);
        expect(getAge2(40 * secondsInEarthYear, 'saturn')).toBe(1.36);
        expect(getAge2(40 * secondsInEarthYear, 'uranus')).toBe(0.48);
        expect(getAge2(40 * secondsInEarthYear, 'neptune')).toBe(0.24);
    });

    test("Failure cases", () => {

        expect(getAge(100000000, '')).toBe(0);
        expect(getAge(100000000, 'Pluto')).toBe(0);

        expect(getAge2(100000000, '')).toBe(0);
        expect(getAge2(100000000, 'Pluto')).toBe(0);
    });
});