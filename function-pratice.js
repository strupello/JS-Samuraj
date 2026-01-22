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

const myNickName = function(userNickName) {
    console.log("To jest twój Pan: " + userNickName);
}
myNickName("Bzyku");
