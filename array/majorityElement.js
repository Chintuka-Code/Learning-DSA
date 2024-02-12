/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let element;

  for (let i = 0; i < nums.length; i++) {
    if (!count) {
      element = nums[i];
    }

    if (nums[i] === element) {
      count++;
    } else {
      count--;
    }
  }

  return element;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
