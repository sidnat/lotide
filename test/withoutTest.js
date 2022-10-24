const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(['1', 2, 4, '9'], [2, '9']), ['1', 4]);
assertArraysEqual(without(['1', 2, 4, '3', '9'], ['3', '9']), ['1', 2, 4]);
assertArraysEqual(without(['1', '36', 2, 46, '9', 'hello', 'goodbye'], [2, 46, 'hello', '9']), ['1', '36', 'goodbye']);
assertArraysEqual(without([44, '1', 2, true, false, 4, '9'], [true, 2, 44]), ['1', false, 4, '9']);

// ✅✅✅ Array Assertion Passed: 2,3 === 2,3
// ✅✅✅ Array Assertion Passed: 1,2 === 1,2
// ✅✅✅ Array Assertion Passed: 1,4 === 1,4
// ✅✅✅ Array Assertion Passed: 1,2,4 === 1,2,4
// ✅✅✅ Array Assertion Passed: 1,36,goodbye === 1,36,goodbye
// ✅✅✅ Array Assertion Passed: 1,false,4,9 === 1,false,4,9