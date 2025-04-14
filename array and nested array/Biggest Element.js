function bigestElement(arr){

    let maxElement = -Infinity;

    for (let row of arr) {
        for (let element of row) {
            if (element > maxElement) {
                maxElement = element;
            }
        }
    }

    return maxElement;
     
}
    
console.log(bigestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))