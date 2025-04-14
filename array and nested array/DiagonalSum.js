function diagonalSum (arr){
    let rigthdigonaal = 0;
    let leftdigonal = 0;

    for(let i = 0; i < arr.length; i++){
        leftdigonal += arr[i][i];
        rigthdigonaal += arr[arr.length - 1 - i][i]
    }

    console.log(`${leftdigonal} ${rigthdigonaal}`);
    

}
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])