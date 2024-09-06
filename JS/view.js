// View
updateView();
function updateView() {
    let totalIdlePointsPerSec = idleClicker1 + idleClicker2;

    app.innerHTML = /*HTML*/ `
        <div id="gameContainer">
            <div id="pointsDiv">Points: ${points} <br> ${totalIdlePointsPerSec + ' points/sec'}</div>
            <div id="clickerDiv" onclick="addPoints()"></div>
        </div>
    `;

}