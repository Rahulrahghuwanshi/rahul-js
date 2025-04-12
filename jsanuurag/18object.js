Object Literals

const user = {firstnaem : 'rahul',
    lastname : 'raghuwanshi',
        age : 25
}
const myName = 'Anurag'

const username1 = ''
const username2 = ''

const user1 = {
    firstName: 'Akash'
}


const user2 = {
    firstName: 'Adarsh',
    'last-Name': 'Singh',
    Anurag: 'Developer'
}

console.log(user2.firstName);
console.log(user2["last-Name"]);
console.log(user2[myName]);
console.log(user2["first" + "Name"]);

const user2 = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    pata: {
        city: 'Bangalore',
        pinCode: 876876,
        state: 'Karnataka',
        moreDetails: {
            population: 9798897897,
            area: '787 sq km',
        }
    }
}

user2.age = 26
user2["is-student"] = true
const myName = 'rahul'
const usernamone = ''
const usernamtwo = ''
const user1 = {}
const user2 = {}
const mynaem = 'rahul'
const user2 = {
        firstName: 'Adarsh',
        'last-Name': 'Singh',
        Anurag: 'Developer'
    }
    console.log(user2.Anurag);//out:devloper
    console.log(user2['last-Name']);// same output singh     
    console.log(user2['first'+'Name']);// same output adarash     
    
 
const userram = {
    firstName : 'rahul',
    lastName :'singh',
}
userram.age = 25
userram["is-student"] = true
document.write(`${userram}`) //object object
object ke andr object 
const userram = {
        firstName : 'rahul',
        lastName :'singh',
        adress : { //adress ek object he 
            city : 'sgp',
            incode : '461771',
            state : 'm.p',
            moredeatls : { //ek or object
                area : 'hbd',
                distc : 'hoshangabad',
                rajdhani : '462026',
            }
        }
}   
console.log(`${userram.adress}`)
