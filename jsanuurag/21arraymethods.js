const numbers = [1, 2, 3, 4, 5];

numbers.pop(); // last element hta rha he

console.log(numbers);

numbers.push(6); // last me element add kr raha  //

console.log(numbers);

numbers.shift(); // first element remove kr raha he

console.log(numbers);

numbers.unshift(0); // start  element add kr raha he

console.log(numbers);

const moreNumbers = [6, 7, 8, 9, 10];
// concat do arrays ko add kr raha he

console.log(numbers.concat(moreNumbers)); 
// indexof  apna element konse no pe he 0 se start hota h indexiing
// lastindexof
// includes // element hamare array ke andr he ki nahi hai
// reverse  
// sort 
//slice
//splice     // jo remove krana  ho (2no ke ,1 ) ek element  ko  jo 2index pe ho 
console.log(moreNumbers.indexOf(6)); // 0
console.log(moreNumbers.lastIndexOf(9));// 3 no pe he 
console.log(moreNumbers.includes(6)); // true
console.log(moreNumbers.includes(11)); // false
console.log(moreNumbers.reverse()); // array ke reverse kr raha he
console.log(moreNumbers.sort()); // array ke sort kr raha he
const animals = ['dog', 'cat', 'bird', 'snake', 'lion'];
console.log(animals.sort()); // array ke sort kr raha he alphabatcaly  orignal ko hi  modify krta he  
console.log(animals.slice(1, 3)); // array ke slice kr raha he origanal me koi change nahi he last include bhi nahi hoga
console.log(animals.splice(2, 2)); // array ke splice kr raha he origanal me  change hoga he last include bhi nahi hoga  





 
