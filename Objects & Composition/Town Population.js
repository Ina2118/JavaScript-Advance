function population (input){

    const townRegistry = {};

   for (const line of input) {
    const [town, population] = line.split("<->");
    
    if(!townRegistry[town]){
        townRegistry[town] = 0;
    }

    townRegistry[town] += Number(population);
    
   }

   for (const town in townRegistry) {
    const l = townRegistry[town];
    console.log(`${town}: ${townRegistry[town]}`);
    
  
   }
   
    
}
population(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',
    
    'Jerusalem <-> 2352344',
    
    'Mexico City <-> 23401925',
    
    'Istanbul <-> 1000'])