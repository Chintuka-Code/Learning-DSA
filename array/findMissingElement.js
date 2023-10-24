/**
Find Missing Element in sorted array.
*/

function missingElement(array) {
  let sum = 0;
  const n = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum);
  console.log((n * (n + 1)) / 2);
  return (n * (n + 1)) / 2 - sum;
}

console.log(missingElement([1, 2, 3, 5]));
