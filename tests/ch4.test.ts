import { getResistorValue } from "../exercises/easy/challenge-4";

const orange: string = 'orange';
const black: string = 'black';
const red: string = 'red';
const yellow: string = 'yellow';
const blue: string = 'blue';
const violet: string = 'violet';
const grey: string = 'grey';

describe ("A challenge about resistor values", () => {
    test("to look up the numerical value associated with a set of three color bands", () => {
        let result: string = getResistorValue(orange, orange, black);
        expect(result).toBe("33 ohms");

        result = getResistorValue(orange, orange, 'brown');
        expect(result).toBe("330 ohms");

        result = getResistorValue(orange, orange, red);
        expect(result).toBe("3300 ohms");
    });

    test("when we get to larger resistors, a metric prefix is used to indicate a larger magnitude of ohms", () => {
        let result: string | null = getResistorValue(orange, orange, orange);
        expect(result).toBe("33 kilohms");

        result = getResistorValue(orange, orange, yellow);
        expect(result).toBe("330 kilohms");

        result = getResistorValue(yellow, red, yellow);
        expect(result).toBe("420 kilohms");

        result = getResistorValue(orange, orange, yellow);
        expect(result).toBe("330 kilohms");

        result = getResistorValue(orange, orange, blue);
        expect(result).toBe("33 megaohms");

        result = getResistorValue(orange, orange, violet);
        expect(result).toBe("330 megaohms");

        result = getResistorValue(orange, orange, grey);
        expect(result).toBe("3300 megaohms");

        result = getResistorValue(orange, orange, 'white');
        expect(result).toBe("33 gigaohms");
    });

    test("failure cases", () => {
        let result: string | null = getResistorValue(orange, orange, 'pink');
        expect(result).toBe("NaN");

        result = getResistorValue('rainbow', orange, 'white');
        expect(result).toBe("NaN");

        result = getResistorValue(orange, 'typo', 'white');
        expect(result).toBe("NaN");
    });
});