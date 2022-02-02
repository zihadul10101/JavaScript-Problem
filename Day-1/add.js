// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.
// Example

// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

// Hints

// Arithmetic Operators
// Rest Operator
// forEach()

function add(param1, param2) {
  return param1 + param2;
}

function add2(...param1) {
  return param1.reduce((a, b) => add(a, b), 0)
}

function totalSum(...param1) {
    let total = 0;
    param1.forEach(perElement => {
        total += perElement
    
    })
    return total;
}
console.log(totalSum(29,5,4));
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));