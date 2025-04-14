function breakfast() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 }, 
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },   
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function (command) {
        let [action, item, quantity] = command.split(" ");
        quantity = Number(quantity);

        switch (action) {
            case "restock": return restock(item, quantity);
            case "prepare": return prepare(item, quantity);
            case "report": return report();
            default: return "Error: Invalid command";
        }
    };

    function restock(microelement, quantity) {
        if (store.hasOwnProperty(microelement)) {
            store[microelement] += quantity;
            return "Success";
        } else {
            return `Error: Invalid microelement ${microelement}`;
        }
    }

    function prepare(recipe, quantity) {
        if (!recipes.hasOwnProperty(recipe)) {
            return `Error: recipe for ${recipe} does not exist`;
        }

        let requiredIngredients = recipes[recipe];
        let needed = {};

        
        for (let [ingredient, amountPerUnit] of Object.entries(requiredIngredients)) {
            let totalNeeded = amountPerUnit * quantity;
            if (store[ingredient] < totalNeeded) {
                return `Error: not enough ${ingredient} in stock`;
            }
            needed[ingredient] = totalNeeded;
        }

        
        for (let [ingredient, totalNeeded] of Object.entries(needed)) {
            store[ingredient] -= totalNeeded;
        }

        return "Success";
    }

    function report() {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
    }
}
