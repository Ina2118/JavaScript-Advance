function slove(input){
    let neighbors = 0;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (row < input.length-1) {
                if (input[row][col] == input[row + 1][col]) {
                    neighbors++;
                }
            }
            if(col<input[row].length) {
                if (input[row][col] == input[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}

console.log(slove([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]))