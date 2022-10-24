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

module.exports = countOnly;