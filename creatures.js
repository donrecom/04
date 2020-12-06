console.log("Big Bang !!!");

let InstalCreatorsData = [];
let allCreatures = []; // array for menagerie creatures
var generation = 0; // for 1-st generation
var id = 0; // counter of creatur
var type = 1,
  subType = "",
  mood = "";
installData();

timerOfWarld();

// InstallCreatures();

function installData() {
  // count of              1.cycleTime  2.lifeTimeMenagerie   3.lifespan
  let InstalCreatorsData1 = [100, 400, 10];
  // typeCreature:         4.Wood   5.WoodFemale   6.Steel   7.SteelFemale   8.Spirit     9.SpiritFemale
  let InstalCreatorsData2 = [12, 6, 12, 6, 12, 6];
  //  typeWaterCreature:   10. WaterIce   11.WaterIceFemale   12.Water   13.WaterIceFemale  14.WaterSream   15.WaterSream
  InstalCreatorsData3 = [4, 2, 4, 2, 4, 2];
  let sum = 0;
  for (i = 0; i < 6; i = i + 2) {
    sum += InstalCreatorsData2[i];
    sum += InstalCreatorsData3[i];
  }
  InstalCreatorsData = InstalCreatorsData1.concat(
    InstalCreatorsData2,
    InstalCreatorsData3,
    [sum]
  );
  // returne(InstalCreatorsData);
}
function timerOfWarld() {
  NascenceCreatures();
  NascenceCreatures();
  NascenceCreatures();

  /*
timer = setInterval(NascenceCreatures(), InstalCreatorsData[0]); // repeat InstallCreatures after t msec 
setTimeout(() => {
  clearInterval(timer);
  console.log("End of the Warld !");
}, InstalCreatorsData[1]); // t max - when to stop output
*/
}

function NascenceCreatures() {
  console.log("generation "+generation);
  if (generation == 0) {
    InstallCreatures();
  } else {
    meeting();
  }
}

function InstallCreatures() {
  console.log("Generation " + generation);
  let gend = "",
    nameCr = "",
    age = 0,
    lifespan = 10,
    parent1 = 0,
    parent2 = 0;
  for (InstDat = 3; InstDat < 14; InstDat += 2) {
    countOfType = InstalCreatorsData[InstDat];
    countOfFam = InstalCreatorsData[InstDat + 1];
    for (CreatorOfType = 1; CreatorOfType <= countOfType; CreatorOfType++) {
      gend = CreatorOfType <= countOfFam ? "female" : "male";
      nameCr = fname(gend);
      switchTypeSubTypeMood(type);
      let instCr = [
        generation, // 0
        id, // 1
        gend, // 2
        nameCr, // 3
        age, // 4
        lifespan, // 5
        parent1, // 6
        parent2, // 7
        Type, // 8
        subType, // 9
        mood, // 10
      ];
      console.log(instCr);
      allCreatures.push(instCr);
      id++;
    }
    type++;
  }
  generation++;
  id--;
}

function meeting() {
  let arr = mixCreatures();
  for (i = 0; i < arr.length; i = i + 2) {
    meetingtolk(arr[i], arr[i + 1]);
    lifespanFunc(arr[i], arr[i + 1]);
    if (
      allCreatures[arr[i]][8] > 2 &&
      allCreatures[arr[i + 1]][8] > 2 &&
      allCreatures[arr[i]][2] != allCreatures[arr[i + 1]][2]
    ) {
      BirthCreatures(arr[i], arr[i + 1]);
    }
  }
}

function meetingtolk(Creator1, Creator2) {
  let hi1 = allCreatures[Creator1][2] == "male" ? "Mr. " : "Miss ";
  let hi2 = allCreatures[Creator2][2] == "male" ? "Mr. " : "Miss ";
  let dialog =
    "-Hello " +
    hi2 +
    allCreatures[Creator2][3] +
    "-" +
    allCreatures[Creator2][9] +
    "      -Hello " +
    hi1 +
    allCreatures[Creator1][3] +
    "-" +
    allCreatures[Creator1][9];
  console.log(dialog);
}

function lifespanFunc(Creator1, Creator2) {
  // 1-Wood 2-Steel 3-Spirit 4-Water  ;  41+ 12-  23+- 24-  31+  43- (1+ after die - 14 not++)
  coupleType =
    toString(allCreatures[Creator1][8]) + toString(allCreatures[Creator2][8]);
  let lifespan1 = 0,
    lifespan2 = 0;
  switch (
    coupleType // if types equal:
  ) {
    case "14":
      lifespan2++;
      break;
    case "41":
      lifespan1++;
      break;
    case "12":
      lifespan1--;
      break;
    case "21":
      lifespan2--;
      break;
    case "23":
      lifespan1++;
      lifespan2--;
      break;
    case "32":
      lifespan1--;
      lifespan2++;
      break;
    case "24":
      lifespan1--;
      break;
    case "42":
      lifespan2--;
      break;
    case "31":
      lifespan1++;
      break;
    case "13":
      lifespan2++;
      break;
    case "43":
      lifespan1--;
      break;
    case "34":
      lifespan2--;
      break;
  }
  allCreatures[Creator1][5] += lifespan1; //lifespan +1/0/-1
  allCreatures[Creator2][5] += lifespan2; //lifespan +1/0/-1
}

function mixCreatures() {
  let arr =[];
  let i, j;
  for (i = 0; i < allCreatures.length; i++) {
    arr[i] = allCreatures[i][1]; // id
  }
  var cr1, cr2;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    cr1 = arr[j];
    arr[j] = arr[i];
    arr[i] = cr1;
  }
  return arr;
}

function BirthCreatures(Creator1, Creator2) {
  console.log("Ua-Ua-Ua!");
  id++;
  let age = 0,
    lifespan = 10,
    parent1 = Creator1,
    parent2 = Creator2,
    type = 1;
  let gend;
  let nameCr;
  gend = CreatorOfType <= countOfFam ? "female" : "male";
  nameCr = fname(gend);
  switchTypeSubTypeMood(type);
  let instCr = [
    generation,
    id,
    gend,
    nameCr,
    lifespan,
    parent1,
    parent2,
    Type,
    subType,
    mood,
  ];
  console.log(instCr);
  allCreatures.push(instCr);
}

function switchTypeSubTypeMood(type) {
  switch (
    type // type: 1,2,3,4 ;  subtype: Wood Steel Spirit WaterIce Water WaterSream)
  ) {
    case 1:
      Type = type;
      subType = "wood";
      break;
    case 2:
      Type = type;
      subType = "steel";
      break;
    case 3:
      Type = type;
      subType = "spirit";
      break;
    case 4:
      Type = type;
      subType = "waterIce";
      break;
    case 5:
      Type = type - 1;
      subType = "water";
      break;
    case 6:
      Type = type - 2;
      subType = "waterSream";
      break;
  }

  switch (
    rnd(3, 0) // mood
  ) {
    case 1:
      mood = talk();
      break;
    case 2:
      mood = smile();
      break;
    case 3:
      mood = cry();
      break;
  }
}

function smile(Creator) {
  return "Ж:-D  Ha-ha!";
}
function cry(Creator) {
  return "Ж:'(  wee-wee.. ";
}
function talk(Creator) {
  return "Ж:-O  bla-bla";
}

function death() {
  for (let i = allCreatures[0].length - 1; i >= 0; i--) {
    if (allCreatures[i][5] - allCreatures[i][4] <= 0) {
      if (allCreatures[i][8] == 1) {
        // if type=wood then 50% --> BirthCreatures
        if (rnd(2, -1) == 1)
          BirthCreatures(allCreatures[i][1], allCreatures[i][1]);
      }
      allCreatures[i] = allCreatures[allCreatures[0].length - 1];
      allCreatures.pop();
    }
  }
}

function fname(gender) {
  // come up with a name
  consonants = [
    `q`,
    `w`,
    `r`,
    `t`,
    `n`,
    `m`,
    `p`,
    `s`,
    `d`,
    `f`,
    `g`,
    `h`,
    `j`,
    `k`,
    `l`,
    `z`,
    `x`,
    `c`,
    `v`,
    `b`,
  ];
  consonantsLen = consonants.length; // agree / array value
  vowels = ["e", "y", "u", "o", "a"];
  vowelsLen = vowels.length; //vowel / array value
  femEndingNames = ["y", "a", "e"];
  femEndNamesLen = femEndingNames.length; // end female names / array value
  nameLen = rnd(10, 1); //name length from 2 to 11 letters
  nameCreature = ""; // empty name
  if (gender == "female") {
    vowelСonsonantSwitch = -1;
  } else {
    vowelСonsonantSwitch = 1;
  }
  let letter = "";
  for (letterName = 0; letterName < nameLen; letterName++) {
    // choose the ending of the female/male name depends of gender
    if (vowelСonsonantSwitch == -1) {
      // first choise - random female ending of name, else - random vowel
      if (letterName == 0) {
        letter = femEndingNames[rnd(femEndNamesLen, -1)];
      } else {
        letter = vowels[rnd(vowelsLen, -1)];
      }
    } else {
      letter = consonants[rnd(consonantsLen, -1)];
    }
    // add letter first or other
    if (letterName == nameLen - 1) letter=letter.toUpperCase();
        nameCreature =letter + nameCreature;
    vowelСonsonantSwitch = -vowelСonsonantSwitch;
  }
  return nameCreature;
}

function rnd(a, b) {
  // random element of the array
  return Math.ceil(Math.random() * a + b);
}
//-----------------------------------------------------
/*    class meeting {}    class tolk{}     class birth{}     class death{}   */

function Entity(N, name_, age, lifespan, gender, prnt1, prnt2, type) {
  // creature constructor
  this.N = Entity.N;
  this.name_ = Entity.name_;
  this.age = Entity.age;
  this.lifespan = lifespan;
  this.gender = gender;
  this.prnt1 = prnt1;
  this.prnt2 = prnt2;
  this.type = type;
}

//function filling(n1) { // функция
//   var all=new Entity  }
/*  tolk{}  laugh{}   cry{}   childbirth{}    death{}    } // console.log('Creatures simulator ended') */
