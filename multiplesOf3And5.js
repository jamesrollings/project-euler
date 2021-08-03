/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. 

Find the sum of all the multiples of 3 or 5 below 1000.
*/

const limit = 1000;

const sum = [...Array(limit)].fill().map((_, i) => i).reduce((acc, curr) => curr % 3 === 0 || curr % 5 === 0 ? acc + curr : acc + 0)

console.log(sum);
