let pCount = 0;
let pIndex = [];
let pScore = [];
function newPlayer(name) {
  let pID = "player" + pCount;
  pIndex.push(pID);
  pScore.push(pCount);
  const scoreButtons = document.getElementById("template").innerHTML;
  let newPlayer = document.getElementById(pID);
  newPlayer.innerHTML =
    "<p>" +
    name +
    "</p>" +
    scoreButtons +
    "<p id=score" +
    pCount +
    ">0</p>";
    let node = document.createElement("div");
    newPlayer.parentNode.appendChild(node);
    node.className = "scorebox";
    node.id = pID;
    const buttons = document.getElementsByClassName("score-button")
    for (let item of buttons){
      item.className = pCount;
      console.log(item.textContent + "modifed")
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