let pCount = 0;
let pStrikes = [];
let pScore = [];
let scoreMax = document.getElementById("maxScore").value;
let areas = "'header header' 'player0 scoreBar0' ";

function newPlayer(name) {
  let pID = "player" + pCount;
  pStrikes.push(0);
  pScore.push(0);
  const scoreButtons = document.getElementById("template").innerHTML;
  let newPlayer = document.getElementById(pID);
  newPlayer.innerHTML =
    "<p>" +
    name +
    "</p>" +
    scoreButtons +
    "<p id=score" +
    pCount +
    ">Score: 0</p><p class='strikes' id=strikes" +
    pCount +
    "></p>"
  areas += "'player"+pCount+" scoreBar"+pCount+"' "
  let body = document.getElementById("grid");
  body.style.grid = areas;
  let buttons = document.getElementById(pID).getElementsByTagName("button");
  for (let item of buttons) {
    item.classList.add(pCount);
    console.log(item.textContent + "class added");
  }
  for (let item of buttons) {
    item.classList.remove("score-button");
    console.log(item.textContent + "class removed");
  }
  // playerBar(pCount)
  pCount += 1;
  let node = document.createElement("div");
  newPlayer.parentNode.appendChild(node);
  node.className = "scoreBox";
  node.id = "player" + pCount;
  node.style.gridArea = "player" + pCount;
}
function addScore(player, amount) {
  pScore[player] += amount;
  document.getElementById("score" + player).innerHTML =
    "Score: " + pScore[player];
    let scoreLength = Math.floor(100*(pScore[player]/scoreMax))+'%';
  document.getElementById('scoreBar'+player).style.width = scoreLength;
}
function playerBar(player){
  let bar = document.getElementById('scoreBar0')
 
  let node2 = document.createElement("div");
  //bar.parentNode.appendChild(node2); 
  player +=1;
  node2.id = "scoreBar" + player;
  node2.className = "scoreBar";
}
function strike(player, change) {
  pStrikes[player] += change;
  let strikesMax = document.getElementById("maxStrikes").value;
  let strikeString = "";
  switch (true) {
    case pStrikes[player] > strikesMax:
      {
        pStrikes[player]--;
      }
      break;
    case pStrikes[player] < 0:
      {
        pStrikes[player]++;
      }
      break;
    case pStrikes[player] == strikesMax:
      {
        document.getElementById("strikes" + player).innerHTML =
          "You Are Eliminated!";
      }
      break;
    default: {
      let strikeCount = pStrikes[player];
      for (i = 0; i < strikeCount; i++) {
        strikeString += "X";
      }
      document.getElementById("strikes" + player).innerHTML = strikeString;
    }
  }
  console.log(pStrikes[player]);
}
function toggleSettings() {
  if (document.getElementById("settingsWindow").hidden) {
    document.getElementById("settingsWindow").hidden = false;
    console.log("unhidden");
  } else {
    document.getElementById("settingsWindow").hidden = true;
    console.log("hidden");
  }
}
