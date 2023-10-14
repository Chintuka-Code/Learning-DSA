// calculate the total sum of n number

// Complexity o(n)
function addUpTO(n) {
  let total = 0;

  for (let index = 0; index <= n; index++) {
    total += index;
  }
  return total;
}

// Complexity O(1)
function addUpTo2(n) {
  // Formula of calculating sum of n natural number.
  return (n * (n + 1)) / 2;
}

console.log(addUpTo2(3));

// Rule to Calculate Time Complexity
// 1: Constant Don't matter.
// 2: Small Terms Don't matter.
// 3: Arithmetic Operation, Variable Operation, Access Element from array(Use Index) and Object (Use Key) is constant.
// 4:Complexity of Loop is , How many times loop is running.

// Space Complexity
// 1: Most Primitive are Constant
// 2: String require O(n)
// 3: Reference type are generally O(n). Array and Object.
