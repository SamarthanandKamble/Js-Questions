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

// let result = findShort("");
// console.log(result);


// Defaming IP Address 
/*
Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"


var defangIPaddr = function (address) {
  let newStr = "";
  let length = address.length;

  for (let i = 0; i < length; i++) {
    if (address[i] === ".") {
      newStr += "[" + address[i] + "]";
    } else {
      newStr += address[i];
    }
  }
  return newStr;
};

*/


/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

var numJewelsInStones = function(jewels, stones) {
    const tempArr = jewels.split("");
    let count =0;
    for(let i=0; i<stones.length; i++){
        if(tempArr.includes(stones[i])) count++;
    }
return count;
};
*/