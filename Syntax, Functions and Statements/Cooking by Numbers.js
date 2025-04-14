function cooking(num, command1, command2, command3, command4, command5){

    let result = [];

    let arr = [command1, command2, command3, command4, command5];


    let number = Number(num);


    for(let i = 0; i < arr.length; i++){
        switch (arr[i]) {
            case 'chop': 
            number = number / 2;
             result.push(number); 
             break;
            case 'dice': 
            number = Math.sqrt(number); 
            result.push(number); 
            break;
            case 'spice': number += 1; 
            result.push(number); 
            break;
            case 'bake': number = number * 3; 
            result.push(number); 
            break;
            case 'fillet': number = (number * 0.8).toFixed(1); 
            result.push(number); 
            break;

            default:
                console.log(`Invalid`);
                break;
        }

    }

    console.log(result.join('\n'));
    



}
cooking('9', 'dice', 'spice', 'chop', 'bake','fillet')
