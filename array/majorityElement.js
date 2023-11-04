/**
Find the Majority Element that occurs more than N/2 times.
Moore’s Voting Algorithm
*/

// TO become majority greater than n/2. The count of that element will never become zero. So here we are going if the element === array[i], count++ else count--. If count become zero that means that element is not majority, and we re assign new element consider as new majority element.

function majorityElement(array) {
  let count = 0;
  let element = 0;
  for (let i = 0; i < array.length; i++) {
    if (!count) {
      element = array[i];
    }

    if (array[i] === element) {
      count++;
    } else {
      count--;
    }
  }

  let checkCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      checkCount++;
    }
  }

  return Math.floor(checkCount / 2) >= Math.floor(array.length / 2)
    ? element
    : -1;
}

console.log(majorityElement([3, 2]));
