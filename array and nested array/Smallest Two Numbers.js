function slove(arr){

    let sortedArray = arr.sort((a, b) => a - b).slice(0, 2);

    let smallest = sortedArray[0];
    let secondSmallest = sortedArray[1];
    
    
    return [smallest, secondSmallest];
   
}
    
console.log(slove([30, 15, 50, 5]))