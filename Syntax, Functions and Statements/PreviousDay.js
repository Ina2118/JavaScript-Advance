function previousDay(year, month, day) {
    // Създаваме обект от тип Date с дадените година, месец и ден.
    // Забележете, че месецът се подава като (month - 1), тъй като JavaScript Date използва индексиране от 0 за месеците
    let date = new Date(year, month - 1, day);


    // Намаляваме стойността на деня с 1, за да получим предишния ден.
    // Методът setDate() автоматично се справя с преминаването между месеци и години
    date.setDate(date.getDate() - 1)

    // Връщаме резултата като низ в формат "година-месец-ден".
    // date.getFullYear() връща годината (например 2024).
    // date.getMonth() връща месеца (от 0 до 11), затова добавяме 1, за да го върнем в стандартния формат.
    // date.getDate() връща деня от месеца.
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`



}

console.log(previousDay(2016, 9, 30));

previousDay(2016, 9, 30)