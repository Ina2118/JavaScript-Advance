function twoCriteria(arr){

    arr.sort((a, b) => {
        if(a.length !== b.length){
            return a.length - b.length;
        }
        // If lengths are equal, compare alphabetically (case-insensitive)
        return a.toLowerCase().localeCompare(b.toLowerCase());

    });

    console.log(arr.join('\n'));
    
   
    
}

twoCriteria(['test', 'Deny', 'omen', 'Default'])
