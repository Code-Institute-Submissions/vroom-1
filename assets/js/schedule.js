// clone element with three cards for round 1 for rounds 2 - 23 and update ID
const round = document.getElementById("round1");
const scheduleContainer = document.getElementById("fullSchedule");
// replace i <= 23 with < races.length later
for (let i = 2; i <= 22; i++) {
    let cardsClone = round.cloneNode(true);
    cardsClone.id = `round${i}`;
    scheduleContainer.appendChild(cardsClone);
}
