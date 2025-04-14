//Това решение е правилно, но не се поддържа от juge
function editElement(elemnt, match, replacer) {
    //debugger; така можем да дебъгваме в браузера
    // Достъпваме съдържанието на елемента и проверяваме дали има съвпадение
    if(elemnt.textContent.includes(match)){
        //При съвпадение реплайсваме match-ча с replace-ра
        elemnt.textContent = elemnt.textContent.replace(match, replacer);
    }
}

//Втори начин , защото judge не подържа дадени Targeting Elements
function edit(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited;
   }
   