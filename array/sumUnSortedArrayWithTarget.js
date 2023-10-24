/**
 * 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

/**
 * 
 Solving using two pointer, and calculating difference that we need to reach target, If that value store in map get it and return the index.
 */

function twoSum(nums, target) {
  const map = new Map();
  let i = 0;
  let j = nums.length - i - 1;

  while (i <= j) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }

    map.set(nums[i], i);
    diff = target - nums[j];
    if (map.has(diff)) {
      return [j, map.get(diff)];
    }

    map.set(nums[j], j);
    i++;
    j--;
  }

  return [];
}

console.log(
  twoSum([2, 7, 11, 15, 6, 45, 23, 6, 1, 0, 0, 0, 2, 6, 8, 2, 100, 100], 200)
);
