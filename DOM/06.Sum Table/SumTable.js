//Judge не приема това решение , тъй като не подържа querySelectorAll
function sumTable() {

    const sumEl = document.getElementById("sum");
    const costEl = document.querySelectorAll("table tr: nth-of-type(2):not(#sum)");

    let totalSum = 0;
    for (const el of costEl) {

        totalSum += Number(el.textContent)
    }

    sumEl.textContent = totalSum;

}

//Това решение няма да се приеме от judge , тъй като не подържа querySelectorAll
function sumTable() {
    let rows = document.querySelectorAll("table tr td:last-child");
    let sum = 0;
    for (let i = 0; i < rows.length-1; i++) {
        sum += Number(rows[i].textContent);
    }

    document.getElementById("sum").textContent = sum;
}



// Това решение се прие от Judge
function sumTable() {
    // Взимаме първата таблица
    const tablesInfo = document.getElementsByTagName("table")[0];
    // Взимаме всички редове на таблицата
    const rowInfo = document.getElementsByTagName("tr");

    let totalSum = 0;

    for (let i = 0; i < rowInfo.length - 1; i++) {
        // Взимаме всички клетки в текущия ред
        //getElementsByTagName("td"), за да вземем всички клетки.
        let cells = rowInfo[i].getElementsByTagName("td");
        if (cells.length > 0) {
            // Взимаме последната клетка и я добавяме към сумата
            totalSum += Number(cells[cells.length - 1].textContent);
        }
    }

    document.getElementById("sum").textContent = totalSum;
}
