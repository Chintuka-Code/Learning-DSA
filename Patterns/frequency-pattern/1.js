const same = (num, num2) => {
  const frequencyOne = {};
  const frequencyTwo = {};
  const arrayOne = num.toString();
  const arrayTwo = num2.toString();

  for (const value of arrayOne) {
    frequencyOne[value] = (frequencyOne[value] || 0) + 1;
  }

  for (const value of arrayTwo) {
    frequencyTwo[value] = (frequencyTwo[value] || 0) + 1;
  }

  for (const key in frequencyOne) {
    if (frequencyOne[key] !== frequencyTwo[key]) {
      return false;
    }
  }

  return true;
};

// console.log(same([1, 1, 3], [1, 4, 9]));
console.log(same(182, 281));
console.log(same(34, 14));
console.log(same(3589578, 5879385));
