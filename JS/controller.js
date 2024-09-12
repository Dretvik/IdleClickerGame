function addPoints(){
    points += upgradeClicker;
    document.getElementById('pointsDiv').innerHTML = points;
    updateView();
}

function addSingleUpgrade() {
    if(points < 50) return;
    points -= 50;
    upgradeClicker += 1;
    clickerLevel += 1;
    updateView();
}

function timer() {
    setInterval(() => {
        interval++;
        points = points + idleClicker1;
        points = points + idleClicker2;
        updateView();
    }, 1000);
}

function upgradeIdlePoints1() {
    if (points < costOfUgradeIdle1 + 100) return;
    points -= costOfUgradeIdle1 + 100;
    costOfUgradeIdle1 += 10;
    idleClicker1++;  // kan skrive += 1;
    updateView();
}

function upgradeIdlePoints2() {
    if (points < costOfUgradeIdle2 + 250) return;
    points -= costOfUgradeIdle2 + 250;
    costOfUgradeIdle2 += 100;
    idleClicker2 += 10;
    updateView();
}
timer();