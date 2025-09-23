export type ResistorBand = {color: string, value: number};
export const bands: Array<ResistorBand> = [
    {color: 'black', value: 0},
    {color: 'brown', value: 1},
    {color: 'red', value: 2},
    {color: 'orange', value: 3},
    {color: 'yellow', value: 4},
    {color: 'green', value: 5},
    {color: 'blue', value: 6},
    {color: 'violet', value: 7},
    {color: 'grey', value: 8},
    {color: 'white', value: 9}
];

export function getBandValue(color: string): number|null
{
    let result = bands.filter((item => {
        return item.color === color
    }))


    if (result.length > 0) {
        let item = result.pop();
        return item ? item.value : null;
    }

    return null;
}

export function getBandColors(): Array<string>
{
    return bands.map(item => item.color);
}