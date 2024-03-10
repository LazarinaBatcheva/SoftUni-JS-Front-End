function buildingPyramides(baseWidth, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = 0;

    let currentWidth = baseWidth;
    let currentLength = baseWidth;

    for (let i = 0; currentWidth > 0; i += 2) {
        steps += 1;

        if (currentWidth === 2) {
            gold += currentWidth * currentLength * increment;
        } else if (currentWidth === 1) {
            gold += ((currentWidth - 2) * (currentLength - 2)) * increment;
        } else {
            stone += ((currentWidth - 2) * (currentLength - 2)) * increment;

            if (steps % 5 === 0) {
                lapisLazuli += ((currentWidth - 1) * 4) * increment;
            } else {
                marble += ((currentWidth - 1) * 4) * increment;
            }
        }

        currentWidth -= 2;
        currentLength -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}


// test code

buildingPyramides(11, 1);
console.log('-------------------');
buildingPyramides(11, 0.75);
console.log('-------------------');
buildingPyramides(12, 1);
console.log('-------------------');
buildingPyramides(23, 0.5);