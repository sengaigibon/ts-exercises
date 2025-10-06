export class List {
    private numbers: number[] = [];

    public static create(...numbers: number[]) {
        return new List(numbers);
    }

    public constructor(numbers: number[]) {
        this.numbers = numbers;
    }

    public forEach(operation: (num: number) => void): void {
        for (let i = 0; i < this.numbers.length; i++) {
            operation(this.numbers[i]);
        }
    }
}