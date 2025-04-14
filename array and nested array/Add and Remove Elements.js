function addAndRemove(arr){

    let number = 1;
    let result = [];

    arr.forEach(el =>{
        if(el === 'add'){

            result.push(number)

        } else if (el === 'remove'){
            result.pop();
        }

        number++;
    });

    if (result.length >= 1){
        console.log(result.join('\n'));
    }else{
        console.log('Empty');
        
    }


}
addAndRemove(['add',

    'add',
    
    'add',
    
    'add'])