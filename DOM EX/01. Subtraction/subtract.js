function subtract() {
//.value  ни взима стойноста от HTML елемента
// Методът getElementById() се използва в JavaScript за избиране и извличане на HTML елемент с определен атрибут id.
    const firstElement = Number(document.getElementById("firstNumber").value);
    const secondElement = Number(document.getElementById("secondNumber").value);
    
    let sum = firstElement - secondElement;
// Свойството textContent задава или връща текстовото съдържание на посочения node(възел) и всички негови descendants(наследници).
    const resultElement = document.getElementById("result").textContent = sum;
}