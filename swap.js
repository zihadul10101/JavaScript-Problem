var a = 5;
var b = 7;
// console.log("before swap: a=",a, "b =",b);
var temp = a;
a = b;
b = temp;
// console.log("after swap: a=",a, "b =",b);
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
// console.log("after swap: a=",a, "b =",b);
var p = 5;
var q = 7;
[p, q] = [q, p];
// console.log("after swap: p=",p, "q =",q);
// Write a JavaScript program to swap two halves of a given array of integers of even length.[1,2,3,4,5,6]
function halv_array_swap(iarra) {
    if (((iarra.length)%2)!=0)
      {
      return false;
      }
  
    for (var i = 0; i < iarra.length / 2; i++) {
      var tmp = iarra[i];
      iarra[i] = iarra[i + iarra.length / 2];
      iarra[i + iarra.length / 2] = tmp;
    }
    return iarra;
  }
  
  console.log(halv_array_swap([1,2,3,4,5,6]))
  console.log(halv_array_swap([1,2,3,4,5,6,7]))
  