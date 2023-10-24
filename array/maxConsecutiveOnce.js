/**
Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

Example 1:
Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.
Input: prices = {1, 0, 1, 1, 0, 1} 
Output: 2
Explanation: There are two consecutive 1's in the array. 
*/

function maxConsecutiveOne(array) {
  let maxOnce = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
    } else {
      count = 0;
    }

    maxOnce = maxOnce > count ? maxOnce : count;
  }
  return maxOnce;
}

console.log(maxConsecutiveOne([1, 0, 1, 1, 0, 1]));
