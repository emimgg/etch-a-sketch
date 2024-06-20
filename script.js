const container = document.querySelector(".container");
const body = document.querySelector("body");
const CANVAS_WIDTH = 720;

const resetButton = document.createElement("button")
resetButton.textContent = "Create new grid";
resetButton.style.padding = "6px";
resetButton.style.margin = "32px auto";
body.insertBefore(resetButton, container);


insertDivsToCanvas();


function insertDivsToCanvas(squaresPerSide = 16) {

    let numberSquared = squaresPerSide * squaresPerSide;
    for (i = 0; i < numberSquared; i++) {
        createDivs(squaresPerSide);
    }
    console.log(i);
    console.log(squaresPerSide);
}

function createDivs(squaresPerSide) {
    const squareSize = CANVAS_WIDTH / squaresPerSide;
    const div = document.createElement("div");
    div.classList.add("canvas-square")
    div.style = `width: ${squareSize}px; height: ${squareSize}px`
    container.appendChild(div);
    div.addEventListener("mouseover", () => div.style.backgroundColor = "gray");

}
