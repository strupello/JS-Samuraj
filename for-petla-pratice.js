// for (let i = 1; i <= 10; i++) {
//  console.log("wyświetlenie " + i);
// }

// let i = 0;
// for (; i < 20;) {
//  console.log("COś tam z numerem " + i);
//  i++;
// }

// let number = 0;
// while (number < 10) {
//  number +=2;
//  console.log(number);
// }

// let money = 100;
// while (money >= 8) {
//  console.log("Mam jeszcze " + money + " złotych. To pijemy piwko!");
//  money -= 8;
// }

// alert(`za ${money} złote, piwka już nie kupie`);

// let gasoline = 10;
// let km = 0;

// while (--gasoline) {
//   km += 18;
//   console.log(
//     "Przejechaliśmy " +
//       km +
//       " kilometrów. Została nam jeszcze " +
//       gasoline +
//       " litrów benzyny"
//   );
// }

// let study = "nie, wyrzucili mnie"

// do {
//  console.log('Idę do szkoły');
// } while (study === true);

// Pętla w pętli

// for (let a = 0; a < 3; a++) {
//   for (let b = 0; b < 10; b++) {
//     console.log(
//       `zmienna a czyli ${a} pomnoza przez przez zmienną b czyli ${b} da wynik ${
//         a * b
//       }`
//     );
//   }
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(
//       `zmienna i czyli ${i} pomnożona przez zmienną j czyli ${j} da wynik ${
//         i * j
//       }`
//     );
//   }
// }

// Pętla - tablica

// const expHero = [25, 50, 67, 122, 320, 345, 455, 500, 700, 999]

// for (let n = 0; n < expHero.length; n++) {
//     console.log(`poziom danego gracza to ${n} dla ${expHero[n]} ilości doświadczenia`);
// }

// const currentExp = 5600;
// const heroNeedExpToLvl = [400, 1400, 2400, 3600, 5200];

// for (let lvl = 0; lvl < heroNeedExpToLvl.length; lvl++) {
//     const expNeed = currentExp - heroNeedExpToLvl[lvl]
//     console.log(`Do poziomu ${lvl + 1} wymagane jest ${expNeed}`);
// }

// const usersDateBirth = [2000, 1992, 1932, 1980, 1981, 1971, 2009];
// const currentYear = 2018;

// for (let i = 0; i < usersDateBirth.length; i++) {
//  const userAge = currentYear - usersDateBirth[i];
//  // console.log(userAge);
//  console.log(`wiek użytkownika numer ${i + 1} to ${userAge}`);
// }

// const hero = [
//   "pudge",
//   "luna",
//   "mirana",
//   "rubick",
//   "twój-stary",
//   "krilan",
//   "goku",
//   "naruto",
// ];

// for (let i = 0; i < hero.length; i++) {
//   if (hero[i] === "twój-stary") {
//     console.log("To żaden hero, tylko jebany podrabianiec.");
//   } else if (hero[i] === "krilan") {
//     console.log("To jebane lamusy, nie picokwać ich");
//   } else {
//     console.log("To " + hero[i] + " prawdziwy Bohater!");
//   }
// }


const fruits = ["apple", "banana", "oragne", "grape", "citrus", "watermelon", "strawberry", "blackberry"]

for (const fruit of fruits) {
    console.log("My favorite fruit it is " + fruit);
}
