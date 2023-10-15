/**
Print n to 1 number
*/

function print(n) {
  if (n == 0) return;
  console.log(n);
  n--;
  print(n);
}

// print(5);

function backTrackPrint(n, i) {
  if (i > n) return;
  backTrackPrint(n, i + 1);
  console.log(i);
}

backTrackPrint(5, 1);
