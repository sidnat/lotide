const assertObjectsEqual = require("../assertObjectsEqual");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { a: [1, 2, "hello"], b: [2]};
const cd4 = { a: [1, 2, "hello"], b: [2]};

assertObjectsEqual(cd, dc);
assertObjectsEqual(dc, cd2);
assertObjectsEqual(cd3, cd4);

// ✅✅✅ Object Assertion Passed: { c: '1', d: [ '2', 3 ] } === { d: [ '2', 3 ], c: '1' }
// 🛑🛑🛑 Object Assertion Failed: { d: [ '2', 3 ], c: '1' } !== { c: '1', d: [ '2', 3, 4 ] }
// ✅✅✅ Object Assertion Passed: { a: [ 1, 2, 'hello' ], b: [ 2 ] } === { a: [ 1, 2, 'hello' ], b: [ 2 ] }