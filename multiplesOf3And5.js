/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. 

Find the sum of all the multiples of 3 or 5 below 1000.
*/

const limit = 1000;

const sum = [...Array(limit)].fill().map((_, i) => i).filter((num) => num % 3 === 0 || num % 5 === 0).reduce((acc, curr) => acc + curr);

console.log(sum);