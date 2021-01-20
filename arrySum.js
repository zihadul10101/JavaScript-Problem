
function getArrySum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
   return sum; 
}
var numbers = [45, 65, 78, 12, 3, 54, 65];
var result =getArrySum(numbers);
console.log("total of the numbwrs: ", result);
var total =getArrySum([43,56,12,41,86]);
console.log("total of the numbwrs: ", total);