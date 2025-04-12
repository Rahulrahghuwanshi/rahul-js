// litreal sab contain kar sakta he (num,string,symbol);
// benifits ye he ki bactik ` ke andr string ${variable aa sakte hen}` 
// baktik ka use krke hum koio bhi variable ko kahio bhoi call kkar saktye hen 
let name = "raHul,amod JHA`";
let reLation = "brothers";
console.log(` ${name}  ye donno  ${reLation}  he  `)

// string properties 
// onemptied.apply


// 00 Methods (Without Argument) thi ye 
// 1. toUpperCase(); ye sabhi bword ko capital kar deta he 
console.log(name.toUpperCase());


// 2.toLowerCase();ye sabhi string ko samll kr deata he 
console.log(name.toLowerCase());


// 3.trim();  string ke start ya last ye extra sapces ko hta deta he
let sapce = "                rahulltest                           ";
console.log(sapce);
console.log("trim" + sapce.trim());


// trimStart() ye start se htayga 
console.log(sapce.trimStart());

// trimEnd() : ye end se htyga 
console.log(sapce.trimEnd());
//  00 Methods (Without Argument) thi ye 
      


//                      Methods (With Argument)
// 1.includes() ye batata he string me ky ky include he 


// // 1.includes()

// 1. includes()
// Kaam: Ye check karta hai ki string ke andar koi substring hai ya nahi.
// Important Point: Case-sensitive hota hai, matlab "hello" aur "Hello" alag-alag consider honge.
// Ye method check karta hai ki koi specific substring string mein hai ya nahi.
let str = "Hello World";
console.log(str.includes("Hello")); // true
console.log(str.includes("Hllo"));    // false
console.log(str.includes("H"));    // true



// 2. indexOf() 
// Kaam: Ye substring ka pehla occurrence ka index return karta hai.
// Important Point: Agar substring nahi milti, toh -1 return hota hai.
// Ye method tumhe substring ka pehla index (position) de deta hai, agar wo substring milti hai. Agar nahi milti, toh -1 return hota hai.
// Example:


let bt = "Hello rahul";
// 0 se count krega  
console.log(bt.indexOf("rahul"));  // 6
console.log(bt.indexOf("hi"));     // -1
// usee wo word nahi milga to -1 dega 


// 3.replace()
// 3. replace()
// Kaam: Ye ek substring ko replace karta hai doosri substring se (pehli match ko replace karega).
// Important Point: Agar tum global replacement chahte ho, toh replaceAll() use karo. Regular expressions ko bhi support karta hai.

// Ye method ek substring ko replace karta hai kisi naye substring se. Pehli match ko replace karta hai (agar globally replace karna ho, toh replaceAll() use karna padta hai).
// Example:

let ttt = "Hello World";
console.log(ttt);

console.log(ttt.replace("World", "JavaScript")); // Hello JavaScript



// // 4. replaceAll()
// Kaam: Ye string mein saare matching substrings ko replace karta hai.
// Important Point: replaceAll() sirf strings ke liye kaam karta hai, aur regex ko bhi support karta hai.
// Ye method string mein saare matches ko replace karta hai. Agar multiple same words hain, toh sabko replace kar deta hai.
// Example:

let r = "Hello World World";
console.log(r);

console.log(r.replaceAll("World", "JavaScript")); // Hello JavaScript JavaScript


// // 5.concat()
// Kaam: Do ya zyada strings ko ek saath join karta hai.
// Important Point: Strings ko merge karne ka ek simple tareeka hai. Array join karne ke liye use na karo.
// Ye method do ya zyada strings ko ek saath join (concatenate) karta hai.
// Example:

let str1 = "Hello ";
let str2 = "babuuuuuu";
console.log(str1);
console.log(str2);

console.log(str1.concat(str2)); // Hello World




// 6.padStart()
// 6. padStart()
// Kaam: String ke beginning mein padding (extra characters) add karta hai.
// Important Point: Agar string already required length se badi hai, toh koi padding nahi add hoti.

// Ye method string ke beginning mein padding (extra characters) add karta hai, takki string ek certain length tak reach kare.
// Example:
let s = "5";
console.log(s.padStart(3, "0")); // 005
let h = "99";
console.log(h.padStart(5,"*")); //***99



// 7. padEnd()
// padEnd()
// Kaam: String ke end mein padding add karta hai.
// Important Point: Ye method tab useful hota hai jab tumhe fixed-length string chahiye ho.

// Ye method string ke end mein padding add karta hai, takki string ek certain length tak reach kare.
// Example:
let sr = "5";
console.log(sr.padEnd(7, "260")); // 5260260
let bb = "rahul";
console.log(bb.padEnd(10,"*"));///rahul*****



// 8.charAt()
// 8. charAt()
// Kaam: Ye specific index pe jo character hota hai, usse return karta hai.
// Important Point: Agar index out of bounds ho, toh empty string return hoti hai.

// Ye method string mein kisi specific index par jo character hai, usse return karta hai.
// Example:

let bbby = "Hello";
console.log(bbby.charAt(1)); // e
console.log(bbby.charAt(3)); // l

// 09. charCodeAt()
// charCodeAt()
// Kaam: Ye specific index ka character ka Unicode/ASCII code return karta hai.
// Important Point: Agar index invalid hai, toh NaN return hota hai.

// Ye method string ke kisi specific index ka Unicode character code return karta hai.
// Example:
let lll = "Hello";
console.log(lll.charCodeAt(0)); // 72 (Unicode code for 'H')


// 10.split()
// split()
// Kaam: String ko kisi delimiter ke basis par array mein split karta hai.
// Important Point: Agar delimiter nahi hai, toh poora string ek hi element ke roop mein array mein aa jayega.

// Ye method string ko ek array mein split karta hai, ek specific delimiter ke basis par.
// Example:
let tr = "Hello World rahul";
console.log(tr.split(" ")); // ["Hello", "World"]
console.log(tr.split(""));  // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

        

// .lengthpropwrty he          