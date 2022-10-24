const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test code
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words).length, 4);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Lighthouse");

// ✅✅✅ Assertion Passed: 2 === 2
// 🛑🛑🛑 Assertion Failed: 2 !== 4
// ✅✅✅ Assertion Passed: Lighthouse === Lighthouse
// 🛑🛑🛑 Assertion Failed: Labs !== Lighthouse
