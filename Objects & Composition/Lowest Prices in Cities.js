function slove(input){
// Създаваме празен обект, който на края ще съдържа резултата
    const result = {};
// Обхождаме всеки ред от масива 
    for (let line of input){
// Деструкторираме масива , след което всеки ред го разделяме по разделителя и използваме map and trim за да изтрием празното постранство
        const [town, product, price] = line.split('|').map(x => x.trim());

        if (result[product] === undefined){

            result[product] = {};

        }

        result[product][town] = Number(price);

    }


    for(let [product, towns] of Object.entries(result)){
        const sorted = Object.entries(towns).sort(
            (a, b) => a[1] - b[1]
        );

        const [town, price] = sorted[0];

        
        console.log(`${product} -> ${price} (${town})`);
        
        
    }




}
slove(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',
    
    'Sample Town | Peach | 1',
    
    'Sofia | Orange | 3',
    
    'Sofia | Peach | 2',
    
    'New York | Sample Product | 1000.1',
    
    'New York | Burger | 10'])