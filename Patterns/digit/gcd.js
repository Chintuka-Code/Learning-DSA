function gcd(num1, num2) {
  while (num2 > 0 && num1 > 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }

  return num1 > 0 ? num1 : num2;
}

console.log(gcd(10, 12));
console.log(gcd(20, 40));
console.log(gcd(11, 12));
