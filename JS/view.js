// View
updateView();
function updateView() {
    let totalIdlePointsPerSec = idleClicker1 + idleClicker2;

    app.innerHTML = /*HTML*/ `
        <div id="gameContainer">
            <div id="pointsDiv">Points: ${points} <br> ${totalIdlePointsPerSec + ' points/sec'}</div>
            <div id="clickerDiv" onclick="addPoints()"></div>
            <div class="levelIndicator">Clicker level/Points per click: ${' ' + clickerLevel}</div>
            <div>50 points to buy upgrade</div>
            <button id="buySingleUpgrade" onclick="addSingleUpgrade()">Upgrade CLicker level</button>
            <br>
            <div>${100 + costOfUgradeIdle1} points to buy Idle upgrade</div>
            <button onclick="upgradeIdlePoints1()">Upgrade idle points by 1 point/s</button>
            <div id="idleClickDiv1">${idleClicker1 + ' points per second'}</div>
            <br>
            <div>${ 250 + costOfUgradeIdle2} points to buy Idle upgrade</div>
            <button onclick="upgradeIdlePoints2()">Upgrade idle points by 10 point/s</button>
            <div id="idleClickDiv2">${idleClicker2 + ' points per second'}</div>

        </div>
    `;
}