function isPrimeNumber(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(5));
