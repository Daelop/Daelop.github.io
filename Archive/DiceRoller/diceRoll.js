module.exports = { rollDice };

//rolls with preset parameters based on user's weapon selection
function rollWeapon() {
  const weaponType = document.getElementById("weaponType").value;
  switch (weaponType) {
    case "club":
      rollDice(4, 1);
      break;
    case "greatclub":
      rollDice(8, 1);
      break;
    case "dagger":
      rollDice(4, 1);
      break;
    case "handaxe":
      rollDice(6, 1);
      break;
    case "javelin":
      rollDice(6, 1);
      break;
    case "lighthammer":
      rollDice(4, 1);
      break;
    case "mace":
      rollDice(6, 1);
      break;
    case "quarterstaff":
      rollDice(6, 1);
      break;
    case "sickle":
      rollDice(4, 1);
      break;
    case "spear":
      rollDice(6, 1);
      break;
    case "lightcrossbow":
      rollDice(8.1);
      break;
    case "dart":
      rollDice(4, 1);
      break;
    case "shortbow":
      rollDice(6, 1);
      break;
    case "sling":
      rollDice(4, 1);
      break;

    case "battleaxe":
      rollDice(8, 1);
      break;
    case "flail":
      rollDice(8, 1);
      break;
    case "glaive":
      rollDice(10, 1);
      break;
    case "greataxe":
      rollDice(12, 1);
      break;
    case "greatsword":
      rollDice(6, 2);
      break;
    case "halberd":
      rollDice(10, 1);
      break;
    case "lance":
      rollDice(12, 1);
      break;
    case "longsword":
      rollDice(8, 1);
      break;
    case "maul":
      rollDice(6, 2);
      console.log("maul");
      break;
    case "morningstar":
      rollDice(8, 1);
      break;
    case "pike":
      rollDice(10, 1);
      break;
    case "rapier":
      rollDice(8, 1);
      break;
    case "scimitar":
      rollDice(6, 1);
      break;
    case "shortsword":
      rollDice(6, 1);
      break;
    case "trident":
      rollDice(6, 1);
      break;
    case "warpick":
      rollDice(8, 1);
      break;
    case "warhammer":
      rollDice(8, 1);
      break;
    case "whip":
      rollDice(4, 1);
      break;

    case "handcrossbow":
      rollDice(6, 1);
      break;
    case "heavycrossbow":
      rollDice(10, 1);
      break;
    case "longbow":
      rollDice(8, 1);
      console.log("longbow");
      break;
    default:
      console.error("invalid input")
    }
}

//generates a random number for the rollDice function to use
function randomNum(dice) {
  return Math.floor(Math.random() * dice + 1);
}

//creates a function to be used by the webpage
function rollDice(diceType, diceQuantity) {
  //creates an array to output the results of the dice rolls
  const diceArray = [];
  //Establishes a variable for the dice total
  let diceTotal = 0;
  //allows user input for the quantity of dice
  for (diceQuantity > 0; diceQuantity--; ) {
    //Rolls the specified dice and generates a result
    let diceResult = randomNum(diceType);
    //Pushes the dice result to the end of the array
    if (diceArray.length > 0) {
      diceArray.push(" " + diceResult);
    } else {
      diceArray.push(diceResult);
    }
    //Adds the dice result to the total
    diceTotal += diceResult;
  }
  //outputs the results and total to the webpage
  document.getElementById("output").innerHTML =
    "Your rolls: " +
    diceArray +
    " <br> <br> " +
    "The total of your rolls: " +
    diceTotal;
}
