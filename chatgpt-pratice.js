function maxFromArray(numbers) {
  if (numbers.length === 0) return null;

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
console.log(maxFromArray([3, 10, -2, 7]));
console.log(maxFromArray([]));

function f(){ return; }
console.log(f());