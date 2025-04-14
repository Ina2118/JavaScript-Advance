function walking(num1, num2, num3) {
    let steps = Number(num1);
    let meter = Number(num2);
    let kmh = Number(num3);

    let distance = steps * meter;
    let speed = kmh / 3.6; // Convert km/h to m/s
    let time = distance / speed; 

    let rest = Math.floor(distance / 500); 
    let timeMin = Math.floor(time / 60); 
    let timeSec = Math.round(time % 60); 
    let timeHr = Math.floor(time / 3600); 

    let totalMin = timeMin + rest; 

    if (totalMin >= 60) {
        timeHr += Math.floor(totalMin / 60); 
        totalMin = totalMin % 60; 
    }

    let formattedHr = timeHr.toString().padStart(2, "0");
    let formattedMin = totalMin.toString().padStart(2, "0");
    let formattedSec = timeSec.toString().padStart(2, "0");

    console.log(`${formattedHr}:${formattedMin}:${formattedSec}`);
}
walking(2564, 0.70, 5.5)