const container = document.querySelector(".container");
const CANVAS_WIDTH = 700;

insertDivsToCanvas(64);









function insertDivsToCanvas(squaresPerSide) {

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

function addTrailToCursor(div) {
    div.style.backgroundColor = "gray";
}
