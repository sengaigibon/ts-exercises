import { bands, getBandColors, getBandValue, ResistorBand } from "../challenges/challenge-3";

describe ("A challenge about resistors", () => {
    test("to look up the numerical value associated with a particular color band", () => {
        let result: number | null;

        bands.forEach(item => {
            result = getBandValue(item.color);
            expect(result).toBe(item.value);
        })
    });

    test("to list the different band colors", () => {
        let allBands: Array<string> = getBandColors();
        let result;
        bands.forEach(band => {
            result = allBands.filter((color => {
                return color === band.color
            }))

            expect(result).toHaveLength(1);
        });
    });
});