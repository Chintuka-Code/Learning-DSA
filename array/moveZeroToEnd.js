function moveZeroToEnd(array) {
  let j = -1;

  // Find First Zero position.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
  }

  return array;
}

// Test case
let testArray = [0, 1, 0, 3, 12];
let anotherTestArray = [1, 0, 0, 3, 0, 2, 0, 4, 0];

console.log(moveZeroToEnd(testArray));
// Output should be: [1, 3, 12, 0, 0]

console.log(moveZeroToEnd(anotherTestArray));
// Output should be: [1, 3, 2, 4, 0, 0, 0, 0, 0]
