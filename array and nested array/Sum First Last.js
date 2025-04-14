function sumFirstLast (arr){
    let firstElementStr = arr[0];
    let firstEl = Number(firstElementStr);
    let latstElementStr = arr[arr.length - 1];
    let lastEl = Number(latstElementStr);
    
    let sum = firstEl + lastEl;
    console.log(sum);
    
}
sumFirstLast(['5', '10'])