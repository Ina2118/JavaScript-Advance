function magicMatrix(matrix) {
   
    let totalSum = matrix[0].reduce((a, b) => a + b);

    
    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumRow += matrix[row][col]; 
            sumCol += matrix[col][row]; 
        }

        
        if (sumRow !== totalSum || sumCol !== totalSum) {
            return false;
        }
    }

    
    return true;
}

console.log(magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]))