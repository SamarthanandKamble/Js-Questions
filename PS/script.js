/* let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

let positiveCount = 0;
let negativeCount = 0;
let result = input.reduce((acc, curr) => {
  if (input > 0) {
    if (curr > 0) {
      positiveCount++;
    } else {
      console.log(`negativeCount : ${negativeCount}`);
      negativeCount = negativeCount + curr;
    }

    return [positiveCount, negativeCount];
  } else {
    return;
  }
}, []);
console.log(result);
*/

function findShort(s) {
  return s.split(" ").reduce((acc, curr) => {
    console.log(`acc :${acc} curr:${curr}`);
    acc <= curr.length ? "" : (acc = curr.length);
    return acc;
  }, Infinity);
}

let result = findShort("");
console.log(result);
