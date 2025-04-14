function fruit (a, b, c){
    let fruitType = a;
    let weight = Number(b) / 1000;
    let price = Number (c);

    let money = weight * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);
    


}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35)