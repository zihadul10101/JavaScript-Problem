// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be addTwoDigits(n) = 11.

// Hint

// split()
// parseInt()
// toString()
// reduce()


// 1st time solved
const addTwoDigits = (n) =>
  n
    .toString()
    .split("")
    .map(char => +char)
    .reduce((a, b) => a + b, 0);

console.log(addTwoDigits(29));

// 2nd time solved
let a=12;
let x = 0;
let y=a.toString().split("").map(v =>{
    x+=Number(v);
})
console.log(x);
// 2nd time solved
const testFun = (a) =>{
    const num = a.toString().split("");
    console.log(num);
    console.log(+num[0]+(+num[1]));
}