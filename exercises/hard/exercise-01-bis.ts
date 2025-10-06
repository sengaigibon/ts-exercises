export class List {
    private values: any[] = [];

    public static create<T>(...values: T[]) {
        return new List(values);
    }

    public constructor(values: any[] = []) {
        this.values = values;
    }

    public forEach<T>(fn: (item: T) => void): void {
        for(const i of this.values) {
            fn(i);
        }
    }

    public append(list: List) {
        this.values = [...this.values, ...list.values];
    }

    public concatenate(...lists: List[]): void {
        for (const list of lists) {
            this.append(list);
        }
    }

    public reverse(): List {
        let reversed: any[] = [];

        for(const item of this.values) {
            reversed = [item, ...reversed];
        }
        
        return new List(reversed);
    }

    public filter<T>(predicate: (item: T) => boolean): List {
        let filtered: any[] = [];
        for(const item of this.values) {
            if (predicate(item)) {
               filtered = [...filtered, item];
            }
        }

        return new List(filtered);
    }

    public map<T>(func: (item: T) => any): List {
        let mapped: T[] = [];
        for(const item of this.values) {
               mapped = [...mapped, func(item)];
        }

        return new List(mapped);
    }

    public foldl<T>(func: (accumulator: T, value: T) => T, initial: T): T {
        let acc: T = initial;

        for(const item of this.values) {
            acc = func(acc, item);
        }
        
        return acc;
    }

    public foldr<T>(func: (accumulator: T, num: T) => T, initial: T): T {
        let acc: T = initial;

        for(let i = this.values.length - 1; i >= 0; i--) {
            acc = func(acc, this.values[i]);
        }
        
        return acc;
    }

    public length = () => this.values.length;

    public getValues(): any {
        return this.values;
    }
}