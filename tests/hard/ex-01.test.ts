import { List} from "../../exercises/hard/exercise-01";

describe('Implement basic list operations', () => {
    test('fore each loop', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        const list = List.create(1, 2, 5)
        list.forEach((item) => console.log(item))

        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(5);

        consoleSpy.mockRestore();
    })
}) 