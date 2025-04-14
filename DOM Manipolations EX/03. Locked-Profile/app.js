function lockedProfile() {
    // Взимаме всички бутони в профилите и ги събираме в масив
    let buttonEl = Array.from(document.querySelectorAll('.profile button'));

    // За всеки бутон от елемента добавяме event listener, 
    // който при кликване ще изпълнява функцията `show`
    for (let btn of buttonEl) {
        btn.addEventListener('click', show);
    }

    // Функция, която се изпълнява при натискане на бутон "Show more"
    function show(e) {

        // Взимаме всички деца (елементи) на родителския елемент (div.profile)
        let divChildren = Array.from(e.target.parentElement.children);

        // Проверяваме дали радио бутона "Locked" е избран
        let locked = divChildren[2].checked; // това е радио бутонът "Locked"

        // Ако профилът не е заключен (checked == false), тогава може да се покаже/скрие информацията
        if (locked == false) {

            // Намираме скритите полета (следващия елемент преди бутона)
            let hiddenFieldsElement = e.target.previousElementSibling;

            // Проверяваме дали бутонът в момента е "Show more"
            if (e.target.textContent == 'Show more') {

                // Ако е "Show more", правим скритите полета видими
                hiddenFieldsElement.style.display = 'inline';
                // Променяме текста на бутона на "Hide it"
                e.target.textContent = 'Hide it';

            } else {
                // Ако вече е "Hide it", скриваме полетата
                hiddenFieldsElement.style.display = '';
                // Връщаме текста на бутона на "Show more"
                e.target.textContent = 'Show more';
            }
        }
    }
}
