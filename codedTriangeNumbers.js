/*

The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

*/

const fs = require('fs').promises;

function isTriangleNumber(number) {
    return Number.isInteger(Math.sqrt(8 * number + 1)) // Disclaimer: Mathematical formula was researched, then applied to a function to return a Boolean value for each number.
    
}

const arrAlphabet = [...Array(26).keys()].map((key, index) => ({[String.fromCharCode(65 + index)]: key + 1}))

function getPositionFromLetter(letter) {
    return Object.values(arrAlphabet.find((element) => element[letter]))[0]
}

(async () => {
    const words = await fs.readFile('C:\\Users\\James.Rollings\\Documents\\p042_words.txt')
    const arrWords = words.toString().split(',').map((word) => word.replace(/"/g, ''));

    const charNums = arrWords.map((word) => word.split('').map((letter) => getPositionFromLetter(letter)));

    const sum = charNums.map((arrNum) => [arrNum.reduce((acc, curr) => acc + curr)]);

    const triangleWords = [];

    sum.forEach((number) => {
        if (isTriangleNumber(number[0])) {
            triangleWords.push(number[0])
        }
    })
    console.log(triangleWords.length)
})();
