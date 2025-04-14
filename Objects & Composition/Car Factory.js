function carFactory(car) {
    // Define available engines
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    // Select the smallest engine that meets the power requirement
    car.engine = engines.find(engine => engine.power >= car.power);

    // Remove the power property as it's no longer needed
    delete car.power;

    // Set the carriage type and color
    car.carriage = {
        type: car.carriage,
        color: car.color
    };

    // Remove the color property as it's now part of the carriage object
    delete car.color;

    // Determine the wheel size (odd numbers only)
    let wheelSize = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;

    // Set the wheels as an array of 4 identical sizes
    car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    // Remove the wheelsize property
    delete car.wheelsize;

    return car;
}

// Example usage:
const clientOrder = {
    model: 'VW Golf',
    power: 120,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 16
};

console.log(carFactory(clientOrder));
