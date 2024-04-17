/**
 * Primitve
 * 7 types :  String, Number, Boolean , null, undefined , Symbol , BigInt
 * 
 * 
 * Reference (Non Primitive )
 * 
 * Array , Objects , Functions -- stores in heap memory
 *  */ 

const Name = 'uday'
const score = 100;
const isLoggedIn = false;
const temperature = null;
let username ;
const id = Symbol('uday');
const name = Symbol('uday');
const bigNum = 4543645645643n
console.log(id == name);
console.log(typeof bigNum);
console.log(typeof null); //object

const heros = [ "Shatiman","Doga" , "Naagraj"]
const userData = {
    name : 'Shatiman',
    age : 22,
}
const myFun = function sayHello() {
    console.log('Hello Uday');
}
console.log(typeof myFun);//Function 


// *******************************************************************
let myPcName = 'myPcName'
let anotherPcName = 'anotherPcName'
anotherPcName = 'officePcName'
console.log(myPcName , anotherPcName);

let user = {
    email : 'test@example.com',
    upi : 'test@ybl',
}

let userTwo = user
userTwo.upi = 'test@apl' //changes in both beacuse share same address
console.log(user , userTwo);