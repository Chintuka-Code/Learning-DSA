/**
 *****
 ****
 ***
 **
 *
 */

function print() {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5 - i; j++) {
      str += "*";
    }

    console.log(str);
    str = "";
  }
}

print();
