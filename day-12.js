/*
Question:
Create a new array where each number is multiplied by 3. Store the result in a new array.
*/

const numbersMap = [1, 2, 3, 4];

function multiplyByThree(multi) {
  return multi * 3;
}

const result = numbersMap.map(multiplyByThree);

console.log(result);

// alternative solutions:

// 1. const result = numbers.map((num) => {
//   return num * 3;
// });

// 2. const result = numbers.map(num => num * 3);
