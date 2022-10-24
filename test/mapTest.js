const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["bacon", "flower", "laptop", "orange"];
const words3 = ["blue", "wireless", "driveway", "lock", "watch"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

console.log(results1);
console.log(results2);
console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'b', 'f', 'l', 'o' ]);
assertArraysEqual(results3, [ 'b', 'w', 'd', 'l', 'w' ]);

// [ 'g', 'c', 't', 'm', 't' ]
// [ 'b', 'f', 'l', 'o' ]
// [ 'b', 'w', 'd', 'l', 'w' ]
// ✅✅✅ Array Assertion Passed: g,c,t,m,t === g,c,t,m,t
// ✅✅✅ Array Assertion Passed: b,f,l,o === b,f,l,o
// ✅✅✅ Array Assertion Passed: b,w,d,l,w === b,w,d,l,w