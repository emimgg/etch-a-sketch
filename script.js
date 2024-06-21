const container = document.querySelector(".container");
const body = document.querySelector("body");
const CANVAS_WIDTH = 720;

const resetButton = document.createElement("button")
resetButton.textContent = "Create new grid";

body.insertBefore(resetButton, container);

insertDivsToCanvas();

resetButton.addEventListener("click", generateNewGrid);

// -------functions-------

function insertDivsToCanvas(squaresPerSide = 16) {
    let numberSquared = squaresPerSide * squaresPerSide;
    for (let i = 0; i < numberSquared; i++) {
        let rgbValue = generateRandomRGB();
        createDivs(squaresPerSide, rgbValue);
    }
}

function createDivs(squaresPerSide, rgbValue) {
    const squareSize = CANVAS_WIDTH / squaresPerSide;
    const div = document.createElement("div");
    div.classList.add("canvas-square")
    div.style = `width: ${squareSize}px; height: ${squareSize}px`
    container.appendChild(div);

    let opacityValue = 0.2;
    div.addEventListener("mouseover", () => {
        opacityValue += 0.2;
        if (opacityValue < 0) {opacityValue = 0};
        div.style.backgroundColor = `rgba(${rgbValue}, ${opacityValue})`;
    });
}

function generateNewGrid(input) {
    input = prompt("How many squares per side would you want? \nPress OK to generate new default 16x16 grid (MAX per side is 100)");
    (input < 16) ? input = 16 : input = input; //Check minimum 16 value
    (input > 100) ? input = 100 : input = input; //Check maximum 100 value
    container.textContent = ""; // resets grid
    insertDivsToCanvas(input);
}

function generateRandomRGB() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `${r}, ${g}, ${b}`;
}

//-------- Button styles ---------
resetButton.addEventListener("mouseover", () => resetButton.style.backgroundColor = "#aaa");
resetButton.addEventListener("mouseout", () => resetButton.style.backgroundColor = "#b3b177");

resetButton.style.cssText = `
    padding: 6px;
    margin: 32px auto;
    font-size: 24px;
    background-color: #b3b177;
    color: #eee;
    border: 2px solid #eee;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 1px gray;
`;