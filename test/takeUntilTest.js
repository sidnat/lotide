const assertArraysEqual = require("../assertArraysEqual");
const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log('---');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ "I've", 'been', 'to', 'Hollywood' ]
// ✅✅✅ Array Assertion Passed: 1,2,5,7,2 === 1,2,5,7,2
// ✅✅✅ Array Assertion Passed: I've,been,to,Hollywood === I've,been,to,Hollywood