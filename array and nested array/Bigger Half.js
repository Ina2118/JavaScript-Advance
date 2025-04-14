function slove(arr) {
    // сортираме масива във възходящт ред 
    arr.sort((a, b) => a - b);

    // взимаме втората  половина от масива
    let halfLength = Math.floor(arr.length / 2);

    console.log(arr.splice(halfLength));
     
}
slove([3, 19, 14, 7, 2, 19, 6])



function solve(input) {
    input.sort((a, b) => a - b);
    const halfLength = Math.floor(input.length / 2);
  
    console.log(input.splice(halfLength));
     
  }