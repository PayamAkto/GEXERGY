"use strict";
console.log("Hello from outside file");
// Defining variables
var x = 5;
var y;
y = 4;
console.log("x*y =", y * x);
//alert("x*y = " + y * x);
// There are no Variable types in JS
var z = "Hello";
z = 7;
//alert(z);
// We don't have to define the variables in JS
/*s = 8;
console.log(s);*/
// JS is case sensitive. s != S
// Modern ways of defining variables
let d = 6; // to define a new variable
const f = "e"; // to define a constant
d = d + 1;
// f = "6e";
console.log("d=", d);
// Arithmatics
console.log("Modolus 2", d % 2); //Modolus
console.log("Power of 2=", d ** 2); // Power
d++; // Increment by 1
console.log("After increment d=", d);
d--; // Decrement by 1
console.log("After decrement d=", d);
d += 10; // Increment by 10 same as d = d +10;
console.log("After increment by 10 d=", d);
d -= 10; // decrement by 10 same as d = d +10;
console.log("After decrement by 10 d=", d);
// Getting user input
let age = 5; //prompt("What is you age?", 30);
console.log("Your age is", age);
//console.log("Your age is", age * 2);
if (age >= 18) {
  console.log("You are an adult.");
  console.log("Hello man.");
} else if (age > 9) {
  console.log("You are a teen.");
  console.log("Hello teen.");
} else {
  console.log("You are a kid.");
  console.log("Hello kid.");
}

// Switch-case
let v = 4; //parseInt(prompt("Please enter extension number"));
switch (v) {
  case 1:
    console.log("Thank you for contacting Mark");
  //break;
  case 2:
    console.log("Thank you for contacting Jim");
    break;
  case 3:
    console.log("Thank you for contacting Mary");
    break;
  default:
    console.log("Sorry, invalid number. Please try again");
}

// Functions
function multi(x1, y1) {
  //let r = x * y;
  //return r;
  return x1 * y1;
}

let r1 = multi(2, 3);
console.log("The return from multi(2,3)", r1);
console.log("The return from multi(2,3)", multi(2, 3));

function multi11() {
  // reading the values from the form inputs user the form name and the input names
  let x1 = document.forms.f1.n1.value;
  let y1 = document.forms.f1.n2.value;
  let r = x1 * y1;
  console.log(r);
  // Writing the results back to the HTML page
  document.getElementById("res").innerHTML =
    "<h2>The multiplication results is: " + r + "</h2>";
  return false;
}
