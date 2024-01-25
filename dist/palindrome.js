"use strict";
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
// Contoh penggunaan fungsi
const testStrings = [
    'Katak',
    'Baju',
    'Kakak',
    'Kakek',
];
testStrings.forEach((str, index) => {
    const result = isPalindrome(str);
    console.log(`Test ${index + 1}: "${str}" is ${result ? 'a palindrome' : 'not a palindrome'}`);
});
