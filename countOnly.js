const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//countOnly will be given an array and an object.
//It will return an object containing counts of everything that the input object listed.

const countOnly = (allItemsArr, itemsToCountObj) => {
  const results = {};

  for (let item of allItemsArr) {
    if (!itemsToCountObj[item]) {
      continue;
    }
    
    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);