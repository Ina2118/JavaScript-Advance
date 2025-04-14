//прието решение нищо че  съдържа forEach and querySelector
//решение от септември 2024
function search() {
   
   const townsListEl = document.querySelector("#towns");
   const searchButtonEl = document.querySelector("#searchText");
   const resultEl = document.querySelector("#result");


   const searchStr = searchButtonEl.value.toLowerCase();

   if(searchStr === '') return;

   
   const TownsArr = Array.from(townsListEl.children);
   const towns = TownsArr.map((el) => el.textContent);

   console.log(towns);
   
   let result = [];


   for(let i = 0; i < towns.length; i++){

      if ( towns[i].toLowerCase().indexOf(searchStr.toLowerCase()) >= 0){
         result.push(i);
      }

   }

   result.forEach((position, index) =>{
      townsListEl.children[position].style.fontWeight = "bold";
      townsListEl.children[position].style.textDecoration = 'underline';

   });

   console.log(result);

   resultEl.textContent = `${result.length} matches found`; 

   searchButtonEl.value = "";
   


}







//Решението на господина  от януари 2025
function search() {
   
   let listItems = document.querySelectorAll('#towns li');

   let input = document.querySelector('input').value;

   let result = document.getElementById('result');

   console.log(listItems);

   let sum = 0;

   for (let li of listItems) {

      if (li.textContent.toLowerCase().includes(input.toLowerCase())) {

         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';

         sum++;

      } else {

         li.style.fontWeight = '';
         li.style.textDecoration = '';

      }

   }

   result.textContent = `${sum} matches found`;

}