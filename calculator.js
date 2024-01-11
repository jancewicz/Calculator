// work with this let currentValue = 0; as starting point, then current value is updated and displayed on screen! with innerText
// check function - window.onload
let currentValue = 0;


function setDisplayToZero() {
    currentValue = 0;
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
}

//find difference in these two functions
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
            numericButtonClicked = parseInt(numericButtonClicked);
            console.log(numericButtonClicked);
            currentValue += numericButtonClicked;
            updateScreenDisplay(currentValue);
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


