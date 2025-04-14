function evenPosition (input){

    let result = "";

   for (let i = 0; i < input.length; i++) {
    const element = input[i];
    
    
    if (i % 2 === 0){
        result += `${element} `;
    }
   }

   console.log(result);

}
evenPosition (['20', '30', '40', '50', '60'])