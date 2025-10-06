import { List} from "../../exercises/hard/exercise-01";

describe('Implement basic list operations', () => {
    test('fore each loop', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        const list = List.create(1, 2, 5);
        list.forEach((item) => console.log(item));

        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(5);

        consoleSpy.mockRestore();
    });

    test('append: given two lists, add all items in the second list to the end of the first list', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        const list1 = List.create(1, 2, 5);
        const list2 = List.create(4, 3, 0);

        list1.append(list2);

        list1.forEach((item) => console.log(item));

        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(5);
        expect(consoleSpy).toHaveBeenCalledWith(4);
        expect(consoleSpy).toHaveBeenCalledWith(3);
        expect(consoleSpy).toHaveBeenCalledWith(0);

        consoleSpy.mockRestore();
    });

    test('concatenate: given a series of lists, combine all items in all lists into one flattened list', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        const list1 = List.create(4, 3, 0);
        const list2 = List.create(1, 2, 5);
        const list3 = List.create(11, 13, 20, 45);
        const list4 = List.create(90, 100, 400, 886);

        const flattened = new List();
        flattened.concatenate(list1, list2, list3, list4);

        flattened.forEach((item) => console.log(item));

        expect(consoleSpy).toHaveBeenCalledWith(4);
        expect(consoleSpy).toHaveBeenCalledWith(3);
        expect(consoleSpy).toHaveBeenCalledWith(0);
        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(5);
        expect(consoleSpy).toHaveBeenCalledWith(11);
        expect(consoleSpy).toHaveBeenCalledWith(13);
        expect(consoleSpy).toHaveBeenCalledWith(20);
        expect(consoleSpy).toHaveBeenCalledWith(45);
        expect(consoleSpy).toHaveBeenCalledWith(90);
        expect(consoleSpy).toHaveBeenCalledWith(100);
        expect(consoleSpy).toHaveBeenCalledWith(400);
        expect(consoleSpy).toHaveBeenCalledWith(886);

        consoleSpy.mockRestore();
    });

    test('length: given a list, return the total number of items within it', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        const list1 = List.create(4, 3, 0);
        const list2 = List.create(1, 2, 5);
        const list3 = List.create(11, 13, 20, 45);
        const list4 = List.create(90, 100, 400, 886);

        const flattened = new List();
        flattened.concatenate(list1, list2, list3, list4);

        expect(flattened.length).toBe(14);
        consoleSpy.mockRestore();
    });

    test('reverse: given a list, return a list with all the original items, but in reversed order', () => {
        const list = List.create(90, 100, 400, 886);
        const reversed = list.reverse();
        expect(reversed.getNumbers()).toStrictEqual([886, 400, 100, 90]);
    });

    test('filter: given a predicate and a list, return the list of all items for which predicate(item) is True', () => {
        const list = List.create(90, 100, 400, 886, 8, 124, 14);
        let filtered = list.filter(num => num > 100);
        expect(filtered.getNumbers()).toStrictEqual([400, 886, 124])

        filtered = list.filter(num => num < 100);
        expect(filtered.getNumbers()).toStrictEqual([90, 8, 14]);
    });

    test('map: given a function and a list, return the list of the results of applying function(item) on all items', () => {
        const list = List.create(90, 100, 400, 886);
        let modified = list.map(num => num / 2);
        expect(modified.getNumbers()).toStrictEqual([45, 50, 200, 443]);

        modified = list.map(function(num: number) {
            if (num < 300) {
                return num * 2;
            }
            return num / 2;
        });
        expect(modified.getNumbers()).toStrictEqual([180, 200, 200, 443]);
    });

    test('foldl: given a function, a list, and initial accumulator, fold (reduce) each item into the accumulator from the left', () => {
        let list = List.create(1, 2, 3, 4);
        let result = list.foldl((acc, num) => acc + num);
        expect(result).toBe(10);

        list = List.create(1, 2, 3, -4);
        result = list.foldl((acc, num) => acc - num);
        expect(result).toBe(-2);
    });

    test('foldr: given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator from the right', () => {
        let list = List.create(1, 2, 3, 4);
        let result = list.foldl((acc, num) => acc - num);
        expect(result).toBe(-10);
    });
}) 