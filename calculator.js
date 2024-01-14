let currentValue = 0;
let clickCount = 0;
let firstNum;
let secondNum;
let isActive;


function setDisplayToZero() {
    currentValue = 0;
    clickCount = 0;
    document.getElementById("displayScreen").querySelector("span").textContent = currentValue;
}

function powerButtonSound() {
    let sound = new Audio("enable-device-sound.mp3");
    sound.play();
}

function turnCalculatorOn() {
    powerButtonSound();
    setDisplayToZero();
}

function powerButton() {
    const powerButton = document.getElementById("pwr");
    powerButton.addEventListener("click", turnCalculatorOn);
    powerButton.addEventListener("click", turnButtonBackgroundBack);
}


function updateScreenDisplay() {
    document.getElementById("screen").innerText = currentValue;
}


function savePressedKey(e) {
    const pressedKey = e.target.id;
    return pressedKey

}

function numericButtons() {
    const buttons = document.querySelectorAll(".numericBtn");
    let numericButtonClicked;
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            numericButtonClicked = savePressedKey(e);
            currentValue = currentValue * 10 + parseInt(numericButtonClicked);
            updateScreenDisplay();
            turnButtonBackgroundBack();
        });
    });
}

function functionalButtons() {
    const buttons = document.querySelectorAll(".functionalBtn");
    let functionalButtonClicked;
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            functionalButtonClicked = savePressedKey(e);
            console.log(functionalButtonClicked);
        });
    });
    return functionalButtonClicked;
}

function cancelButton() {
    const cancelButton = document.getElementById("cancel");
    cancelButton.addEventListener("click", setDisplayToZero);
    cancelButton.addEventListener("click", turnButtonBackgroundBack);
}

function turnButtonBackgroundBack() {
    const functionalButtons = document.querySelectorAll(".functionalBtn");
    functionalButtons.forEach((button) => {
        button.style.backgroundColor = "gray";
    })
}



function addButton() {
    const addButton = document.getElementById("plus");

    addButton.addEventListener("click", () => {
        if (clickCount === 0) {
            activeButton(addButton);
            firstNum = currentValue;
            currentValue = 0;
            clickCount++;
        }
        if (clickCount >= 1) {
            activeButton(addButton);
            secondNum = currentValue;
            currentValue = add(firstNum, secondNum)
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;
        }

    })
}



function equalsButton() {
    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("Click", () => {
        activeButton(equalsButton);
        secondNum = currentValue;
        currentValue = add(firstNum, secondNum);
        updateScreenDisplay();
        turnButtonBackgroundBack();
        console.log(currentValue);
        clickCount = 0;
    });
}




function activeButton(functionalButton) {
    isActive = true;
    functionalButton.style.backgroundColor = "rgba(247, 112, 8, 0.91)"
}




// Math
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function turnToNegative(num) {
    return num * (-1);
}

function percent(num) {
    return num / 100;
}




powerButton(currentValue);
numericButtons(currentValue);
let functionalButtonClicked = functionalButtons();
cancelButton();
addButton();
equalsButton();


