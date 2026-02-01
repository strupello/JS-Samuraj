// // function maxFromArray(numbers) {
// //   if (numbers.length === 0) return null;

// //   let max = numbers[0];

// //   for (let i = 1; i < numbers.length; i++) {
// //     if (numbers[i] > max) {
// //       max = numbers[i];
// //     }
// //   }

// //   return max;
// // }
// // console.log(maxFromArray([3, 10, -2, 7]));
// // console.log(maxFromArray([]));

// // function f(){ return; }
// // console.log(f());

// // function usersList(user)[
// //   { id: 1, name: "Anna", active: true },
// //   { id: 2, name: "Piotr", active: false },
// //   { id: 3, name: "Kasia", active: true }
// // ]{
// // for (let i = 0; i < user.length; i++) {
// //   if (user[i].active === true) {
// //     true = usersList[i]
// //   }
// //   return true;
// // }
// // }

// // function getActiveUsers(users) {
// // const activeUsers = [];
// // for (let i = 0; i < users.length; i++) {
// //   if (users[i].active === true) {
// //     activeUsers.push(users[i]);
// //      }

// // }
// // return activeUsers;
// // }

// // const users = [
// //   { id: 1, name: "Anna", active: true },
// //   { id: 2, name: "Piotr", active: false },
// //   { id: 3, name: "Kasia", active: true }
// // ];

// // console.log(getActiveUsers(users));

// function moreThanZero(numbers) {
//   let result = [];
// for (let i = 0; i < numbers.length; i++)
//   if (numbers[i] > 0) {
//     result.push(numbers[i]);

//   }
// return result
// }
// console.log(moreThanZero([1, 5, -2, 7]));

// const button = document.querySelector('#btn');
// const result = document.querySelector('#result')

// function getRandomNumber() {
//   const random = Math.floor(Math.random() * 10);

//   if (random > 5) {
//     return random;
//   }
//   return result;
//
// }

// button.addEventListener('click', () => {
//   const number = getRandomNumber();
//   result.textContent = number;
// });

// const button = document.querySelector('#btn');
// const result = document.querySelector('#result');

// function getNumber() {
//   return 6; // ZWYKŁA LICZBA, ŻADNE NOWE FUNKCJE
// }

// button.addEventListener('click', () => {
//   const number = getNumber();

//   if (number > 5) {
//     result.textContent = number;
//   } else {
//     result.textContent = "Spróbuj jeszcze raz";
//   }
// });

// function getNumberThanTen(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// }

// console.log(getNumberThanTen([3, 7, 12, 5, 20]));
// console.log(getNumberThanTen([1, 2, 3]));

// let result = [];

// result.push(12);
// result.push(20);

// console.log(result);

// function demo(numbers) {
//   let result = [];

//   console.log('START:', result);

//   for (let i = 0; i < numbers.length; i++) {
//     console.log('Sprawdzam:', numbers[i]);

//     if (numbers[i] > 10) {
//       result.push(numbers[i]);
//       console.log('DODAJĘ -> result:', result);
//     }
//   }

//   console.log('KONIEC -> return:', result);
//   return result;
// }

// demo([3, 7, 12, 5, 20]);

// function howManyNumbersThanTen(numbers) {
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(howManyNumbersThanTen([3, 7, 12, 5, 20])); // 2
// console.log(howManyNumbersThanTen([1, 2, 3]));         // 0

// function getNumberThanFive(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 5) {
//       return numbers[i];
//     }
//   }
//   return null
// }
// console.log(getNumberThanFive([1, 3, 6, 2]));
// console.log(getNumberThanFive([1, 2, 3]));
// console.log(getNumberThanFive([1, 2, 3, 7, 7]));

// function firstEvenNumber(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       return numbers[i];
//     }
//   }
//   return null;
// }
// console.log(firstEvenNumber([1, 3, 7, 4, 9]));
// console.log(firstEvenNumber([1, 3, 5]));
// console.log(firstEvenNumber([1, 3, 10, 7, 4, 9]));
// console.log(firstEvenNumber([1, 3, 7, 8, 4, 9]));
// console.log(firstEvenNumber([1, 3, 9]));

// function firstNumberMoreThanHundred(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 100) {
//       return numbers[i];
//     }
//   }
//   return null;
// }
// console.log(firstNumberMoreThanHundred([10, 50, 120, 30]));
// console.log(firstNumberMoreThanHundred([1, 20, 99]));
// console.log(firstNumberMoreThanHundred([1, 20, 99]));
// console.log(firstNumberMoreThanHundred([1, 20, 99, 13, 2]));
// console.log(firstNumberMoreThanHundred([1, 20]));
// console.log(firstNumberMoreThanHundred([1, 20, 101, 102]));

// function firstNumberLessThanZero(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       return numbers[i];
//     }
//   }
//   return null;
// }
// console.log(firstNumberLessThanZero([3, 5, -2, 7]));
// console.log(firstNumberLessThanZero([1, 2, 3]));
// console.log(firstNumberLessThanZero([-1, 2, 3]));
// console.log(firstNumberLessThanZero([1, 2, -3]));

// function firstNumberDivisibleByThree(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//       return numbers[i];
//     }
//   }
//   return null;
// }
// console.log(firstNumberDivisibleByThree([2, 4, 9, 7] ));
// console.log(firstNumberDivisibleByThree([18, 2, 4, 9, 7] ));
// console.log(firstNumberDivisibleByThree([1, 2, 4]));

// function numbersMoreThanFive(numbers) {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 5 ) {
//       result.push(numbers[i]);
//     }
//   }
//   return result
// }
// console.log(numbersMoreThanFive([1, 6, 3, 8]));
// console.log(numbersMoreThanFive([1, 2, 3]));

function onlyEvenNumber(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(onlyEvenNumber([1, 4, 7, 8, 3]));
console.log(onlyEvenNumber([1, 3, 5]));
console.log(onlyEvenNumber([10, 8, 6, 4, 2]));

function numberMoreThanTen(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(numberMoreThanTen([3, 12, 5, 20]));
console.log(numberMoreThanTen([1, 2, 3]));

function numbersLessThanZero(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}
console.log(numbersLessThanZero([3, -1, 5, -7]));
console.log(numbersLessThanZero([1, 2, 3]));

function howMuchEvenNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(howMuchEvenNumbers([1, 4, 7, 8, 3]));
console.log(howMuchEvenNumbers([1, 3, 5]));
console.log(howMuchEvenNumbers([1, 4, 7, 8, 3, 10, 12, 14]));
console.log(
  howMuchEvenNumbers([
    1, 4, 7, 8, 3, 10, 12, 14, 10, 12, 14, 10, 12, 14, 10, 12, 14, 10, 12, 14,
    10, 12, 14,
  ]),
);

function howMuchNumberMoreThanHundred(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 100) {
      count++;
    }
  }
  return count;
}
console.log(howMuchNumberMoreThanHundred([10, 150, 30, 200]));
console.log(howMuchNumberMoreThanHundred([1, 20, 99]));

function numbersThanMoreFifty(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
      return numbers[i];
    }
  }
  return null;
}
console.log(numbersThanMoreFifty([6, 55, 7, 60, 77]));
console.log(numbersThanMoreFifty([6, 7]));

function howMuchNumberLessZero(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0)
    {
      count++;
    }
  }
  return count;
}
console.log(howMuchNumberLessZero([6, 55, 7, 60, 77]));
console.log(howMuchNumberLessZero([6, 55, 7, 60, 77, -8, -7, -6]));
