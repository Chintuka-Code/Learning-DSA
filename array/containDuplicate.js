/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const frequency = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (frequency.has(element)) {
      return true;
    }
    frequency.set(element, 1);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 2]));
