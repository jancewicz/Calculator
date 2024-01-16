let currentValue = 0;
let clickCount = 0;
let firstNum = 0;
let secondNum = 0;
let operator = null;


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
            switch (functionalButtonClicked) {
                case "add":
                    operator = add;
                    break
            }
        });
    });

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

function activeButton(functionalButton) {
    functionalButton.style.backgroundColor = "rgba(247, 112, 8, 0.91)"
}


function addButton() {
    const addButton = document.getElementById("plus");
    addButton.addEventListener("click", () => {
        if (clickCount === 0) {
            activeButton(addButton);
            firstNum = currentValue;
            currentValue = 0;
            clickCount++;
            operator = add;
        }
        if (clickCount >= 1) {
            activeButton(addButton);
            operator = add;
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;

        }
    });
}

function subtractButton() {
    const subtractButton = document.getElementById("subtract");
    subtractButton.addEventListener("click", () => {
        if (clickCount === 0) {
            activeButton(subtractButton);
            firstNum = currentValue;
            currentValue = 0;
            clickCount++;
            operator = subtract;
        }
        if (clickCount >= 1) {
            activeButton(subtractButton);
            operator = subtract;
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;
        }
    });
}


function multiplyButton() {
    const multiplyButton = document.getElementById("multiply");
    multiplyButton.addEventListener("click", () => {
        if (clickCount === 0) {
            activeButton(multiplyButton);
            firstNum = currentValue;
            currentValue = 1;
            clickCount++;
            operator = multiply;
        }
        if (clickCount >= 1) {
            activeButton(multiplyButton);
            operator = multiply;
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;
        }
    });
}

function divisionButton() {
    const divisionButton = document.getElementById("divide");
    divisionButton.addEventListener("click", () => {
        if (clickCount === 0) {
            activeButton(divisionButton);
            firstNum = currentValue;
            currentValue = 1; // 
            clickCount++;
            operator = divide;
        }
        if (clickCount >= 1) {
            activeButton(divisionButton);
            operator = divide;
            secondNum = currentValue;
            currentValue = operator(firstNum, secondNum);
            updateScreenDisplay();
            firstNum = currentValue;
            currentValue = 0;
        }
    }
    );
}



function equalsButton() {
    const equalsButton = document.getElementById("equals");
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
    const negativeButton = document.getElementById("turnToNegative");
    negativeButton.addEventListener("click", () => {
        currentValue = currentValue * (-1)
        updateScreenDisplay();
    })
}

function percentButton() {
    const percentButton = document.getElementById("percent");
    percentButton.addEventListener("click", () => {
        currentValue = currentValue / 100;
        updateScreenDisplay();
    })
}

function makeDecimalButton() {
    const makeDecimalButton = document.getElementById("dot");
    makeDecimalButton.addEventListener("click", () => {
        activeButton(makeDecimalButton);
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





powerButton(currentValue);
numericButtons(currentValue);
functionalButtons();
cancelButton();
addButton();
multiplyButton();
equalsButton();
turnToNegativeButton();
percentButton();
makeDecimalButton();
divisionButton();
subtractButton();


