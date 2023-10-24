/**
Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
*/

function findNonRepetitiveSentence(array) {
  let xor = 0;

  for (let i = 0; i < array.length; i++) {
    xor = xor ^ array[i];
  }

  return xor;
}

console.log(findNonRepetitiveSentence([2, 2, 1, 1, 3]));
