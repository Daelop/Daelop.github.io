let pCount = 0;
let pIndex = [];
let pScore = [];
function newPlayer(name) {
  let pID = "player" + pCount;
  pIndex.push(pID);
  pScore.push(pCount);
  const scoreButtons = document.getElementById("template").innerHTML;
  document.getElementById(pID).innerHTML =
    "<p>" +
    name +
    "</p>" +
    scoreButtons +
    "<p id=score" +
    pCount +
    ">0</p>" +
    "</div><div class=scoreBox id=player" +
    (pCount + 1) +
    ">";
    const buttons = document.getElementsByClassName("score-button")
    for (let item of buttons){
      item.className = pCount;
    };
    pCount += 1;
}
function addScore(player, amount) {
  pScore[player] += amount;
  document.getElementById("score" + player).innerHTML =
    "Score: " + pScore[player];
}
function removeScore(player, amount) {
  pScore[player] -= amount;
  document.getElementById("score" + player).innerHTML =
    "Score: " + pScore[player];
}