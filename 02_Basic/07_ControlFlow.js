// < , <= , > , >= , == ,!= , === 
const isLoggedIn = false 

if(isLoggedIn) {
    console.log(`User Logged In`);
} else {
    console.log(`User Not Logged In`);
}

const balance = 1700

if( balance < 500) {
    console.log("balance Less than 500");
} else if (balance < 1000) {
    console.log("balance Less than 1000");
} else if( balance < 1500) {
    console.log("balance Less than 1500");
} else if( balance < 2000) {
    console.log("balance Less than 2000");
} else if( balance < 2500) {
    console.log("balance Less than 2500");
} else {
    console.log("balance Less than 2500");
} 


const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = false;
const loggedInFromgoogle = true;

if(userLoggedIn && debitCard) {
    console.log(`allowed user`);
} 

if(loggedInFromEmail || loggedInFromgoogle) {
    console.log(`Logged In user`);
}

const month = 3

switch(month) {
    case 1:  console.log("January");
    break;
    case 2:  console.log("Febuary");
    break;
    case 3:  console.log("March");
    break;
    case 4:  console.log("April");
    break;
    case 5:  console.log("May");
    break;
    case 6:  console.log("June");
    break;
    case 7:  console.log("July");
    break;
    case 8:  console.log("August");
    break;
    case 9:  console.log("September");
    break;
    case 10:  console.log("October");
    break;
    case 11:  console.log("November");
    break;
    case 12:  console.log("December");
    break;
    default:  console.log("Invalid Month");
}

// +++++++++++++++++++++++++++++++= Truthy & Falsey Value =++++++++++++++++++++++++++++++++

const userEmail = "user@example.com";
if(!userEmail) {
    console.log("No user email");
} else {
    console.log("User email");
}

//Falsey value
/**
 * false ,
 * 0 ,
 * -0 ,
 * BigInt 0n ,
 * "" ,
 * null ,
 * undefined ,
 * NaN ,
 */


//truth value
/**
 * "false" ,
 * "0",
 * " ",
 * [],
 * {},
 * function () {},
 */

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Empty Object");
} 


// +++++++++++++++++++++++++++++++= Nullish Coalescing Operator (??):null undefined =++++++++++++++++++++++++++++++++

let val1;
// val1 = 5 ?? 10
// val1 = null ?? "data From db"
// val1 = undefined ?? "Data From Function"
val1 = null ?? "Data From Function" ?? "data From db"
console.log(val1);

// +++++++++++++++++++++++++++++++= Ternary Operator =++++++++++++++++++++++++++++++++

const iceTeaPrice = 100;

iceTeaPrice <=80 ? console.log("Price is Affordable") : console.log("Price is Premium")