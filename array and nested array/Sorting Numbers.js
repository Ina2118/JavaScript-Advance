function sortingArr(arr){
    const sortedArr = arr.sort((b, a) => b - a);

    let resultArr = [];

    while (sortedArr.length > 0){
        const firstElement = sortedArr.shift();
        resultArr.push(firstElement);

        const lastElement = sortedArr.pop();
        resultArr.push(lastElement);

    }

    return resultArr;

}
sortingArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
console.log(sortingArr([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]