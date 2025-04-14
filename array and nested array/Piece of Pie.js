function pie (pieFlavorsArr, flavorOne, flavorTwo){

    let firstIndex = pieFlavorsArr.indexOf(flavorOne);
    
    
    let lastIndex = pieFlavorsArr.indexOf(flavorTwo);
   
    
  
    let result = pieFlavorsArr.slice(firstIndex, lastIndex + 1);
    return result;
 
}
pie(['Pumpkin Pie',

    'Key Lime Pie',
    
    'Cherry Pie',
    
    'Lemon Meringue Pie',
    
    'Sugar Cream Pie'],
    
    'Key Lime Pie',
    
    'Lemon Meringue Pie')