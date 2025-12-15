/*
You are given an array of orders.
Each order has a price and a quantity.
Calculate the total revenue using only .reduce().
Rules: 
No for, while, or forEach loop
Use .reduce()
*/

const orders = [
  {price: 10, quantity: 2},
  {price: 5, quantity: 4},
  {price: 8, quantity: 1},
];

function joinPrice(acc, order) {
  return acc + order.price * order.quantity;
}

let finalPrice = orders.reduce(joinPrice, 0); // pass an initial value (usually 0)
console.log(finalPrice);
