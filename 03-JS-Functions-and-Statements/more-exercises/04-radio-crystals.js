function monitoringCrystalThickness(input) {
    const operations = {
        'Cut': (thickness) => thickness / 4,
        'Lap': (thickness) => thickness * 0.8,
        'Grind': (thickness) => thickness - 20,
        'Etch': (thickness) => thickness - 2,
    }

    const transportingAndWashing = thickness => Math.floor(thickness)
    const xRay = thickness => thickness + 1;

    const targetThickness = input.shift();

    for (let quartzOre of input) {
       const printOperations = [`Processing chunk ${quartzOre} microns`];
       let xRayUsed = false;

        let currentThickness = quartzOre;

        for (let operation in operations) {
            let operationCounter = 0;

            let reducedThickness = operations[operation](currentThickness);

            while (reducesThickness >= targetThickness - 1) {
                currentThickness = reducedThickness;
                reducedThickness = operations[operation](currentThickness);
                operationCounter += 1;
            }

            if (operationCounter) {
                printOperations.push(`${operation} x${operationCounter}`)
                currentThickness = transportingAndWashing(currentThickness);
                printOperations.push('Transporting and washing')
            }

            if (currentThickness < targetThickness && !xRayUsed) {
                currentThickness = xRay(currentThickness);
                xRayUsed = true;
                printOperations.push('X-ray x1')
            }
        }

        console.log(printOperations.join('\n'));
        console.log(`Finished crystal ${targetThickness} microns`);
    }
}


// test code

monitoringCrystalThickness([1375, 50000]);
console.log('-----------------------');
monitoringCrystalThickness([1000, 4000, 8100]);
