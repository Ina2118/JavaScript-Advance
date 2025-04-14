function slove(num1, num2){
    let gcd;
 
    if (num1 === 0) {
        gcd = num2;
    } else if (num2 === 0) {
        gcd = num1;
    } else {
        while (num1 !== num2) {
            if (num1 > num2) {
                num1 -= num2;
            } else {
                num2 -= num1;
            }
        }
        gcd = num1;
    }
 
     console.log(gcd);
     
}
slove(2154, 458)