"use strict"; // this is used to instruct that treat all js  Code as newer versionf

let name = "Uday";
let age = 25;
let isLoggedIN = false;

/*
Number
BigInt
String
Boolean
null
undefined
symbol -- unique

Object
*/

console.log(typeof null); //object

console.log(typeof undefined); //undefined

let score = 33

console.log(typeof score); 

let valueInNumber = Number(score) 

console.log(typeof valueInNumber);

/** 
 * "33" => 33
 * "33abc" => NaN
 * true => 1; false => 0
 */

let valueInBoolean = Boolean(score) 

console.log(typeof valueInBoolean);

/** 
 * 1 => true ; 0 => false
 * "" => false
 * "uday" => true 
 * */

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);