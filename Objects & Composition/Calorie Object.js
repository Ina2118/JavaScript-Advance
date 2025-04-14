function slove(input){
    let obj = {};

    for(let i = 0; i < input.length; i +=2 ){
        let food = input[i];

        let calories = input[i + 1];

        calories = Number(calories);

        obj[food] = calories;
    }

    return obj;
}

console.log(slove(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52']))