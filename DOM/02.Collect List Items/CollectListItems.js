function extractText() {
    //Взимане на ul list elemnts
    const liEle = document.querySelectorAll("#items > li")
    //document.querySelectorAll("ul#items li");
    //Взимаме елементите и ги правим на масив изпозвайки Array.from and map
    const items = Array.from(liEle).map((li) => {
        return li.textContent;

    });

    // Взимане на резултатния елемент
    const resultTextArea = document.getElementById("result");
    resultTextArea.value = items.join("\n");


    function extractText() {
        let itemNodes = document.querySelectorAll("ul#items li");
        let textarea = document.querySelector("#result");
        for (let node of itemNodes) {
        textarea.value += node.textContent + "\n";
        }
       }


}