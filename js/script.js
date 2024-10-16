function calculateTringleArea() {
    const baseNumber = getInputValue('input-base');
    const heightNumber = getInputValue('input-height');

    if (isNaN(baseNumber)) {
        return alert('Please input valid number');
    } else if (isNaN(heightNumber)) {
        return alert('Please input valid number');
    }

    const calculateArea = 0.50 * baseNumber * heightNumber;

    setTextAreaValue('triangle-area', calculateArea);

    displayAreaCalculation('Triangle', calculateArea);
}

const calculateRectangleArea = () => {
    const widthNumber = getInputValue('input-wdith');
    const lengthNumber = getInputValue('input-lenght');

    if (isNaN(widthNumber)) {
        return alert('Please input valid number');
    } else if (isNaN(lengthNumber)) {
        return alert('Please input valid number');
    }

    const calculateArea = widthNumber * lengthNumber;

    setTextAreaValue('rectangle-area', calculateArea);
    displayAreaCalculation('Rectangle', calculateArea);
}

function calculateParallelogramArea() {
    const baseNumber = getInputValue('para-base');
    const heightNumber = getInputValue('para-height');

    if (isNaN(baseNumber)) {
        return alert('Please input valid number');
    } else if (isNaN(heightNumber)) {
        return alert('Please input valid number');
    }


    const calculateArea = baseNumber * heightNumber;

    setTextAreaValue('para-area', calculateArea);
    displayAreaCalculation('Parallelogram', calculateArea);
}

const calculateRhombusArea = () => {
    const baseNumber = getInputValue('rhombus-base');
    const heightNumber = getInputValue('rhombus-height');

    const calculateArea = 0.50 * baseNumber * heightNumber;

    setTextAreaValue('rhombus-area', calculateArea);
    displayAreaCalculation('Rhombus', calculateArea);
}

const calculatePentagonArea = () => {
    const pNumber = getInputValue('pentagon-p');
    const bNumber = getInputValue('pentagon-b');

    if (isNaN(pNumber)) {
        return alert('Please input valid number');
    } else if (isNaN(bNumber)) {
        return alert('Please input valid number');
    }

    const calculateArea = 0.50 * pNumber * bNumber;

    setTextAreaValue('pentagon-area', calculateArea);
    displayAreaCalculation('Pentagon', calculateArea);
}
const calculateEllepseArea = () => {
    const aNumber = getInputValue('ellipse-a');
    const bNumber = getInputValue('ellipse-b');

    if (isNaN(aNumber)) {
        return alert('Please input valid number');
    } else if (isNaN(bNumber)) {
        return alert('Please input valid number');
    }

    const calculateArea = 1.14 * aNumber * bNumber;
    const ellepseArea = calculateArea.toFixed(2);

    setTextAreaValue('ellepse-area', ellepseArea);
    displayAreaCalculation('Ellepse', calculateArea);
}

