// const listsName = ["Franek0", "Franek1", "Franek2", "Franek3"];

// const listName = [];
// listName[0] = "Kondzio0";
// listName[1] = "Kondzio1";
// listName[2] = "Kondzio2";
// listName[3] = "Kondzio3";

// const gameNames = new Array(); // rzadziej używane.
// gameNames[0] = "Dota0";
// gameNames[1] = "Dota1";
// gameNames[2] = "Dota2";
// gameNames[3] = "Dota3";

// const lvlsHero = new Array ( 1, 2);
// lvlsHero[2] = 3;

// console.log(gameNames, listName, listsName, lvlsHero);

// console.log(typeof lvlsHero);
// console.log(typeof gameNames);

// const myArrayConst = [];
// let myArrayLet = [];

// myArrayConst[0] = "pierwszy const";
// myArrayLet[0] = "pierwszy let";
// myArrayConst = "coś innego";
// myArrayLet = "coś innego let, przy conscie nie mozna - wartosc stala";

// const nameList = ["Karol", "Konradzisko", "Irosław", "Dałmian", "Sławomir"];
// nameList[0] = nameList[1];
// const popularName = nameList[2];
// const wafelson = nameList[0];
// nameList[5] = "Mateusz";
// nameList[16] = "Hubert";

// console.log("Pan wszystkich ludzi to " + popularName);
// console.log("Wafelson " + popularName + "a to " + wafelson);
// console.log(nameList);

// delete nameList[0];

const placeWhereWasSmoking = [
  "Miejscówka",
  "Piwnica",
  "Obidza",
  "Sanatorium",
  "U Gondka",
  "U Kondzia",
];
placeWhereWasSmoking[placeWhereWasSmoking.length] = "U Grubego na browarnej";
placeWhereWasSmoking[placeWhereWasSmoking.length] = "w Górach";
placeWhereWasSmoking.length += 2; // placeWhereWasSmoking = placeWhereWasSmoking.lenght + 2;  -- dodanie dwóch kolejnych miesc w tablicy (mogą być puste)
// placeWhereWasSmoking.length = 3; // skrócenie tablicy do danej ilości
// placeWhereWasSmoking.length = 0; // wyzerowanei tablicy
console.log(placeWhereWasSmoking);
console.log(placeWhereWasSmoking.length);
console.log(placeWhereWasSmoking[placeWhereWasSmoking.length - 3]); // pokazanie ostatniego elementu.

const smokers = [];
smokers.length = 5;

console.log(smokers);
console.log(smokers.length);
