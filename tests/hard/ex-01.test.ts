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
    });
}) 