/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
const initial = [...Array(100)].fill().map((_, i) => i + 1);

const nums = [];

initial.forEach((v, i) => {
    if ([1, 2].includes(v)) {
        nums.push(v)
        return
    }

    const num = nums[i-2] + nums[i-1];
    if (num <= 4000000) {
        nums.push(num);
    }
})

console.log(nums.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr));