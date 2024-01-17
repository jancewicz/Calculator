let currentValue = 0;
let clickCount = 0;
let firstNum = 0;
let secondNum = 0;
let activeButton = null;
let operator = null;
const numericButtons = document.querySelectorAll(".numericBtn");
const addButton = document.getElementById("plus");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divisionButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const negativeButton = document.getElementById("turnToNegative");
const percentButton = document.getElementById("percent");
const decimalButton = document.getElementById("dot");
const powerButton = document.getElementById("pwr");
const cancelButton = document.getElementById("cancel");
const functionalButtons = document.querySelectorAll(".functionalBtn");

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

function pressPowerButton() {
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

function pressNumericButtons() {
    let numericButtonClicked;
    numericButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            numericButtonClicked = savePressedKey(e);
            currentValue = currentValue * 10 + parseInt(numericButtonClicked);
            updateScreenDisplay();
            turnButtonBackgroundBack();
        });
    });
}

function pressFunctionalButtons() {
    let functionalButtonClicked;
    functionalButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            functionalButtonClicked = savePressedKey(e);
            console.log(functionalButtonClicked);
        });
    });
}

function pressCancelButton() {
    cancelButton.addEventListener("click", setDisplayToZero);
    cancelButton.addEventListener("click", turnButtonBackgroundBack);
}

function turnButtonBackgroundBack() {
    functionalButtons.forEach((button) => {
        button.style.backgroundColor = "gray";
    })
}

function makeActiveButton(button, operation) {
    switch (operation) {
        case "add":
            if (activeButton) {
                activeButton.style.backgroundColor = "gray";
                activeButton = null;
            }
            if (!activeButton) {
                button.style.backgroundColor = "rgba(247, 112, 8, 0.91)";
                activeButton = addButton;
                operator = add;
                console.log(`Active button: ${button.id}`);
                break
            }
        case "subtract":
            if (activeButton) {
                activeButton.style.backgroundColor = "gray";
                activeButton = null;
            }
            if (!activeButton) {
                button.style.backgroundColor = "rgba(247, 112, 8, 0.91)";
                activeButton = subtractButton;
                console.log(`Active button: ${button.id}`);
                operator = subtract;
                break
            }
        case "multiply":
            if (activeButton) {
                activeButton.style.backgroundColor = "gray";
                activeButton = null;
            }
            if (!activeButton) {
                button.style.backgroundColor = "rgba(247, 112, 8, 0.91)";
                activeButton = multiplyButton;
                console.log(`Active button: ${button.id}`);
                operator = multiply;
                break
            }
        case "division":
            if (activeButton) {
                activeButton.style.backgroundColor = "gray";
                activeButton = null;
            }
            if (!activeButton) {
                button.style.backgroundColor = "rgba(247, 112, 8, 0.91)";
                activeButton = divisionButton;
                console.log(`Active button: ${button.id}`);
                operator = divide;
                break
            }
    }
}


function pressAddButton() {
    addButton.addEventListener("click", () => {
        if (clickCount === 0) {
            makeActiveButton(addButton, "add");
            firstNum = currentValue;
            currentValue = 0;
            clickCount++;
        }
        if (clickCount >= 1) {
            makeActiveButton(addButton, "add");
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;

        }
    });
}

function pressSubtractButton() {
    subtractButton.addEventListener("click", () => {
        if (clickCount === 0) {
            makeActiveButton(subtractButton, "subtract");
            firstNum = currentValue;
            currentValue = 0;
            clickCount++;
        }
        if (clickCount >= 1) {
            makeActiveButton(subtractButton, "subtract");
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;
        }
    });
}

function pressMultiplyButton() {
    multiplyButton.addEventListener("click", () => {
        if (clickCount === 0) {
            makeActiveButton(multiplyButton, "multiply");
            firstNum = currentValue;
            currentValue = 1;
            clickCount++;
        }
        if (clickCount >= 1) {
            makeActiveButton(multiplyButton, "multiply");
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;
        }
    });
}

function pressDivisionButton() {
    divisionButton.addEventListener("click", () => {
        if (clickCount === 0) {
            makeActiveButton(divisionButton, "division");
            firstNum = currentValue;
            currentValue = 1;
            clickCount++;
        }
        if (clickCount >= 1) {
            makeActiveButton(divisionButton, "division");
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;
        }
    });
}

function pressEqualsButton() {
    equalsButton.addEventListener("click", () => {
        if (operator) {
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum)
            updateScreenDisplay();
            console.log(`first: ${firstNum}, second: ${secondNum}`);
            firstNum = currentValue;
            operator = null;
            clickCount = 0;
            if (currentValue === Infinity || isNaN(currentValue)) {
                setDisplayToZero();
                document.getElementById("displayScreen").querySelector("span").textContent = "Err";
            }
        };
    });
}

function turnToNegativeButton() {
    negativeButton.addEventListener("click", () => {
        currentValue = currentValue * (-1)
        updateScreenDisplay();
    })
}

function pressPercentButton() {
    percentButton.addEventListener("click", () => {
        currentValue = currentValue / 100;
        updateScreenDisplay();
    })
}

// buggy 
function makeDecimalButton() {
    decimalButton.addEventListener("click", () => {
        decimalValue = currentValue + ".";
        currentValue = decimalValue;
        updateScreenDisplay();
    })
}

// Math for operator
function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

// doesn't work
function limitInputWidth() {
    const inputOnScreen = document.getElementById("screen");
    const screenDisplay = document.querySelector(".screenContainer");
    const maxScreenWidth = screenDisplay.clientWidth;
    const inputValue = parseFloat(inputOnScreen.textContent);


    if (!isNaN(inputValue) && inputValue > maxScreenWidth) {
        inputOnScreen.textContent = maxScreenWidth;
    }
}
document.getElementById("displayScreen").addEventListener("input", limitInputWidth);

pressPowerButton();
pressNumericButtons();
pressFunctionalButtons();
pressCancelButton();
pressAddButton();
pressMultiplyButton();
pressEqualsButton();
turnToNegativeButton();
pressPercentButton();
makeDecimalButton();
pressDivisionButton();
pressSubtractButton();
limitInputWidth();


