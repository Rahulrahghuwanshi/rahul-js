// ise hum jab use krenge jab hum cahate hen ki atleast ek bar hamar copde run ho cahe condition true ho ya false ho 
// phle initilazation  var ,let ,const 
// do {
//     // statement jo krana ho // code
//     // ++ incremnt  / --decrement 
// }while(condition);
// q.1 number print 1 to 5 
// let a = 1;
// do {
//     console.log(a);

// a++ ;
// }while(a<=10);
// const prompt =require('prompt-sync')(); // ye niche prompt ke liye he
let num = Number(prompt("enter your num to print table"));
let b = 1;
do{
    console.log(`${num} X ${b} = ${b*num} \n`);
    b++;
    
}while(b<=10);