import { getBandValue } from "./challenge-3";

export function getResistorValue(firstColorBand: string, secondColorBand: string, thirdColorBand: string): string {
    let firstDigit: string|undefined = getBandValue(firstColorBand)?.toString();
    let secongDigit: string|undefined = getBandValue(secondColorBand)?.toString();
    let multiplier: number|null = getBandValue(thirdColorBand);

    if (typeof(firstDigit) === 'undefined' || typeof(secongDigit) === 'undefined' || multiplier === null) {
        return 'NaN';
    }

    let prefix: string = '';
    switch(true) {
        case multiplier < 3:
            break;
        case multiplier < 6 || multiplier - 3 === 0:
            prefix = 'kil';
            multiplier -= 3
            break;
        case multiplier < 9 || multiplier - 6 === 0:
            prefix = 'mega';
            multiplier -= 6
            break;
        case multiplier < 12 || multiplier - 9 === 0:
            prefix = 'giga';
            multiplier -= 9
            break;
        default:
            return 'NaN';
    }

    let resistanceValue: number = parseInt(firstDigit + secongDigit) * Math.pow(10, multiplier);

    return resistanceValue.toString() + ` ${prefix}ohms`;
}