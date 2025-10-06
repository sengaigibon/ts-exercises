// Given a string representing a matrix of numbers, return the rows and columns of that matrix.

export function printMatrix(matrix: string) {
    let tmpRows = matrix.split(/\r?\n|\r|\n/g);
    let rows: string[][] = [];
    rows.push(tmpRows[0].split(' '));
    rows.push(tmpRows[1].split(' '));
    rows.push(tmpRows[2].split(' '));
    
    // print rows
    for (let i = 0; i < rows.length; i++) {
        console.log(rows[i].join(', '));
    }

    for (let i = 0; i < rows.length; i++) {
        let column: string[] = [];
        for (let j = 0; j < rows[i].length; j++) {
            column.push(rows[j][i]);
        }
        console.log(column.join(', '));
    }
}