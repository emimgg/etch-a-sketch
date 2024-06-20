const container = document.querySelector(".container");


insertDivsToCanvas(64);









function insertDivsToCanvas(number) {

    let numberSquared = number * number;
    for (i = 0; i < numberSquared; i++) {
        createDivs();
    }
    console.log(i);
    console.log(number);
}

function createDivs() {
    const div = document.createElement("div");
    div.classList.add("canvas-square")
    container.appendChild(div);
}

function addTrailToCursor(div) {
    div.style.backgroundColor = "gray";
}
