const getInputValue = (inputID) => {
    const inputElement = document.getElementById(inputID);
    const inputString = inputElement.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

function setTextAreaValue(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

const displayAreaCalculation = (areaName,calculateArea) => {
    const div = document.getElementById('display-area');
    const p = document.createElement('p');
    p.innerHTML = `${areaName}: ${calculateArea}`;
    div.appendChild(p);
}