function savePressedKey(e) {
    const pressedKey = e.target.id;
    return pressedKey

}

function numericButtons() {
    const buttons = document.querySelectorAll(".btn");
    let buttonClicked;
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            buttonClicked = savePressedKey(e);
            console.log(buttonClicked);

        });
    });
    return buttonClicked;
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

numericButtons();