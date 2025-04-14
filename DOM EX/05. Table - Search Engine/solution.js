function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
//'tbody tr': Това е CSS селекторът, който казва на браузъра да избере всички <tr> (редове на таблица), които се намират вътре в <tbody> (основната част на таблицата).
     const rows = document.querySelectorAll('tbody tr');

   function onClick() {
      
      const input = document.querySelector('#searchField').value.toLowerCase();

   

   for (let row of rows) {

      if (
         row.textContent.toLowerCase().includes(input)
      ) {
         row.setAttribute('class','select');
      } else {
         row.removeAttribute('class');
      }

   }
}

}

