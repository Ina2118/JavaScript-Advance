function slove(month, year) {
    // console.log(new Date(year, month, 0).getDate());
    //в JavaScript месеците са 0-индексирани, т.е. януари е 0, февруари е 1 и т.н.).
    //Ако подадем 0 за ден, JavaScript автоматично се връща към последния ден от предходния месец.
    //Методът getDate() връща числото, представляващо деня от месеца за обекта Date.

    return new Date(year, month, 0).getDate();
}
slove (2, 2021)