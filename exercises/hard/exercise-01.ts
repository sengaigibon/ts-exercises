export class List {
    private numbers: number[] = [];
    private length: number = 0;

    public static create(...numbers: number[]) {
        return new List(numbers);
    }

    public constructor(numbers: number[]) {
        this.numbers = numbers;
        this.length = numbers.length;
    }

    public forEach(operation: (num: number) => void): void {
        for (let i = 0; i < this.numbers.length; i++) {
            operation(this.numbers[i]);
        }
    }

    public getNumbers(): number[] {
        return this.numbers;
    }


    public append(toAppend: List): void {
        let nums: number[] = toAppend.getNumbers();
        for (let i = 0; i < nums.length; i++) {
            this.numbers[this.length++]= nums[i];
        }
    }
}