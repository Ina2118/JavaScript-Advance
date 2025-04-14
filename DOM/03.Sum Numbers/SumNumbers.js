function calc() {
    //Метода document.getElementById връща елемент, който има свойство id с указана стойност.
    const element1 = document.getElementById('num1');
    const element2 = document.getElementById('num2');
    const sumElement =  document.getElementById('sum')
//.value  ни взима стойноста от HTML елемента
    const firstNum = Number(element1.value);
    //взимаме стойноста и HTML елемента и преобразуваме в число
    const secondNum = Number(element2.value);
//Взимаме стойноста на SumElement 
    sumElement.value = firstNum + secondNum;

}
