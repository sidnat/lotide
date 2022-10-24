const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual(1, "test");
assertEqual("test", "t3st");
assertEqual("one", "One");
assertEqual("two", "two");

// 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
// ✅✅✅ Assertion Passed: 1 === 1
// 🛑🛑🛑 Assertion Failed: 1 !== 2
// 🛑🛑🛑 Assertion Failed: 1 !== test
// 🛑🛑🛑 Assertion Failed: test !== t3st
// 🛑🛑🛑 Assertion Failed: one !== One
// ✅✅✅ Assertion Passed: two === two