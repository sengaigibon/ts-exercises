import { printMatrix } from '../exercises/medium/excercise-12';

describe ('prints out rows and columns of a given matrix as string', () => {
    test('print matrix', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        let matrix: string = `2 3 4
9 8 7
5 1 0
`;

        printMatrix(matrix);
        
        expect(consoleSpy).toHaveBeenCalledWith('2, 3, 4');
        expect(consoleSpy).toHaveBeenCalledWith('9, 8, 7');
        expect(consoleSpy).toHaveBeenCalledWith('5, 1, 0');
        expect(consoleSpy).toHaveBeenCalledWith('2, 9, 5');
        expect(consoleSpy).toHaveBeenCalledWith('3, 8, 1');
        expect(consoleSpy).toHaveBeenCalledWith('4, 7, 0');

        consoleSpy.mockRestore();
    });
});