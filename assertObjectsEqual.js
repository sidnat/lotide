const eqObjects = require('./eqObjects');

const assertObjectsEqual = (testObject, solution) => {
  const inspect = require('util').inspect;

  if (eqObjects(testObject, solution) === true) {
    console.log(`✅✅✅ Object Assertion Passed: ${inspect(testObject)} === ${inspect(solution)}`);
  } else {
    console.log(`🛑🛑🛑 Object Assertion Failed: ${inspect(testObject)} !== ${inspect(solution)}`);
  }
};

module.exports = assertObjectsEqual;