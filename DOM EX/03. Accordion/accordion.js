
function toggle() {
   const textEl = document.getElementById("extra");
   const buttonEl = document.getElementsByClassName("button")[0];

   // Проверете дали текстът е скрит или не
   if (textEl.style.display === "none" || textEl.style.display === "") {
      // Ако текста е скрит го показва
      textEl.style.display = "block";
      // Променя бутона на Show less
      buttonEl.innerHTML = "Less";


   } else {
      // Ако текста е видим го крие
      textEl.style.display = "none";
      // Свойството innerHTML задава или връща HTML съдържанието на елемент

      buttonEl.innerHTML = "More"

   }

}


// Изпползваме тенарен оператор
function toggle() {
    
   let button = document.getElementsByClassName("button")[0];

   let text = document.getElementById("extra");

   button.textContent = 
   // условие ? стойност_ако_е_true : стойност_ако_е_false;
   button.textContent === 'More' ? "Less" : "More";

   text.style.display =
   text.style.display === 'none' || text.style.display === '' 
   ? 'block'
   : 'none';

}