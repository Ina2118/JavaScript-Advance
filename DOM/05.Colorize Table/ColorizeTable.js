// Judge не приема решения с querySelectorAll и querySelector

function colorize() {
    //Връща NodeList (подобен на масив) с всички елементи, които съответстват на дадения CSS селектор.
    //Ако няма съвпадения, връща празен NodeList.
    const evenTableRowEl = document.querySelectorAll("table tr:nth-child(even");

    for (const row of evenTableRowEl) {
        row.style.background = "teal";
    }
}

//Това решение се приема от judge
function colorize() {
    const table = document.getElementsByTagName("table")[0];
    //Тук използваме getElementsByTagName("tr"), за да вземем всички редове в таблицата и след това стилизираме само тези с четен индекс.
    const rows = table.getElementsByTagName("tr");

    // Обхождаме само четните редове (индексирани от 1)
    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.background = "teal";
    }
}


//querySelector()
//Връща първия елемент от документа, който съответства на зададения CSS селектор.
//Ако няма съвпадение, връща null.