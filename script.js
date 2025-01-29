/*
Liam Matheson W#0494713
PROG2700 Client Side Programming
Exercise 3
2025-01-29
*/
// 1. Arithmetic Operators
let num1 = 413; let num2 = 612;
console.log("addition", num1 + num2);
console.log("subtraction", num1 - num2);
console.log("multiplication", num1 * num2);
console.log("division", num1 / num2);
console.log("modulo", num1 % num2);
// 2. Relational Operators
console.log("is", num1, "greater than", num2, "?", num1 > num2);
console.log("is", num1, "less than", num2, "?", num1 < num2);
console.log("is", num1, "greater than or equal to", num2, "?", num1 >= num2);
console.log("is", num1, "less than or equal to", num2, "?", num1 <= num2);
console.log("is", num1, "equal value and equal type", num2, "?", num1 === num2);
console.log("is", num1, "not equal value or equal type", num2, "?", num1 !== num2);
// 3. Logical Operators
let isSnowy = true; let isWeekend = false;
console.log("&&: is it snowy and the weekend?", isSnowy && isWeekend, "is it snowy and not the weekend?", isSnowy && !isWeekend );
console.log("||: is it snowy or the weekend?", isSnowy || isWeekend);
// 4. Assignment Operators
let score = 0;
console.log(score);
console.log("+=   ", score += 10);
console.log("-=   ", score -= 5);
console.log("*=   ", score *= 4);
// 5. User Interaction
let $prompt1 = prompt("Please enter your name:");
let $prompt2 = prompt("Please enter your age:");
console.log("Age:",$prompt1,"<===> name:", $prompt2);