function convert(arr) {
    // създаваме празен масив в който по късно ще си вмъкнем даните от обекта
    let townTable = [];
    // обхождаме с фор цикъл входния масив , като започваме от първи индекс за да изпуснем '| Town | Latitude | Longitude |' и да си вземем нужните дани
    for (let i = 1; i < arr.length; i++) {

        //сплитваме целия масив по дадения разделител
        let line = arr[i].split('|')
        //Взимаме втория индекс от масива и изтриваме празните постранства
        let townName = line[1].trim();
        //Взимаме 3 индекс от масива и изтриваме празните постранства, закръгляме до втория знак след запетайката
        let townLatitude = Number(Number(line[2].trim()).toFixed(2));
        //Взимаме 4 индекс от масива и изтриваме празните постранства, закръгляме до втория знак след запетайката
        let townLongitude = Number(Number(line[3].trim()).toFixed(2));
        //създаваме си обект
        let townObj = {
            Town: townName,
            Latitude: townLatitude,
            Longitude: townLongitude
        }
        //пушваме информацията от обекта в празния масива(пълним си масива)
        townTable.push(townObj);

    }
    //превръщаме новия масив в json 
    console.log(JSON.stringify(townTable));

}
convert(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |'])