// 1)
// const getMeAnswer = function(answer) {
//     console.log(1+1);
//     console.log("nie pierdol");
// }
// getMeAnswer();

// 2)
// function subtractNumbers(number1, number2) {
//     return number1 - number2;
// }
// subtractNumbers(6, 2);

// 3) Rzadko spotykana - podobno:

// const getAlert = new Function ("get", "alert(get);")
// getAlert('Ma działać!');

// 4) funkcja strzałkowa

// const showMeSometing = (ss) => {
//     console.log(ss)
// };
// showMeSometing("jebać cyganów");

// let number = 100
// const subtract = function() {
//  number--;
//  console.log(number);
// }

// const subtractBy6 = function(number) {
//     return number - 6;
// }
// const result2 = subtractBy6(20);
// console.log(result2);

// Argumenty i Parametry

// Bez paramteru

// const myNickName = function() {
//     console.log("Bzyku");
// }

//  Z Parametrem oraz argument

// const myNickName = function(userNickName) {
//     console.log("To jest twój Pan: " + userNickName);
// }
// myNickName("Bzyku");

// function checkNumber(number) {
//   if (number > 0) {
//     return "dodatnia";
//   } else if (number < 0) {
//     return "ujemna";
//   } else {
//     return "zero";
//   }
// }
// console.log(checkNumber(10));
// console.log(checkNumber(0));
// console.log(checkNumber(-5));

// function checkTemperature(temp) {
//   if (temp < 0) {
//     return "freezing";
//   }
//   if (temp < 20) {
//     return "cold";
//   }
//   if (temp < 30) {
//     return "warm";
//   }
//   return "hot";
// }
// console.log("Today night it will be " + checkTemperature(-50));
// console.log("Today is " + checkTemperature(-5));
// console.log("Today night it will be " + checkTemperature(0));
// console.log("Today is " + checkTemperature(19));
// console.log("Today night it will be " + checkTemperature(20));
// console.log("Today is " + checkTemperature(25));
// console.log("Today night it will be " + checkTemperature(29));
// console.log("Today is " + checkTemperature(30));
// console.log("Today night it will be " + checkTemperature(31));
// console.log("Today is " + checkTemperature(99));

// function canDrive(age) {
//   return age >= 18;
// }
// console.log(canDrive(14));
// console.log(canDrive(18));

// function checkTemperature2(temp) {
//   if (temp < 0) {
//     return "freezing";
//   } else if (temp < 20) {
//     return "cold";
//   } else if (temp < 30) {
//     return "warm";
//   } else {
//     return "hot";
//   }
// }
// console.log("Today night it will be " + checkTemperature2(-50));
// console.log("Today is " + checkTemperature2(-5));
// console.log("Today night it will be " + checkTemperature2(0));
// console.log("Today is " + checkTemperature2(19));
// console.log("Today night it will be " + checkTemperature2(20));
// console.log("Today is " + checkTemperature2(25));
// console.log("Today night it will be " + checkTemperature2(29));
// console.log("Today is " + checkTemperature2(30));
// console.log("Today night it will be " + checkTemperature2(31));
// console.log("Today is " + checkTemperature2(99));

// function getGrade(score) {
//   if (score < 0 || score > 100) {
//     return "invalid";
//   }
//   if (score < 50) {
//     return "F";
//   }
//   if (score < 65) {
//     return "D";
//   }
//   if (score < 80) {
//     return "C";
//   }
//   if (score < 90) {
//     return "B";
//   }
//   if (score < 101) {
//     return "A";
//   }
// }
// console.log(getGrade(-1));
// console.log(getGrade(0));
// console.log(getGrade(49));
// console.log(getGrade(50));
// console.log(getGrade(64));
// console.log(getGrade(65));
// console.log(getGrade(79));
// console.log(getGrade(80));
// console.log(getGrade(89));
// console.log(getGrade(90));
// console.log(getGrade(100));
// console.log(getGrade(101));

// const addThreeNumbers = (x, y, z) => {
//   const result = x + y + z;
//   console.log(result);
//   return result;
// };
// addThreeNumbers(3, 5, 5);
// addThreeNumbers(-1, -1, 2);

// // 1) Callbacki

// function iDontKnow(x, callback) {
//   return callback(x);
// }

// function addNumberOne(itIsNoNumberAdd) {
//   itIsNoNumberAdd++;
//   console.log(itIsNoNumberAdd);
//   return itIsNoNumberAdd;
// }
// addNumberOne(10);

// function subtractOne(itIsNoNumberSubtract) {
//   itIsNoNumberSubtract--;
//   console.log(itIsNoNumberSubtract);
//   return itIsNoNumberSubtract;
// }
// iDontKnow(21, subtractOne);

// // document.body.addEventListener("click", function () {
// //   console.log("pierwszy click z funkcja");
// // });

// // lub

// function clickClick() {
//   console.log("Inna metoda Klikania");
// }

// document.body.addEventListener("click", clickClick);

// setInterval(() => console.log("mineły 5 sek"), 5000);

// const fiveSecond = () => {
//   console.log("Mineło pięć sekund");
// }
// setInterval(fiveSecond, 5000);

// const heroLevels = [10, 15, 55, 145, 555, 678, 899, 999, 1000];

// heroLevels.forEach(level => console.log(`Level hero is ${heroLevels}`));
// heroLevels.forEach(function(heroLevels) {console.log("Levels hero is " + heroLevels);});

// // arguments

// const addItemPower = function () {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

// const usersItemPower = addItemPower (50, 144, 4444, 5555, 222222);

// console.log(addItemPower(22, 444.44, 55555, 555));

// function infoAboutPlayers(race, type, levels, powers) {
//   if (arguments.length === 0) {
//     console.log('We dont know anything about player');
//   }
//   else if (arguments.length === 1) {
//     console.log(`We know this player is ${race}`);
//   }
//   else if (arguments.length === 2) {
//     console.log(`We know this player is ${race} ${type} `);
//   }
//   else if (arguments.length === 3) {
//     console.log(`We know this player is ${race} and ${type} on ${levels} `);
//   } else {
//     console.log(`We know this player is ${race} and ${type} on ${levels} and he have ${powers} `)
//   }
// }
// console.log(infoAboutPlayers());
// console.log(infoAboutPlayers("Humanoid"));
// console.log(infoAboutPlayers("Humanoid", "mage"));
// console.log(infoAboutPlayers("Humanoid", "mage", 30));
// console.log(infoAboutPlayers("Humanoid", "mage", 30, 550));

// function aboutHeroChange(race = "Humanoid", type = "mage", levels = 30, powers = 550) {
//     return `We know this player is ${race} and ${type} on ${levels} and he have ${powers} `;
// }
// console.log(aboutHeroChange("Humanoid", "mage", 30, 550));

// function calculate(x, callback){
//     return callback(x);
// }
//     function addTen(n){
//         return n + 10;
//     }
//         function triple(n){
//         return n * 3;
//     }

// console.log(calculate(5, addTen));
// console.log(calculate(5, triple));

// function calculate2(x, y, callback){
//     return callback (x, y)
// }
//     function add(a, s) {
//         return a + s;
//     }
//     function subtract (a, s){
//         return a - s;
//     }
// console.log(calculate2(10, 5, add));
// console.log(calculate2(10, 5, subtract));

// function allInformation(...infos) {
//     console.log(infos[4]);
//     console.log(arguments[5]);
//     return infos;
// }
// allInformation("Czarek", "pieczarek", 44, 55, 77, "Kotek rozporek", 55);

// function addAllNickName(...nickNames) {
// let info = "";
// // for (let i = 0; i < nickNames.length; i++)
// //     info += `${nickNames[i]}-prze chuj wariat `;
// nickNames.forEach(function(nickName){
//     info += nickName + " prze chuj wariacina psina ";
// })
// console.log(info);
// }
// addAllNickName("Strup", 12, "Bzyku", 55, "Adamus", 44);

// // z dwoma argumentami

// function showPlayers(host, ...otherPlayers) {
//   console.log(
//     `In the game is now ${host} ${otherPlayers.length ? "and in the lost tower farming right now: " + otherPlayers + "." : "."}`,
//   );
// }
// showPlayers("Strup");
// showPlayers("Strup", "Kondzio ", "Gruby ", "Dana ");

// function showBetterPlayers(rest) {
//   return { ...rest };
// }

// console.log(showBetterPlayers(["hi", "ho2"]));

// function calculateAverage(numbers) {
//     let sum = 0;
//     for ( let i = 0; i < numbers.length; i++)
//         sum += numbers[i]
//     return sum / numbers.length
// }
// console.log(calculateAverage([1, 2, 3, 4, 5]));

// function filterEvenNumbers1(number) {
//   let filterDa = [];
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       filterDa.push(number[i]);
//     }
//   }
//   return filterDa;
// }
// console.log(filterEvenNumbers1([1, 2, 3, 4, 5, 6]));

// function filterEvenNumbers(numbers) {
//   let evenNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
