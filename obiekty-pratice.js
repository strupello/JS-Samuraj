// // const player = {
// //     name: "Bzyku",
// //     power: 700,
// //     level: 555,
// //     profesion: "Mag",
// //     transformiation: true,

// //     showPlayer: function(){
// //         console.log("Gracz " + this.name + "jest na poziomie: " + this.level + ", jego moc wynosi " + this.power + " jednostek. Jest to " + this.profesion + " po" + this.transformiation + ".");
// //     }
// // }
// // player.showPlayer();

// const player = {
//   name: "Bzyku",
//   power: 700,
//   level: 555,
//   profesion: "Mag",
//   transformation: false, // poprawiłem literówkę w nazwie ;)

//   showPlayer: function () {
//     // Używamy operatora warunkowego (tzw. ternary operator), żeby było ładniej
//     const transformStatus = this.transformation
//       ? "transformacji"
//       : "braku transformacji";

//     console.log(
//       `Gracz ${this.name} jest na poziomie ${this.level}. Moc: ${this.power}. Zawód: ${this.profesion}. Status: po ${transformStatus}.`,
//     );
//   },
// };

// player.showPlayer(); // Nie zapomnij wywołać funkcji, żeby zobaczyć efekt!

// const player1 = { name: "Bzyku", power: 700 };
// const player2 = { ...player1 }; // To jest "magiczny" sposób na realną kopię

// player2.name = "Strup";

// console.log(player1.name); // Tu zostanie Bzyku
// console.log(player2.name); // Tu będzie Strup

// const bzykuA = {
//   name: "Bzyku",
//   power: 700,
// };

// const bzykuB = { ...bzykuA };
// bzykuB.power = 1000;
// console.log("Bzyku A power:", bzykuA.power);
// console.log("Bzyku B power:", bzykuB.power);

// const kardiomonitor = {
//   model: "X-200",
//   cisnienieZakres: "0 - 300",
//   tetnoZakres: "60 - 180",
//   bateria: "85%",
// };

// let parametrDoSprawdzenia1 = "model";
// let parametrDoSprawdzenia2 = "cisnienieZakres";
// let parametrDoSprawdzenia3 = "tetnoZakres";
// let parametrDoSprawdzenia4 = "bateria";

// console.log(
//   "Dane kardiomonitora: model - " +
//     kardiomonitor[parametrDoSprawdzenia1] +
//     ", zakres ciśnienia: " +
//     kardiomonitor[parametrDoSprawdzenia2] +
//     ", zakres tętna: " +
//     kardiomonitor[parametrDoSprawdzenia3] +
//     ", stan baterii: " +
//     kardiomonitor[parametrDoSprawdzenia4] +
//     ".",
// );

// const raportDnia = {
//   data: "2026-02-19",
// };
// raportDnia.godzinyPracy = 14;
// raportDnia.czyZmeczony = true;
// raportDnia.notatki = "Trzeba powtórzyć obiekty";
// delete raportDnia.notatki;
// // 1. Dodaj do obiektu klucz 'godzinyPracy' o wartości 14 (skoro tak ciężko dziś orałeś)
// // 2. Dodaj klucz 'czyZmeczony' o wartości true
// // 3. Dodaj klucz 'notatki' o wartości "Trzeba powtórzyć obiekty"
// // 4. Usuń klucz 'notatki' (bo jednak wszystko już umiesz!)

// console.log(raportDnia);

// const team = [
//   { nickName: "bzyku", power: 500 },
//   { nickName: "Strup", power: 501 },
// ];
// team.push({ name: "Adamus", power: 502 });
// const newTeam = [...team, { nickName: "przechuj", power: 505 }];
// console.log(newTeam);
// console.log(team[0].power);
// console.log(team);

const newPatient = [
  {
    namePatient: "John",
    patientId: 12,
    disease: "Heart Attack",
    chanceToRecover: false,
  },
  {
    namePatient: "Gregory",
    patientId: 13,
    disease: "FLU",
    chanceToRecover: false,
  },
  {
    namePatient: "Anna",
    patientId: 14,
    disease: "CANCER",
    chanceToRecover: true,
  },
  {
    namePatient: "Henry",
    patientId: 15,
    disease: "COVID",
    chanceToRecover: false,
  },
];

const chanceToRecoverStatus = newPatient[0].chanceToRecover
  ? "przeżyje"
  : "nie przeżyje";
let newParametrToCheck = "namePatient";
let newParametrToCheck1 = "chanceToRecover";
console.log(
  `Pacjent: ${newPatient[0][newParametrToCheck]} ${chanceToRecoverStatus}`,
);

newPatient.push({
  namePatient: "Donald",
  patientId: 44,
  disease: "Hernia",
  chanceToRecover: false,
});
newPatient.unshift({
  namePatient: "Barrac",
  patientId: 1,
  disease: "severed penis",
  chanceToRecover: false,
});
const newPatients = [
  ...newPatient,
  {
    namePatient: "Emmy",
    patientId: 69,
    disease: "dildo in Ass",
    chanceToRecover: false,
  },
];
console.log(newPatient[5].chanceToRecover);
console.log(newPatient);
console.log(newPatients[6].disease, newPatients[6].patientId);
console.log(newPatients);

newPatients.forEach((patient) => {
  const status = patient.chanceToRecover
    ? "has a chance of survival"
    : "has no chance of survival";
  console.log(
    `This is: ${patient.namePatient} and ID: ${patient.patientId}, and is sick with ${patient.disease} and it has: ${status}`,
  );
});

// newPatients.forEach((patient) => {
//   if (patient.patientId > 15) {
//     console.log(patient);
//   }
// });

// newPatients.forEach((patient) => {
//   if (patient.chanceToRecover == true) {
//     console.log(patient);
//   }
// });

// newPatients.forEach((patient) =>{
//   if(patient.patientId % 2 === 0)
//     console.log(patient);
// });

newPatients.forEach((patient) => {
  if(patient.patientId > 13 &&
  patient.disease == "CANCER") {
    console.log(patient.namePatient);
  }
});

function getLifeExpectancy(newPatients) {
  newPatients.forEach((patient) =>{
    const status = patient.chanceToRecover
    ? "has a chance of survival"
    : "has no chance of survival";
    console.log(`Name Patient: ${patient.namePatient} status to recovery:${status}`);
  });
}
getLifeExpectancy(newPatients);

function skarbnik(newPatients) {
  newPatients.forEach((patitent) => {
    if (patient.chanceToRecover == true)
});
}