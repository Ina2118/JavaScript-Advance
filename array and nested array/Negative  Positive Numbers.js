function slove(arr){
    let result  = [];

    for (const number of arr) {  

        if (number < 0){
            result.unshift(number);

        }else {
            result.push(number);
        }
    }

    for (const number of result) {
        console.log(number);
        
        
    }

}
slove([7, -2, 8, 9])