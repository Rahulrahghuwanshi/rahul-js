// 1. Odd or Even
// Write a program that takes a number as input and checks if it is odd or even. Print "Even" if the number is even, and "Odd" if the number is odd.
// var a = prompt("enter your num");
// if ((a % 2) == 0){
// document.write (`${a} is even num `);
// }else {
//     document.write(`${a} is odd num`);
// }

/*2nd.  
d2. Grade Checker
Write a program that takes a student's grade as input and checks whether the grade is an A, B, C, D, or F based on the following conditions:
A: 60-100
B: 45-60
C: 35-45
F: 0-34 */

// var gradecheker = prompt("enter your marks");
// if ((gradecheker >= 60) && (gradecheker <=100)){
//     document.write(`student is first dividion pass with score of ${gradecheker}% and grade is A`)
// }
// else if((gradecheker >= 45) &&(gradecheker < 60))
//     {
//     document.write(`student is second dividion pass with score of ${gradecheker}% and grade is B`)
// }
// else if((gradecheker >= 35) &&(gradecheker < 45)){
//     document.write(`student is third dividion pass with score of ${gradecheker}% and grade is C`)
// }
// else if((gradecheker>100)){
//     document.write(`please enter valid number`)
// }
// else{
//     document.write(`student is fail pass with score of ${gradecheker}% and you are fail soo don't demotivate  do more hard work we wish you will pass in next year with first division  `)}
    
//   3...  Age Checker
// Write a program that takes a person's age as input and checks the following:

// If the age is less than 18, print "Minor".
// If the age is between 18 and 64, print "Adult".
// If the age is 65 or older, print "Senior".

// 4.4. Number Comparison
// Write a program that takes two numbers as input and prints the larger of the two numbers.
//  If both numbers are equal, print "Both numbers are equal".

// var num1 = prompt("enter num1");
// var num2 = prompt("enter num2");
// if ((num1 > num2)){
//     document.write(`${num1} is larger then ${num2}`)

// }
// else if (num1 == num2){
//     document.write(`${num1} is equal to ${num2}`)

// }
// else { 
//     document.write(`${num1} is smaller then ${num2}`)

// }

// 5.5. Leap Year Checker
// Write a program that checks if a given year is a leap year. 
// // A leap year is divisible by 4, 
// यदि वर्ष 4 से विभाज्य है, तो वह leap year होगा, लेकिन:
// यदि वह वर्ष 100 से विभाज्य है, तो वह leap year नहीं होगा, जब तक कि वह 400 से भी विभाज्य न हो।
// except for century years (years divisible by 100), which must also be divisible by 400.

// let year = prompt("enter year");
// if (((year%4 ==0) && (year%100!=0)) || (year%400 ==0)){
//     document.write(`${year} is leap year`)

// }
// else document.write(`${year} is not a leap year`);
// ----------------------------------------------------------------------------------------------------
// var x = prompt('enter your number')
// if (x >=18 && x<24){
//     document.write(`your ${x} you are adult`)
// } else {
//    document.write(`enter valid age`)
// }