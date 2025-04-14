function slove(obj) {
    // Проверяваме дали  dizziness е true или  false
    if (obj.dizziness) {

        //Accessing Properties - достъпване на свойства на обекта и прибавяме нужните 0,1 мл вода спрямо килограмите и годините опит
        obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
        // След хидратацията правим свойството на обекта да е false
        obj.dizziness = false;

    }
    //Връщаме обекта
    return obj;



}
console.log(slove({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true
}))