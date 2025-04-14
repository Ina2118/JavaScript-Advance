function addItem() {
    //Взимаме елементите от дом дървото
    const inputEl = document.getElementById("newItemText");
    const ulEL = document.getElementById("items");
    //Създаваме лист(li) елементи
    const liEl = document.createElement("li");
    liEl.textContent = inputEl.value;
    //Апендва ме ги към ul
    ulEL.appendChild(liEl);

    //Clear input after input
    inputEl.value = "";

    //Focus on the input
    inputEl.focus();
}