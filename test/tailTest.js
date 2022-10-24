const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['5'] for ['0', '5']", () => {
    assert.deepEqual(tail(['0', '5']), ['5']); 
  });
});

// // OLD TEST CODE
// const assertEqual = require("../assertEqual");
// const tail = require("../tail");

// // Test code
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words).length, 2);
// assertEqual(tail(words).length, 4);
// assertEqual(tail(words)[0], "Lighthouse");
// assertEqual(tail(words)[1], "Lighthouse");

// // ✅✅✅ Assertion Passed: 2 === 2
// // 🛑🛑🛑 Assertion Failed: 2 !== 4
// // ✅✅✅ Assertion Passed: Lighthouse === Lighthouse
// // 🛑🛑🛑 Assertion Failed: Labs !== Lighthouse