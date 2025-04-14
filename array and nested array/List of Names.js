function sortNames(arr){

    let sortedArr = arr.sort((a, b) => a.localeCompare(b));

     // Print each name with a number
    sortedArr.forEach((arr, index) => {
        console.log(`${index + 1}.${arr}`)
        
    });
 

}
sortNames(["John",

    "Bob",
    
    "Christina",
    
    "Ema"])