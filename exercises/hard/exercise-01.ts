export class List {
    private numbers: number[] = [];
    public length: number = 0;

    public static create(...numbers: number[]) {
        return new List(numbers);
    }

    public constructor(numbers: number[] = []) {
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

    public getItemAt(index: number): number | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        return this.numbers[index];
    }


    public append(list: List): void {
        for (let i = 0; i < list.length; i++) {
            let item = list.getItemAt(i);
            this.numbers[this.length++]= item ? item : 0;
        }
    }

    public concatenate(...lists: List[]): void {
        for (let i = 0; i < lists.length; i++) {
            this.append(lists[i]);
        }
    }

    public reverse(): List {
        let nums: number[] = [];
        let j: number = 0;
        for(let i = this.length - 1; i >= 0; i--) {
            nums[j++] = this.numbers[i];
        }
        
        return new List(nums);
    }

    public filter(predicate: (num: number) => boolean): List {
        let nums: number[] = [];
        let j: number = 0;
        for (let i = 0; i < this.numbers.length; i++) {
            if (predicate(this.numbers[i])) {
                nums[j++] = this.numbers[i];
            }
        }

        return new List(nums);
    }

    public map(func: (num: number) => number): List {
        let nums: number[] = [];
        let j: number = 0;
        for (let i = 0; i < this.numbers.length; i++) {
            nums[j++] = func(this.numbers[i]);
        }

        return new List(nums);
    }

    public foldl(func: (accumulator: number, num: number) => number): number {
        let acc: number = 0;

        for (let i = 0; i < this.numbers.length; i++) {
            acc = func(acc, this.numbers[i]);
        }
        
        return acc;
    }

    public foldr(func: (accumulator: number, num: number) => number): number {
        let acc: number = 0;

        for(let i = this.length - 1; i >= 0; i--) {
            acc = func(acc, this.numbers[i]);
        }
        
        return acc;
    }
}