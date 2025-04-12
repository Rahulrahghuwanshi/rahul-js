// /* <h1>object.freeze() && object.seal()</h1> */
// const userram = {
//     firstName : 'rahul',
//     lastName :'singh',

// }
// // delete userram.firstName // delete hojyga 
// Object.seal(userram) // ab delete nahi hoga khuch bhi  humne seal kr dia he  lekin exiting propertaies change kr sakte hen

// // delete userram.firstName
//  userram.firstName= 'raghu' // change ho raha he

// false btyga
//userram.mobilenum = '9584779765'// add hogya number obejct .seal() ke bad nahi hoga 
const userramr = {
    firstName : 'rahul',
    lastName :'singh',

}
Object.freeze(userram2)// ab na update hogi na add na delete
 userramr.firstName = 'raghu'
delete userramr.firstName //delte bhi nahi hoga
// in  keyeord  mtlv usme he ki nahi
// 'firstName' in userramr 

// true