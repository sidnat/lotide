//Implement the function findKey which takes in an object and a callback.
//It should scan the object
//return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  let arrayOfKeys = Object.keys(object);

  for (let key of arrayOfKeys) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKey;