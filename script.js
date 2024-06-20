const container = document.querySelector(".container");


insertDivsToCanvas(64);






function insertDivsToCanvas(number) {

    let numberSquared = number * number;
    for (i = 0; i < numberSquared; i++) {
        const div = document.createElement("div");
        div.style.flexGrow = "1 1 auto";
        div.style = " min-width: 12px; min-height: 5px; border: 1px solid lightgreen"
        container.appendChild(div);
    }
    console.log(i);
    console.log(number);
}

function addTrailToCursor(div) {
    div.style.backgroundColor = "gray";
}