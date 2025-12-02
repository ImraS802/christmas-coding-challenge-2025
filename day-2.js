/*
Pair up the elements such that
You pair the 1st with the 2nd,
the 3rd with the 4th,
the 5th with the 6th,
and so on.

Input: nums = [1, 7, 3, 4]
Pairs: (1 + 7) = 8, (3 + 4) = 7
Output: 8
*/

let nums = [1, 7, 3, 4];
let maxSum = 0;

for (let i = 0; i < nums.length; i += 2) {
  let sum = nums[i] + nums[i + 1];
  if (sum > maxSum) {
    maxSum = sum;
  }
}

console.log(maxSum);
