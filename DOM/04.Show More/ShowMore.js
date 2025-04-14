
// //не се приема от judge
function showText() {

    //Извличане на елементи от HTML 
    const moreText = document.getElementById("text");
    const readMore = document.getElementById("more");

    //Това прави допълнителния текст видим. 
    // Ако #text първоначално е бил скрит чрез CSS (display: none;) {<span id="text" style= "display:none">}, 
    // задаването на "" (празен стринг) ще върне стойността по подразбиране .
    moreText.style.display = "";


    //Скриване на бутона „Read more“
    readMore.style.display = "none";

    //Показва текста (display = "").
    //Скрива бутона (display = "none")
}


//Приема го Judge
function showText(){
    const moreText = document.getElementById("text");
    //Променя CSS свойството display на "inline", което означава, че текстът ще се показва като вграден (inline) елемент, т.е. ще бъде част от същия ред с околните елементи.
    moreText.style.display = "inline";
    const readMore = document.getElementById("more");
    readMore.style.display = "none";
}