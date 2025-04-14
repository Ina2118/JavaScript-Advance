function solve() {
  const textAreaRef = document.getElementById("input");
  const resRef = document.getElementById("output");

  const incomeText = textAreaRef.value.split(".")
  .map(sentence => sentence.trim()) 
  .filter(sentence => sentence.length > 0);  

  for (let i = 0; i < incomeText.length; i += 3) {
    let res = [];
    for (let x = 0; x < 3; x++) {
      if (!incomeText[i + x]) {
        break;
      }
      res.push(incomeText[i + x]);

    }
    let p = document.createElement("p");
    // + . add dote to the last sentence
    p.textContent = res.join(".") + ".";
    resRef.appendChild(p);
  }

}






function solve() {
  // Взимаме стойността от textarea с id="input"
  let textArea = document.getElementById('input').value;

  // Премахваме водещи и завършващи празни пространства от текста
  let text = textArea.trim();

  // Проверяваме дали текстът е празен - ако е, прекратяваме изпълнението
  if (text === '') {
    return;
  }

  // Разделяме текста на изречения по точка, премахваме празните елементи и добавяме точка обратно към всяко изречение
  let sentences = text.split('.')
    .filter(x => x.trim() !== '')  // Премахваме празни изречения (например ако има двойни точки "..")
    .map(x => x.trim() + '.');     // Премахваме излишни интервали около изреченията и добавяме точка в края

  // Ако няма валидни изречения след филтрирането, прекратяваме изпълнението
  if (sentences.length === 0) {
    return;
  }

  // Изчисляваме колко параграфа ще са ни нужни (по 3 изречения на параграф)
  let paragraphCount = Math.ceil(sentences.length / 3);

  // Вземаме референция към div с id="output", където ще добавяме параграфите
  let resultDiv = document.getElementById('output');

  // Изчистваме предишното съдържание, ако е имало такова
  resultDiv.innerHTML = '';

  // Генерираме параграфите, като добавяме по 3 изречения във всеки
  for (let i = 0; i < paragraphCount; i++) {
    // Взимаме първите 3 изречения (или по-малко, ако не остават 3) и ги съединяваме с интервал
    let paragraph = sentences.splice(0, 3).join(' ');

    // Добавяме параграфа към div-а с помощта на string interpolation
    resultDiv.innerHTML += `<p>${paragraph}</p>`;
  }
}
