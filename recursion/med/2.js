function fibonacci(num) {
  let sum = 0;
  for (let i = 2; i < num; i++) {
    sum = i - 1 + i - 2;
  }
  return sum;
}

console.log(fibonacci(4));

// Using Recursion
function fibonacci2(num) {
  if (num <= 1) return num;

  return fibonacci2(num - 1) + fibonacci2(num - 2);
}

console.log(fibonacci2(4));
