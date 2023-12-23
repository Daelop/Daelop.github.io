// TODO
// - Adjust stats
// - Track Level
// - Create Level Up function
// - Create array of objects for enemies
// - create attack action 
// - program basic combat 
// - create placeholder display for combat (probably text based)
// - create job specific actions 
// - design display for combat
// - design and implement combat encounters
// - designate player goal 
// - Add equipment system
// - expand job system 
// - Add basic narrative elements

const Jobs = {
  knight: {
    HP: 200,
    MP: 75,
    STR: 15,
    DEX: 12,
    INT: 5,
    MND: 5,
  },
  swordsman: {
    HP: 150,
    MP: 50,
    STR: 17,
    DEX: 14,
    INT: 5,
    MND: 5,
  },
  ranger: {
    HP: 150,
    MP: 50,
    STR: 17,
    DEX: 14,
    INT: 5,
    MND: 5,
  },
  mage: {
    HP: 150,
    MP: 50,
    STR: 17,
    DEX: 14,
    INT: 5,
    MND: 5,
  },
  healer: {
    HP: 150,
    MP: 50,
    STR: 17,
    DEX: 14,
    INT: 5,
    MND: 5,
  },
};
let characters = [];
class Character {
  constructor(name, jobName, HP, MP, STR, DEX, INT, MND) {
    this.name = name;
    this.job = jobName;
    this.HP = HP;
    this.MP = MP;
    this.STR = STR;
    this.DEX = DEX;
    this.INT = INT;
    this.MND = MND;
  }
}
function newCharacter(name, jobName) {
  let job = Jobs[jobName];
  let HP = job.HP;
  let MP = job.MP;
  let DEX = job.DEX;
  let STR = job.STR;
  let INT = job.INT;
  let MND = job.MND;
  characters.push(new Character(name, jobName, HP, MP, STR, DEX, INT, MND));
  let num = characters.length + 1;
  document.getElementById("charNum").innerHTML = "Character " + num;
  if (characters.length >= 4) {
    document.getElementById("pCreate").hidden = true;
    document.getElementById("sheets").hidden = false;
    statsUpdate();
    nameJob();
  }
}
function toggleStats(player) {
  let stats = document.getElementById("stats" + player);
  if (stats.hidden === true) {
    stats.hidden = false;
  } else {
    stats.hidden = true;
  }
}
function nameJob() {
  let nameJob = document.getElementsByClassName("nameJob");
  let p = 0;
  for (let text of nameJob) {
    text.innerHTML = `Name: ${characters[p].name}  Job: ${characters[p].job}`;
    p += 1;
  }
}
function statsUpdate() {
  let stats = document.getElementsByClassName("stats");
  let p = 0;
  for (let sheet of stats) {
    sheet.innerHTML = `HP:${characters[p].HP} 
    MP:${characters[p].MP} 
    STR:${characters[p].STR} 
    DEX:${characters[p].DEX} 
    INT:${characters[p].INT} 
    MND:${characters[p].MND}`;
    p += 1;
  }
}


// function levelUp(char,level){

// }
