//Q1
/* var b=1;

 function outer() {
     var b=2;
     console.log(b)
     function inner() {
          b++;
         var b=3;
         console.log(b);
     }
     inner();
 }
 outer();
*/
// Q2
/*var b="MIKE";

function showName(){
     b="JOHN";
    return;
     function b(){};

}
showName();
console.log(b);
*/

// Q3
function fetch() {
    a = 5;
    console.log(a);
}
let a;
fetch();