import { isLeapYear } from "../exercises/easy/challenge-5";

describe ("Determine whether a given year is a leap year.", () => {
    test("Check if given year is leap or not", () => {
        expect(isLeapYear(1976)).toBeTruthy;
        expect(isLeapYear(2000)).toBeTruthy;
        expect(isLeapYear(2004)).toBeTruthy;
        expect(isLeapYear(2020)).toBeTruthy;
        expect(isLeapYear(2024)).toBeTruthy;
        expect(isLeapYear(2028)).toBeTruthy;
        expect(isLeapYear(2300)).toBeTruthy;
        expect(isLeapYear(2400)).toBeTruthy;

        expect(isLeapYear(1977)).toBeFalsy;
        expect(isLeapYear(1800)).toBeFalsy;
        expect(isLeapYear(1900)).toBeFalsy;
        expect(isLeapYear(2100)).toBeFalsy;
        expect(isLeapYear(2200)).toBeFalsy;
        expect(isLeapYear(2300)).toBeFalsy;
    });
});