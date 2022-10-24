const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
  const arrayOfKeys = Object.keys(obj1);
  
  if (arrayOfKeys.length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key of arrayOfKeys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;