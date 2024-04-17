/**
 * Primitve
 * 7 types :  String, Number, Boolean , null, undefined , Symbol , BigInt
 * 
 * 
 * Reference (Non Primitive )
 * 
 * Array , Objects , Functions
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