function oddPosition(input){
  
    let result = input
    .filter((el, index) => index % 2 !== 0)
    .map((el) => el * 2)
    .reverse()

    return result.join(" ");

}
console.log(oddPosition([10, 15, 20, 25]))