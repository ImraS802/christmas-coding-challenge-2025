/*
You are building a small cinema app.
The cinema has 10 seats, and at the beginning all seats are empty.
Create an array with 10 elements
Use .fill() to mark all seats as "empty"
Then mark seat 5 as "reserved" (seat numbers start at 1 for the user)*/

const seats = new Array(10);

let newSeat = seats.fill('empty');
newSeat.fill('reserved', 4, 5);

// console.log(seats);
