function savePressedKey(e) {
    const pressedKey = e.target.id;
    return pressedKey

}

function displayOnScreen(numericButtonClicked) {
    const screenSpan = document.getElementById("displayScreen").querySelector("span");
    let newSpan = document.createElement("span");
    newSpan.textContent = numericButtonClicked;
    screenSpan.appendChild(newSpan);
}

function numericButtons() {
    const buttons = document.querySelectorAll(".numericBtn");
    let numericButtonClicked;
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            numericButtonClicked = savePressedKey(e);
            numericButtonClickedINT = parseInt(numericButtonClicked);
            console.log(numericButtonClickedINT);
            // below code allows to not append to starting 0 like after pressing 1 it's 01, but change it from single 0 to 1,
            // but it changes the number every time
            document.getElementById("displayScreen").querySelector("span").textContent = displayOnScreen(numericButtonClicked);
            displayOnScreen(numericButtonClicked);

        });
    });
    return numericButtonClicked;
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

function setDisplayToZero() {
    document.getElementById("displayScreen").querySelector("span").textContent = 0;
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

let numericButtonClicked = numericButtons();
let functionalButtonClicked = functionalButtons();
cancelButton();
//displayOnScreen(numericButtonClicked);