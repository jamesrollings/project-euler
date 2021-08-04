/*

The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

*/

const fs = require('fs').promises;

// Disclaimer: Mathematical formula was researched, then applied to a function to return a Boolean value for each number.

function isTriangleNumber(number) {
    return Number.isInteger(Math.sqrt(8 * number + 1))
    
}

(async () => {
    console.time('Script time');
    const words = (await fs.readFile('C:\\Users\\James.Rollings\\Documents\\p042_words.txt')).toString().split(',').map((char) => char.replace(/"/g, ''));
    const result = words.reduce((list, word) => {
        const total = word.split('').reduce((acc, curr) => {
            return acc + ((curr.charCodeAt() + 1) - 65);
        }, 0)
        if (isTriangleNumber(total)) {
            list.push(total);
            return list;
        }
        return list;
    }, [])
    console.log(result.length);
    console.timeEnd('Script time'); // ~17ms avg. Original attempt was ~35ms
})();
