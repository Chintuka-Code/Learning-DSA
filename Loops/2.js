/**
 *
 **
 ***
 ***
 ****
 *****
 */

function print() {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str += i;
    }

    console.log(str);
    str = "";
  }
}

print();
