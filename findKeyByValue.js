const findKeyByValue = (object, value) => {
  //scan the object and return the first key which contains the given value
  let arrayOfKeys = Object.keys(object);
  
  for (let key of arrayOfKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;