function isValidPath(grid, x, y, visited) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && !visited[x][y];
}

function findPath(grid, visited) {
    const path = [];
    const letters = [];
    path.push("@");
    let row = 0, column = 1;
    while (grid[row][column] !== 's') {
        const currentChar = grid[row][column];
        if (currentChar !== 's' && currentChar.toUpperCase() != currentChar.toLowerCase()) {
            letters.push(currentChar);
        }
        path.push(currentChar);
        visited[row][column] = true;
        if (isValidPath(grid, row + 1, column, visited)) row++;
        else if (isValidPath(grid, row - 1, column, visited)) row--;
        else if (isValidPath(grid, row, column + 1, visited)) column++;
        else if (isValidPath(grid, row, column - 1, visited)) column--;
    }
    path.push('s');
    console.log("Path " + path);
    console.log("Letters " + letters);
}

const grid = [
    ['>', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['s', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+']
];

const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        visited[i][j] = grid[i][j] === ' ';
    }
}

visited[0][0] = true;

findPath(grid, visited);
