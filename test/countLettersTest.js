const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");

console.log('LHL: ', countLetters('LHL'));
console.log('Sid: ', countLetters('Sid'));
console.log('SSSsssSSsSSS: ', countLetters('SSSsssSSsSSS'));
console.log('camelCase: ', countLetters('camelCase'));
console.log('here is a full sentence: ', countLetters('here is a full sentence'));

assertEqual(countLetters('LHL').L, 2);
assertEqual(countLetters('LHL').H, 1);
assertEqual(countLetters('SSSsssSSsSSS').S, 8);

// ✅✅✅ Assertion Passed: 2 === 2
// ✅✅✅ Assertion Passed: 1 === 1
// ✅✅✅ Assertion Passed: 8 === 8