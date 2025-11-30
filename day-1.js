/*
Question:
Given an array of numbers, return the sum of all the elements.
Input: [1, 2, 3, 4]
Output: 10
*/

// solution 1:
const arrayInput = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arrayInput.length; i++) {
  sum += arrayInput[i];
}

console.log(sum);

// solution 2 wrapped in a function:
function sumArray(arrayInput) {
  let sum = 0;

  for (let i = 0; i < arrayInput.length; i++) {
    sum += arrayInput[i];
  }
  return sum;
}

console.log(sumArray(arrayInput));
