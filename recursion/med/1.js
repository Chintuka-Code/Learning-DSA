/**
Reverse an array
*/

let reverseArray = [];
function reverse(array, i) {
  if (array.length === i) return;
  reverse(array, i + 1);
  reverseArray.push(array[i]);
}

reverse([1, 2, 3], 0);

console.log(reverseArray);

// Using Two Pointer Method Recursion

function twoPointerReverse(i, j, arr) {
  if (i >= j) return arr;
  const jValue = arr[j];
  const iValue = arr[i];
  arr[i] = jValue;
  arr[j] = iValue;

  return twoPointerReverse(i + 1, j - 1, arr);
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(twoPointerReverse(0, arr.length - 1, arr));

// Without recursion Two Pointer to reverse the string.
function reverseIterative(arr) {
  let j = arr.length - 1;
  for (let i = 0; i <= j; i++) {
    const jValue = arr[j];
    const iValue = arr[i];
    arr[i] = jValue;
    arr[j] = iValue;
    j--;
  }

  return arr;
}

function reverseOnePointer(arr) {
  for (let i = 0; i <= arr.length - i - 1; i++) {
    const j = arr.length - i - 1;
    const jValue = arr[j];
    const iValue = arr[i];
    arr[i] = jValue;
    arr[j] = iValue;
  }
}

reverseOnePointer(arr);
console.log(arr);
