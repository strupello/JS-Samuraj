// const userName = "Irek;"
// const age = 34;
// const isAdmin = false;

// if ( age >= 18 ) {
//     console.log("No ten prze chuj jest pełnoletni");
// } else {
//     console.log("A ta małoletnia jebana pała.");
// }

// const scores = [12, 55, 8, 101, 33];

// if ( scores[0] >= scores[scores.length - 1] ) {
//     console.log("pierwszy wygrywa");
// } else {
//     console.log("ostatni wygrywa");
// }

// const text = "dota lol cs valorant".split(' ');
// console.log(text[0]);
// console.log(text[text.length - 1]);
// console.log(text.includes("cs"));

// const hasGold = false;
// const hasSword = false;

// if (hasGold && hasSword) {
//     console.log("ready");
// } else if  (hasGold || hasSword) {
//     console.log("almost");
// }
// else { console.log("nope");}

// const kills = [0, 3, 15, 22, 1, 18];
// let proCount = 0;
// for (let i = 0; i < kills.length; i++) {
//   if (kills[i] >= 15) {
//     proCount = proCount + 1;
//   }
// }
// if (proCount >= 2) {
//     console.log("PRO");
// } else {
//     console.log("CASUAL");
// }
// console.log(proCount);

// const temp = 16;

// if (temp < 0) {
//   console.log("Mróz");
// } else if (temp <= 15) {
//   console.log("zimno");
// } else {
//   console.log("ciepło");
// }

// const prices = [12, 55, 8, 101, 33];

// if (prices[0] >= prices[prices.length - 1]) {
//   console.log("first cheaper");
// } else {
//   console.log("last cheaper");
// }

// const levels = [1, 4, 7, 2, 9, 10, 3];
// let howManyLevels = 0;
// for (let i = 0; i < levels.length; i++) {
//   if (levels[i] >= 7) howManyLevels = howManyLevels + 1;
// }
// if (howManyLevels >= 3) {
//   console.log("HIGH LEVEL");
// } else {
//   console.log("LOW LEVEL");
// }
// console.log(howManyLevels);

// const sentence = "js jest trudny ale wchodzi".split(" ");
// const quantitySentence = sentence.length;
// const checkTextOnSentence = sentence.includes("trudny");
// console.log(quantitySentence);
// console.log(checkTextOnSentence);

// const hasKey = true;
// const hasTicket = false;

// if (hasKey && hasTicket) {
//   console.log("Wchodzisz");
// } else if (hasKey || hasTicket) {
//   console.log("prawie");
// } else {
//   console.log("nie wchodzisz");
// }

// const numbers = [5, 6, 8, 9, 16, 78, 66];
// let howManyNumbers = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 7) howManyNumbers = howManyNumbers + 1;
// }
// if (howManyNumbers <= 7) {
//   console.log("It is a enough");
// } else {console.log("To little");}

// console.log(howManyNumbers);


const points = [2, 0, 5, 7, 1, 9];
let howManyPointsAboveFour = 0;

for (let i = 0; i < points.length; i++) {
  if (points[i] > 4) howManyPointsAboveFour = howManyPointsAboveFour + 1;
}
if (howManyPointsAboveFour >= 3) {
  console.log("GOOD");
} else { console.log("BAD");
}
console.log(howManyPointsAboveFour);