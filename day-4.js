/*
Question:
Use .filter() to return only the kids who can have the greatest number of 
candies after receiving the extra candies.
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
*/

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

const maxCandies = Math.max(...candies);
console.log(maxCandies);

const findMax = candies.filter((candy) => candy + extraCandies >= maxCandies);

console.log(findMax);
